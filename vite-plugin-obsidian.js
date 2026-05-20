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
  return text
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/_(.+?)_/g, '<i>$1</i>')
    .replace(/`(.+?)`/g, (_, c) => `<code>${escapeHtml(c)}</code>`)
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, text, url) =>
      `<a href="${escapeHtml(safeHref(url))}">${escapeHtml(text)}</a>`)
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

  const html = sanitize(
    htmlLines
      .filter(l => l.trim() !== '')
      .map(inlineMarkdown)
      .join('<br>')
  )

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

// ---------------------------------------------------------------------------
// Vite plugin
// ---------------------------------------------------------------------------
export default function obsidianPlugin({ vaultDir } = {}) {
  if (!vaultDir) throw new Error('[obsidian plugin] vaultDir option is required')

  const prefix = 'obsidian:'

  return {
    name: 'vite-plugin-obsidian',

    resolveId(id) {
      if (id.startsWith(prefix)) return '\0' + id
    },

    load(id) {
      if (!id.startsWith('\0' + prefix)) return

      const noteName = id.slice(('\0' + prefix).length)
      const filePath = path.resolve(vaultDir, `${noteName}.md`)

      if (!fs.existsSync(filePath)) {
        throw new Error(`[obsidian plugin] Note not found: ${filePath}`)
      }

      this.addWatchFile(filePath)

      const source = fs.readFileSync(filePath, 'utf-8')
      const blocks = parseBlocks(source)
      return toModule(blocks)
    },
  }
}
