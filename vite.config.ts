import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { plugin as markdown, Mode } from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    markdown({ mode: [Mode.HTML] }),
    svelte(),
  ]
})
