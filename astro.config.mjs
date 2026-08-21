// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://tiafowlkes.com',
  integrations: [react()],
  /* Every page still prerenders to static HTML — the adapter only
     exists so `/api/chat` can run as a function. That route opts out
     with `export const prerender = false`; nothing else does, so the
     rest of the site is served from the CDN exactly as before. */
  adapter: vercel(),
});
