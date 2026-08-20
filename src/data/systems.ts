/* ============================================================
   SYSTEMS — the only numbered content on the site.
   The six are a genuine inventory, which is what earns the
   numerals. Nothing here runs past two lines.
   ============================================================ */

export const systemsLead =
  'The programs ended. These did not. Six operating systems built for teams that had no obligation to adopt them, and adopted them anyway.';

export interface System {
  n: number;
  name: string;
  served: string;
  changed: string;
}

export const systems: System[] = [
  {
    n: 1,
    name: 'Participant database and new hire onboarding',
    served: 'Served Devices & Services, Platforms & Ecosystems, Health & Home, and Pixel.',
    changed:
      'Became the shared participant database across all four organizations, growing the contributor population 40% and lifting engagement 58%.',
  },
  {
    n: 2,
    name: 'Tracker standardization',
    served: 'Served the Health & Home testing team.',
    changed:
      'Replaced program-by-program tracking with a single template, reaching full adoption across Fitbit, Home, and Health.',
  },
  {
    n: 3,
    name: 'Launch readiness review template',
    served: 'Served Health & Home and its cross-functional stakeholders.',
    changed: 'Unified the data and the narrative entering every review.',
  },
  {
    n: 4,
    name: 'Executive testing program',
    served: 'Served leadership across the portfolio.',
    changed:
      'Removed the onboarding friction that kept executives out of products in flight, and gave them direct visibility ahead of launch decisions.',
  },
  {
    n: 5,
    name: 'Investigation and retrieval process',
    served: 'Served TV stakeholders and affected participants.',
    changed: 'Shortened the path from reported issue to resolved bug.',
  },
  {
    n: 6,
    name: 'Central team repository',
    served: 'Served the Health & Home testing team.',
    changed: 'Consolidated scattered resources into a single access point.',
  },
];

export const systemsClosing =
  'Also built: the intake process published on the team site, which let less tenured teammates run recruitment without escalation, and the revised program plan and portfolio planning formats adopted across the organization.';
