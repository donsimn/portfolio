// vite-plugin-obsidian.js
// Reads named blocks from Obsidian markdown files and exposes them
// as virtual modules you can import in any .svelte (or .js/.ts) file.
//
// USAGE IN vite.config.js / svelte.config.js:
//   import obsidian from './vite-plugin-obsidian.js'
//   plugins: [obsidian({ vaultDir: '/absolute/path/to/your/vault' })]
//
// SYNTAX A — headings as block IDs (preferred, renders nicely in Obsidian):
//   ## intro
//   Text with **bold**, _italic_, `code`, and [links](https://example.com).
//
//   ```json
//   { "key": "value" }
//   ```
//
//   More text after the code block.
//
// SYNTAX B — explicit delimiters (legacy, still supported):
//   %%block:intro%%
//   Content here.
//   %%end%%
//
// OUTPUT per block:
//   export const intro         = "Text...<br>More text after."   // HTML string, fences excluded
//   export const intro_code_0  = { code: '...', language: 'json' } // first fence in that block
//   export const intro_code_1  = { code: '...', language: 'ts' }   // second fence, etc.
//
// USAGE IN .svelte:
//   import { intro, intro_code_0 } from 'obsidian:my-note'
//   <p>{@html intro}</p>
//   <CodeBlock code={intro_code_0.code} language={intro_code_0.language} title="Example" />
//
// The virtual module name is:  obsidian:<filename-without-extension>
// e.g. for "about-me.md" → import from 'obsidian:about-me'

import fs from 'fs'
import path from 'path'

const HEADING = /^#{1,6}\s+(.+)$/
const BLOCK_OPEN = /^%%block:(\w+)%%\s*$/
const BLOCK_CLOSE = /^%%end%%\s*$/
const FENCE_OPEN = /^```(\w*).*$/   // captures language, ignores anything after (e.g. title hints)
const FENCE_CLOSE = /^```\s*$/
const UL_ITEM = /^(\s*)[*\-+]\s+(.+)$/
const OL_ITEM = /^(\s*)\d+\.\s+(.+)$/

/** Heading text → valid JS identifier */
function headingToKey(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '')
}

// ---------------------------------------------------------------------------
// XSS prevention
// ---------------------------------------------------------------------------
const ALLOWED_TAGS = new Set(['b', 'i', 'code', 'a'])

function sanitize(html) {
  return html.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g, (match, tag) => {
    if (ALLOWED_TAGS.has(tag.toLowerCase())) return match
    return match.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  })
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function safeHref(url) {
  try {
    const u = new URL(url)
    if (['http:', 'https:', 'mailto:'].includes(u.protocol)) return url
  } catch {
    if (!url.startsWith('javascript:')) return url
  }
  return '#'
}

// ---------------------------------------------------------------------------
// Inline markdown → HTML (no block-level elements — those are handled above)
// ---------------------------------------------------------------------------
function inlineMarkdown(text) {
  // Extract code spans first so their contents are never touched by other rules
  const codeSpans = []
  const safe = text.replace(/`(.+?)`/g, (_, c) => {
    codeSpans.push(`<code>${escapeHtml(c)}</code>`)
    return `\x00${codeSpans.length - 1}\x00`
  })

  const rendered = safe
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/_(.+?)_/g, '<i>$1</i>')
    .replace(/(?<![(\["'>])(https?:\/\/[^\s<>"'()[\]]+)/g, rawUrl => {
      const url = rawUrl.replace(/[.,!?:;]+$/, '')
      return `<a href="${escapeHtml(safeHref(url))}">${escapeHtml(url)}</a>`
    })
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, t, url) =>
      `<a href="${escapeHtml(safeHref(url))}">${escapeHtml(t)}</a>`)

  return rendered.replace(/\x00(\d+)\x00/g, (_, i) => codeSpans[+i])
}

// ---------------------------------------------------------------------------
// Build nested <ul>/<ol> HTML from a run of list lines
// ---------------------------------------------------------------------------
function indentWidth(str, tabSize = 4) {
  let col = 0
  for (const ch of str) col += ch === '\t' ? tabSize - (col % tabSize) : 1
  return col
}

function buildListHtml(listLines) {
  const items = listLines
    .filter(l => UL_ITEM.test(l) || OL_ITEM.test(l))
    .map(line => {
      const u = line.match(UL_ITEM)
      const o = line.match(OL_ITEM)
      const m = u || o
      return { indent: indentWidth(m[1]), type: u ? 'ul' : 'ol', text: sanitize(inlineMarkdown(m[2])) }
    })

  if (!items.length) return ''

  const openTag = type => type === 'ul'
    ? '<ul style="list-style-type: square; padding-left: 1.5em; margin-bottom: 0">'
    : '<ol style="list-style-type: decimal; padding-left: 1.5em; margin-bottom: 0">'

  const stack = []
  let html = ''

  for (const item of items) {
    if (!stack.length) {
      html += `${openTag(item.type)}<li>${item.text}`
      stack.push({ type: item.type, indent: item.indent })
      continue
    }

    const top = stack[stack.length - 1]

    if (item.indent > top.indent) {
      html += `${openTag(item.type)}<li>${item.text}`
      stack.push({ type: item.type, indent: item.indent })
    } else {
      while (stack.length > 1 && stack[stack.length - 1].indent > item.indent) {
        const p = stack.pop()
        html += `</li></${p.type}>`
      }
      if (stack[stack.length - 1].type !== item.type) {
        const p = stack.pop()
        html += `</li></${p.type}>${openTag(item.type)}`
        stack.push({ type: item.type, indent: item.indent })
      }
      html += `</li><li>${item.text}`
    }
  }

  while (stack.length) {
    const p = stack.pop()
    html += `</li></${p.type}>`
  }

  return html
}

