// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel/static'; // ou '@astrojs/vercel/static' se for estático


// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'static', // ou 'static' para sites estáticos
  adapter: vercel(),

  
});

