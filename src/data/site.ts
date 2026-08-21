/* ============================================================
   SITE COPY & LINKS
   ============================================================ */

export const site = {
  name: 'Tia Fowlkes',
  role: 'Technical Program Manager',
  tagline:
    'Four years across the Nest and Google TV portfolio, leading the entertainment vertical.',

  email: 'tiafowlkes@gmail.com',
  /* Points at Drive, not the copy in `public/resume`, so Tia can
     swap the résumé without a deploy. That local PDF stays as a
     fallback — if it is ever edited, this link is the one that
     matters. */
  resume: 'https://drive.google.com/file/d/1G14iJwEOt_jRAbx9UnUTR0GUjrbRdDcY/view?usp=sharing',

  /* Standing facts. They sit in the taskbar beside her name as plain
     text — the two things a recruiter checks before anything else,
     answered without costing a click. Not links, not buttons. */
  facts: ['Technical Program Manager', 'New York based', 'B.S. Computer Science'],

  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tiafowlkes' },
  ],
} as const;