// ---------------------------------------------------------------------------
// Parse accumulated lines into:
//   { html: string, codeBlocks: Array<{ code: string, language: string }> }
//
// Fenced blocks are extracted into codeBlocks and removed from the HTML output.
// ---------------------------------------------------------------------------
function parseLines(lines) {
  const codeBlocks = []
  const htmlLines = []
  let inFence = false
  let fenceLang = ''
  let fenceLines = []

  for (const line of lines) {
    if (!inFence && FENCE_OPEN.test(line)) {
      inFence = true
      fenceLang = line.match(FENCE_OPEN)[1] || 'text'
      fenceLines = []
      continue
    }
    if (inFence && FENCE_CLOSE.test(line)) {
      codeBlocks.push({ code: fenceLines.join('\n'), language: fenceLang })
      inFence = false
      fenceLines = []
      continue
    }
    if (inFence) {
      fenceLines.push(line)
    } else {
      htmlLines.push(line)
    }
  }

  // Unclosed fence — still extract it
  if (inFence && fenceLines.length) {
    codeBlocks.push({ code: fenceLines.join('\n'), language: fenceLang })
  }

  let html = ''
  let pendingBreaks = 0
  let listBuf = []

  function flushList() {
    if (!listBuf.length) return
    if (html) html += '<br>'.repeat(pendingBreaks + 1)
    html += buildListHtml(listBuf)
    listBuf = []
    pendingBreaks = 0
  }

  for (const line of htmlLines) {
    if (UL_ITEM.test(line) || OL_ITEM.test(line)) {
      listBuf.push(line)
    } else {
      if (listBuf.length) flushList()
      if (line.trim() === '') {
        pendingBreaks++
      } else {
        if (html) html += '<br>'.repeat(pendingBreaks + 1)
        html += sanitize(inlineMarkdown(line))
        pendingBreaks = 0
      }
    }
  }
  flushList()

  return { html, codeBlocks }
}

// ---------------------------------------------------------------------------
// Main parser — returns flat exports map
// ---------------------------------------------------------------------------
function parseBlocks(source) {
  const exports = {}   // key → string or { code, language }
  let current = null
  let lines = []
  let mode = null

  function flush() {
    if (!current) return
    const { html, codeBlocks } = parseLines(lines)
    exports[current] = html
    codeBlocks.forEach((block, i) => {
      exports[`${current}_code_${i}`] = block
    })
  }

  for (const raw of source.split('\n')) {
    const headingMatch = raw.match(HEADING)
    const openMatch = raw.match(BLOCK_OPEN)
    const closeMatch = BLOCK_CLOSE.test(raw)

    if (headingMatch) {
      if (mode === 'heading') flush()
      if (mode === 'explicit') { lines.push(raw); continue }
      current = headingToKey(headingMatch[1])
      lines = []
      mode = 'heading'

    } else if (openMatch) {
      if (mode === 'heading') flush()
      current = openMatch[1]
      lines = []
      mode = 'explicit'

    } else if (closeMatch && mode === 'explicit') {
      flush()
      current = null
      lines = []
      mode = null

    } else if (current !== null) {
      lines.push(raw)
    }
  }

  if (mode === 'heading') flush()
  if (mode === 'explicit') console.warn(`[obsidian plugin] Block "${current}" was never closed with %%end%%`)

  return exports
}

// ---------------------------------------------------------------------------
// Serialize to ES module
// ---------------------------------------------------------------------------
function toModule(exports) {
  const lines = Object.entries(exports).map(([name, value]) =>
    `export const ${name} = ${JSON.stringify(value)};`
  )
  return lines.join('\n') || 'export {};'
}

export { parseBlocks }

// ---------------------------------------------------------------------------
// Vite plugin
// ---------------------------------------------------------------------------
export default function obsidianPlugin({ vaultDir, cacheFile } = {}) {
  if (!vaultDir) throw new Error('[obsidian plugin] vaultDir option is required')

  const resolvedCache = cacheFile
    ? path.resolve(cacheFile)
    : path.resolve('src/lib/data/obsidian-cache.json')

  const prefix = 'obsidian:'

  return {
    name: 'vite-plugin-obsidian',

    resolveId(id) {
      if (id.startsWith(prefix)) return '\0' + id
    },

    load(id) {
      if (!id.startsWith('\0' + prefix)) return

      const noteName = id.slice(('\0' + prefix).length)

      // Vault unavailable (e.g. Vercel) — serve from pre-built cache
      if (!fs.existsSync(vaultDir)) {
        if (!fs.existsSync(resolvedCache)) {
          throw new Error(
            `[obsidian plugin] Vault not found and no cache at ${resolvedCache}.\n` +
            `Run: npm run fetch-obsidian`
          )
        }
        const cache = JSON.parse(fs.readFileSync(resolvedCache, 'utf-8'))
        if (!cache[noteName]) {
          throw new Error(
            `[obsidian plugin] Note "${noteName}" missing from cache. Re-run: npm run fetch-obsidian`
          )
        }
        return toModule(cache[noteName])
      }

      const filePath = path.resolve(vaultDir, `${noteName}.md`)
      if (!fs.existsSync(filePath)) {
        throw new Error(`[obsidian plugin] Note not found: ${filePath}`)
      }

      this.addWatchFile(filePath)
      const source = fs.readFileSync(filePath, 'utf-8')
      return toModule(parseBlocks(source))
    },
  }
}
