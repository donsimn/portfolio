import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import obsidian from './vite-plugin-obsidian.js'

export default defineConfig({
  plugins: [sveltekit(), obsidian({ vaultDir: '/home/donsim/vaults/secondbrain/projects/blog' })]
});
