import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================================
   THE EVIDENCE LIBRARY
   One markdown file per unit. Tags drive every folder, every
   filter, and (later) the chatbot's match engine — so a unit is
   written once and appears wherever it's relevant.
   ============================================================ */

const evidence = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evidence' }),
  schema: z.object({
    title: z.string(),
    /* One line. Used on cards, in search, and as meta description. */
    summary: z.string(),

    /* Drives folder membership. A unit can live in several. */
    tags: z.array(z.enum(['decisions', 'programs', 'systems', 'ai'])),

    org: z.string().default('Google'),
    role: z.string().optional(),
    period: z.string().optional(),

    /* Presence of `outcome` = this unit carries a hard number.
       Outcome metrics only — not activity metrics. */
    outcome: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .optional(),

    /* Credibility signals for a program role. */
    scale: z
      .object({
        markets: z.string().optional(),
        users: z.string().optional(),
        stakeholders: z.array(z.string()).optional(),
        timeline: z.string().optional(),
      })
      .optional(),

    /* PgM work is frequently under NDA. `confidential: true`
       redacts the org name and strips external links at build. */
    confidential: z.boolean().default(false),

    /* draft: true keeps a unit out of the build entirely. */
    draft: z.boolean().default(false),

    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { evidence };
