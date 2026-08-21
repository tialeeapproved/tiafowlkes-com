/* ============================================================
   PROGRAMS — breadth first, depth second.
   `portfolio` is the matrix at the top. `programs` are the
   detail sections below it.
   ============================================================ */

export const programsLead =
  'End-to-end program governance across full hardware and software lifecycles—driving cross-PA alignment, 3P partner integrations, and global launch execution.';

/* An item is either a bare string or a name with a product shot.
   The shots are cut out of Tia's own product images and live in
   `public/programs`. They run at 30px — recognition, not decoration,
   so the column stays as short as it was when it was a plain list. */
export interface PortfolioItem {
  name: string;
  icon?: string;
}

export const portfolio: { label: string; items: PortfolioItem[] }[] = [
  {
    label: 'Strategic scope',
    items: [
      { name: 'Google TV Streamer 4K', icon: 'streamer-4k' },
      { name: 'Chromecast with Google TV', icon: 'chromecast-gtv' },
      { name: 'Chromecast HD', icon: 'chromecast-hd' },
      { name: 'LG webOS with Google Home', icon: 'lg-webos' },
      { name: 'Nest Hub 7"', icon: 'nest-hub-7' },
      { name: 'ADT with Nest Doorbell', icon: 'nest-doorbell-adt' },
    ],
  },
  {
    label: 'Managed releases',
    items: [
      { name: 'Google TV Streamer 4K', icon: 'streamer-4k' },
      { name: 'Chromecast with Google TV', icon: 'chromecast-gtv' },
      { name: 'Chromecast HD', icon: 'chromecast-hd' },
      { name: 'Nest Mini', icon: 'nest-mini' },
      { name: 'Nest Hub 10"', icon: 'nest-hub-10' },
      { name: 'Nest Wifi', icon: 'nest-wifi' },
      { name: 'Nest Audio', icon: 'nest-audio' },
      { name: 'Nest Hub 7"', icon: 'nest-hub-7' },
      { name: 'Pixel Tablet', icon: 'pixel-tablet' },
      { name: 'Pixel Buds', icon: 'pixel-buds' },
      { name: 'Pixel Buds Pro 2', icon: 'pixel-buds-pro-2' },
      { name: 'Google Home app', icon: 'home-app' },
    ],
  },
  {
    label: 'Ecosystem platforms',
    items: [
      { name: 'Google TV', icon: 'google-tv' },
      { name: 'Google Home Platform', icon: 'home-platform' },
      { name: 'Matter', icon: 'matter' },
      { name: 'Assistant', icon: 'assistant' },
      { name: 'Fitbit', icon: 'fitbit' },
    ],
  },
  {
    label: 'Cross-functional governance',
    items: [
      { name: 'Product Management' },
      { name: 'Technical Program Management' },
      { name: 'Software & Hardware Engineering' },
      { name: 'UX Design & Research' },
      { name: 'Legal' },
      { name: 'Product Marketing' },
      { name: 'PR' },
      { name: 'Regulatory Compliance' },
      { name: 'QA' },
      { name: '3P Strategic Partners (LG, Walmart, ADT)' },
      { name: 'Global Vendor Operations' },
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
