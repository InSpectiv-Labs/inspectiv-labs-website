// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import { unified } from '@astrojs/markdown-remark';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://inspectivlabs.com',
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/admin') }), mdx()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});