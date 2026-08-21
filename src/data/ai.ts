/* ============================================================
   AI FLUENCY
   Systems she built herself. Two are engineered platforms; the
   third is the client web practice, which is a list rather than
   a narrative — so it carries pills instead of prose.
   ============================================================ */

export interface AiProject {
  name: string;
  descriptor: string;
  /* The narrative cards use `impact`. The web card uses `pills`
     instead — a roster reads faster as a roster. */
  impact?: string;
  pills?: { name: string; ai?: boolean }[];
  tools?: string[];
  note?: string;
  wide?: boolean;
}

export const aiProjects: AiProject[] = [
  {
    name: 'AI-Integrated Operations CRM',
    descriptor: 'Automated task orchestration and reporting platform for an AI tutoring client',
    impact:
      'Engineered an end-to-end operational CRM automating daily task scheduling, student report intake, and real-time reporting dashboards. Integrated a custom conversational assistant for automated inquiry resolution, shifting instructor capacity from administrative overhead to direct instruction.',
    tools: ['Claude Code', 'Gemini'],
  },
  {
    name: 'Predictive Financial & Risk Dashboard',
    descriptor: 'Automated budgeting engine with real-time risk modeling and variance tracking',
    impact:
      'Architected a live financial telemetry engine integrating real-time account data to model multi-horizon budgets and project forward spend against target goals. Automated early-warning risk detection to flag budget variances and capital overexposure prior to cost realization.',
    tools: ['Claude Code', 'Gemini'],
  },
  {
    name: 'Web Development & UX',
    descriptor: 'Ten client sites designed, built, and shipped end to end',
    wide: true,
    pills: [
      { name: 'Living on Purpose', ai: true },
      { name: 'Frequency 313', ai: true },
      { name: 'Two-Six Project' },
      { name: "Zoe's Kitchen" },
      { name: '5 Star Carolina' },
      { name: 'Purposely Prepared' },
      { name: 'Jive Turkeys' },
      { name: 'JC-Eyes' },
      { name: 'Brows by Lolo' },
      { name: 'Digital Audit' },
    ],
    note: 'Living on Purpose and Frequency 313 were built with Claude Code.',
  },
];
