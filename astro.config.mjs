// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Cambiá site por tu dominio final cuando despliegues (ayuda al SEO / sitemap).
  site: 'https://nicolasrodriguez.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
