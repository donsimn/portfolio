#!/usr/bin/env node
// Scans src/ for obsidian: imports, parses only those notes from the vault,
// and writes src/lib/data/obsidian-cache.json for use in Vercel deployments.
//
// Usage:
//   node scripts/fetch-obsidian.js
//   node scripts/fetch-obsidian.js /override/vault/path

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parseBlocks } from '../vite-plugin-obsidian.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Vault dir: CLI arg > extracted from vite.config.ts
function resolveVaultDir() {
  if (process.argv[2]) return process.argv[2]
  const config = fs.readFileSync(path.join(root, 'vite.config.ts'), 'utf-8')
  const match = config.match(/vaultDir:\s*['"`]([^'"`]+)['"`]/)
  if (match) return match[1]
  throw new Error(
    'Could not find vaultDir in vite.config.ts.\n' +
    'Pass it explicitly: node scripts/fetch-obsidian.js /path/to/vault'
  )
}

// Recursively scan src/ for `from "obsidian:note-name"` imports
function findObsidianImports(dir) {
  const notes = new Set()
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      for (const n of findObsidianImports(full)) notes.add(n)
    } else if (/\.(svelte|ts|js)$/.test(entry.name)) {
      const src = fs.readFileSync(full, 'utf-8')
      for (const [, name] of src.matchAll(/from\s+['"]obsidian:([^'"]+)['"]/g)) {
        notes.add(name)
      }
    }
  }
  return notes
}

const vaultDir = resolveVaultDir()
const cacheFile = path.join(root, 'src/lib/data/obsidian-cache.json')

console.log(`Vault: ${vaultDir}`)
console.log(`Cache: ${path.relative(root, cacheFile)}\n`)

const noteNames = findObsidianImports(path.join(root, 'src'))

if (!noteNames.size) {
  console.log('No obsidian: imports found in src/.')
  process.exit(0)
}

const cache = {}
let ok = true

for (const name of noteNames) {
  const filePath = path.join(vaultDir, `${name}.md`)
  if (!fs.existsSync(filePath)) {
    console.error(`  ✗ ${name} — file not found: ${filePath}`)
    ok = false
    continue
  }
  const blocks = parseBlocks(fs.readFileSync(filePath, 'utf-8'))
  cache[name] = blocks
  const keys = Object.keys(blocks)
  console.log(`  ✓ ${name} (${keys.length} exports: ${keys.join(', ')})`)
}

if (!ok) process.exit(1)

fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2))
console.log(`\nWrote ${path.relative(root, cacheFile)}`)
