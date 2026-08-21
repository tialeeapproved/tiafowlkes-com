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
  pills?: { name: string; href: string; builtWith?: string }[];
  tools?: string[];
  wide?: boolean;
}

/* Every pill points at that project's case study on the
   tialeeapproved portfolio, which is where the work is written up. */
const P = 'https://www.tialeeapproved.com';

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
      { name: 'Living on Purpose', href: `${P}/lop-audit-1`, builtWith: 'Claude Code' },
      { name: 'Frequency 313', href: `${P}/frequency313`, builtWith: 'Claude Code' },
      { name: 'Two-Six Project', href: `${P}/portfolio-two-six-project` },
      { name: "Zoe's Kitchen", href: `${P}/portfolio-zoes-kitchen` },
      { name: '5 Star Carolina', href: `${P}/5starcarolina` },
      { name: 'Purposely Prepared', href: `${P}/portfolio-purposely-prepared` },
      { name: 'Jive Turkeys', href: `${P}/portfolio-jive-turkeys` },
      { name: 'JC-Eyes', href: `${P}/portfolio-jc-eyes` },
      { name: 'Brows by Lolo', href: `${P}/portfolio-brows-by-lolo` },
      { name: 'Digital Audit', href: `${P}/lop-audit` },
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
