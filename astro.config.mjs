import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.teltechsas.com',
  output: 'static',
  build: { format: 'directory' }
});