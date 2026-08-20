/* ============================================================
   SITE COPY & LINKS
   "Reword the hero" / "update my links" → this file.
   ============================================================ */

export const site = {
  name: 'tia fowlkes',
  role: 'Technical Program Manager',
  // TODO: confirm hero line
  tagline: 'Program execution, adoption, and adherence at scale.',

  email: 'tiafowlkes@gmail.com',
  resume: '/resume/tia-fowlkes-resume.pdf',

  links: [
    // TODO: add real URLs
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
} as const;

/* The impact strip — the only place on the desktop where scope is
   asserted before a click. Scale, scale, scope, judgment.
   No activity metrics here. */
export const impact = [
  '20 launch markets',
  '2M users',
  '3 org lines unified',
  'launch KPI redefined at director level',
] as const;
