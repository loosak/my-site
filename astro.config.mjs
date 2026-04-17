// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
      mdx({
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
      }),
      svelte(),
  ],

  vite: {
      plugins: [tailwindcss()],
  },

  adapter: vercel(),
});