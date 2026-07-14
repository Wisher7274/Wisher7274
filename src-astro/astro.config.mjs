// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base: '/roadmap-for-myself/',
  outDir: '../docs',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue()]
});