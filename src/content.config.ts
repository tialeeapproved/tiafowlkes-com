import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================================
   DECISIONS — a decision log.
   Each entry is a declarative headline plus three labeled
   blocks. The structure is fixed on purpose: it's what makes
   eight entries comparable at a glance.
   ============================================================ */

const decisions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/decisions' }),
  schema: z.object({
    /* Declarative, past tense, sentence case. */
    headline: z.string(),
    context: z.string(),
    call: z.string(),
    followed: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { decisions };
