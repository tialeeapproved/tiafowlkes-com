// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://tiafowlkes.com',
  integrations: [react()],
  // Everything prerenders to static HTML by default.
  // The chatbot endpoint (later) opts out with `export const prerender = false`.
});
