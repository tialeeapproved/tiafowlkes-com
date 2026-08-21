/* ============================================================
   SYSTEMS — the only numbered content on the site.
   The six are a genuine inventory, which is what earns the
   numerals. Nothing here runs past two lines.
   ============================================================ */

export const systemsLead =
  'Enduring operational frameworks built for cross-functional teams, engineered to drive alignment and outlive individual program cycles.';

export interface System {
  n: number;
  name: string;
  served: string;
  changed: string;
}

export const systems: System[] = [
  {
    n: 1,
    name: 'Enterprise participant database & onboarding framework',
    served: 'Served Devices & Services, Platforms & Ecosystems, Health & Home, and Pixel.',
    changed:
      'Unified legacy silos into a single participant database, scaling active contributors by 40% and lifting program engagement by 58%.',
  },
  {
    n: 2,
    name: 'Standardized issue & SLA tracking architecture',
    served: 'Served Health & Home engineering and validation teams.',
    changed:
      'Replaced fragmented team tracking with a single operational standard, achieving 100% adoption across Fitbit, Home, and Health.',
  },
  {
    n: 3,
    name: 'Unified launch readiness governance framework',
    served: 'Served Health & Home leadership and cross-PA executive stakeholders.',
    changed:
      'Standardized release data synthesis and risk narratives, streamlining executive sign-offs across all hardware gates.',
  },
  {
    n: 4,
    name: 'Executive validation & early adoption program',
    served: 'Served VP and Director-level leadership across the hardware ecosystem.',
    changed:
      'Eliminated onboarding friction for senior executives, establishing real-time feedback loops ahead of strategic launch decisions.',
  },
  {
    n: 5,
    name: 'Rapid issue escalation & hardware retrieval protocol',
    served: 'Served TV Ecosystem stakeholders, engineering leads, and field participants.',
    changed:
      'Streamlined the end-to-end path from field anomaly reporting to root-cause bug resolution and hardware triage.',
  },
  {
    n: 6,
    name: 'Centralized knowledge architecture & operations hub',
    served: 'Served the Health & Home testing organization.',
    changed:
      'Consolidated disparate program artifacts into a single access point, cutting onboarding time for extended team members.',
  },
];
