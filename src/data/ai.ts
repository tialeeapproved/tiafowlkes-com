/* ============================================================
   AI FLUENCY
   Two engineered platforms, the client web practice as a roster,
   and the tool matrix underneath — what she actually reaches for
   and what she uses each one to do.
   ============================================================ */

export const aiLead =
  'Hands-on application of LLMs and agentic frameworks; building custom automations, predictive risk engines, and production web platforms while deploying reliable generative features at scale.';

export interface AiProject {
  name: string;
  descriptor: string;
  /* The narrative cards use `impact`. The web card uses `pills`
     instead — a roster reads faster as a roster. */
  impact?: string;
  /* `href` is optional: a pill with no live URL yet renders as
     plain text rather than a link to nowhere. */
  pills?: { name: string; href?: string; builtWith?: string }[];
  tools?: string[];
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
    descriptor:
      'Custom web platforms and user interfaces built via AI-driven development workflows',
    wide: true,
    pills: [
      { name: 'Living on Purpose', href: 'https://living-on-purpose.org/', builtWith: 'Claude Code' },
      { name: 'Frequency 313', href: 'https://frequency313.com/', builtWith: 'Claude Code' },
      { name: 'Two-Six Project', href: 'https://www.twosixproject.com/' },
      { name: "Zoe's Kitchen", href: 'https://www.zoes-kitchen.com/' },
      { name: '5 Star Carolina', href: 'https://www.5starcarolina.com/' },
      { name: 'Purposely Prepared', href: 'https://www.purposelyprepared.com/' },
      { name: 'Jive Turkeys', href: 'https://www.jiveturkeysdetroit.com/' },
      { name: 'JC-Eyes', href: 'https://www.jc-eyes.com/' },
      { name: 'Brows by Lolo', href: 'https://browsbylolo.com/' },
    ],
  },
];

/* ---- the tool matrix ----------------------------------------
   Cut out of Tia's own image; the capability lines are reset as
   real text so they use the site's face and reflow on a phone. */
export interface AiTool {
  slug: string;
  name: string;
  uses: string[];
}

export const aiTools: AiTool[] = [
  {
    slug: 'claude-code',
    name: 'Claude Code',
    uses: [
      'Native apps synced to database',
      'Site deployment',
      'Automated reporting + dashboards',
      'Multi-agent task orchestration',
    ],
  },
  {
    slug: 'antigravity',
    name: 'Antigravity',
    uses: ['Chrome organization', 'Scheduling + task sequencing', 'Async workflow synthesis'],
  },
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    uses: ['Visual concepting', 'Cross-model output verification', 'Quick research + summarization'],
  },
];
