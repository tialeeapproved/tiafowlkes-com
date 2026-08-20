/* ============================================================
   PROGRAMS — breadth first, depth second.
   `portfolio` is the matrix at the top. `programs` are the
   detail sections below it.
   ============================================================ */

export const programsLead =
  'Four years leading end-to-end program execution across Nest and Google TV within the entertainment vertical. Governing complex hardware/software integrations across 1P/3P ecosystems from early validation through global commercialization.';

export const portfolio = [
  {
    label: 'Strategic scope',
    items: [
      'Google TV Streamer 4K',
      'Chromecast with Google TV',
      'Chromecast HD',
      'LG webOS with Google Home',
      'Nest Hub 7"',
      'ADT with Nest Doorbell',
    ],
  },
  {
    label: 'Managed releases',
    items: [
      'Google TV Streamer 4K',
      'Chromecast with Google TV',
      'Chromecast HD',
      'Nest Mini',
      'Nest Hub 10"',
      'Nest Wifi',
      'Nest Audio',
      'Nest Hub 7"',
      'Pixel Tablet',
      'Pixel Buds',
      'Pixel Buds Pro 2',
      'Google Home app',
    ],
  },
  {
    label: 'Ecosystem platforms',
    items: ['Google TV', 'Google Home Platform', 'Matter', 'Assistant', 'Fitbit'],
  },
  {
    label: 'Cross-functional governance',
    items: [
      'Product Management',
      'Technical Program Management',
      'Software & Hardware Engineering',
      'UX Design & Research',
      'Legal',
      'Product Marketing',
      'PR',
      'Regulatory Compliance',
      'QA',
      '3P Strategic Partners (LG, Walmart, ADT)',
      'Global Vendor Operations',
    ],
  },
];

export interface Program {
  id: string;
  name: string;
  descriptor: string;
  metrics: string[];
  points: string[];
}

export const programs: Program[] = [
  {
    id: 'streamer-4k',
    name: 'Google TV Streamer 4K',
    descriptor: 'End-to-end validation architecture & executive release gating',
    metrics: ['2,600+ participants', '~10K devices', '≥95% production validation bar'],
    points: [
      'Architected the end-to-end testing and quality strategy, establishing entrance/exit criteria, global distribution pipelines, and multi-phase cohort allocation models.',
      'Pioneered the initial validation framework for Matter over Thread and Matter over Wi-Fi on hub architecture with no existing blueprint.',
      'Delivered strategic telemetry and risk synthesis directly to the GM and executive VP leads, driving data-backed launch approvals that achieved a 4.5 user satisfaction score and 21 NPS.',
    ],
  },
  {
    id: 'commercialization',
    name: 'Google TV Streamer 4K, commercialization',
    descriptor: 'Global partner readiness, cross-PA launch, & go-to-market execution',
    metrics: ['$2M+ initial sales', '1M+ activations', '20 launch markets'],
    points: [
      'Governed external partner integration across LG, Walmart, and key OEMs through onboarding, technical allocation, and operational SLA tracking.',
      'Designed cross-functional coordination playbooks that accelerated commercialization readiness, increasing program throughput by 22%.',
      'Synchronized factory image flashing and out-of-box experience (OOBE) milestones across Google Home app, Android TV, and Assistant engineering teams to preserve release quality.',
    ],
  },
  {
    id: 'sonos',
    name: 'Sonos v. Google firmware release',
    descriptor: 'High-stakes court-mandated release governance',
    metrics: ['720K+ devices', '10M+ in market', '1 release window'],
    points: [
      'Owned the cross-functional response unit, unifying Legal, Engineering, Marketing, and Product around strict court-ordered compliance windows.',
      'Harmonized complex software changes, feature activations, and external communications into a single, synchronized release gate.',
      'Unblocked critical feature rollouts against an aggressive engineering schedule and established PR communication lockouts.',
    ],
  },
  {
    id: 'lg-webos',
    name: 'LG webOS with Google Home Platform',
    descriptor: '0-to-1 strategic 3P integration & platform expansion',
    metrics: ['2 enterprise entities', '0-to-1 framework', '1P & 3P alignment'],
    points: [
      'Led executive alliance management between Google and LG, driving operational alignment across product, engineering, and business development leads.',
      'Authored the foundational integration, testing, and compliance framework for 3P platform expansion across the smart home ecosystem.',
      'Resolved critical cross-platform interoperability issues and field telemetry gaps impacting in-market hardware.',
    ],
  },
  {
    id: 'chromecast-hd',
    name: 'Chromecast HD',
    descriptor: 'Full-lifecycle program ownership from validation to post-launch',
    metrics: ['5.8K deployed units', '3.4K active users', 'Single-threaded lead'],
    points: [
      'Directed program execution independently from initial hardware allocation through defect resolution, feeding field telemetry directly into Plan of Record (POR) adjustments.',
      'Identified a critical late-stage voice remote usability defect, leading to the institutionalization of gated user feedback checkpoints across all downstream portfolio programs.',
      'Established the standardized telemetry integration model now utilized across the entire hardware vertical.',
    ],
  },
];
