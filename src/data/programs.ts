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
    label: 'Defined strategy',
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
  /* The product shot that opens the section, same slug set the
     portfolio matrix uses. See `public/programs`. */
  icon: string;
  descriptor: string;
  metrics: string[];
  points: string[];
}

export const programs: Program[] = [
  {
    id: 'streamer-4k',
    name: 'Google TV Streamer 4K',
    icon: 'streamer-4k',
    descriptor: 'End-to-end validation architecture & executive release gating',
    metrics: [
      '2,600+ participants',
      '~10K devices',
      '≥95% production validation bar',
      '$2M+ initial sales',
      '1M+ activations',
      '20 launch markets',
    ],
    points: [
      'Spearheaded end-to-end launch governance and release engineering across 10,000+ pre-release devices and 2,600+ participants, enforcing a ≥95% production validation quality bar.',
      'Architected first-of-its-kind validation protocols for Matter over Thread and Matter over Wi-Fi smart home hub architecture, establishing standard testing baselines with no prior blueprint.',
      'Synthesized strategic telemetry and risk assessments for Executive VP and GM leadership, securing data-backed launch gating approvals.',
      'Engineered multi-phase cohort allocation models and global distribution pipelines, guaranteeing real-time feedback loops during pre-launch hardware testing.',
      'Drove product-market readiness resulting in commercial delivery that achieved a 4.5/5.0 user satisfaction rating and 21 NPS.',
    ],
  },
  {
    id: 'sonos',
    name: 'Sonos v. Google firmware release',
    icon: 'nest-audio',
    descriptor: 'High-stakes court-mandated release governance',
    metrics: [
      '720K+ devices',
      '10M+ in market',
      '1 release window',
    ],
    points: [
      'Owned the cross-functional response unit for high-stakes patent litigation, enforcing strict compliance across an installed base of 10M+ active devices.',
      'Harmonized complex software changes, feature activations, and external communications into a single, synchronized release gate across 720K+ targeted devices within a strict 1-release window.',
      'Unblocked critical feature rollouts against aggressive engineering schedules, maintaining alignment across Legal, Engineering, Marketing, and PR communication lockouts.',
      'Operationalized real-time compliance dashboards, providing executive leadership complete visibility into court-mandated release milestones.',
    ],
  },
  {
    id: 'lg-webos',
    name: 'LG webOS with Google Home Platform',
    icon: 'lg-webos',
    descriptor: '0-to-1 strategic 3P integration & platform expansion',
    metrics: [
      '2 enterprise entities',
      '0-to-1 framework',
      '1P & 3P alignment',
    ],
    points: [
      'Led executive alliance management between enterprise entities, driving operational alignment across product, engineering, and business development leads.',
      'Authored the foundational 0-to-1 integration, testing, and compliance framework for third-party platform expansion across the smart home ecosystem.',
      'Resolved critical cross-platform interoperability issues and field telemetry gaps impacting in-market hardware, safeguarding strategic partner relationships.',
      'Negotiated integration scope and risk boundaries, establishing operational standards for subsequent external ecosystem scaling.',
    ],
  },
  {
    id: 'chromecast-hd',
    name: 'Chromecast HD',
    icon: 'chromecast-hd',
    descriptor: 'Full-lifecycle program ownership from validation to post-launch',
    metrics: [
      '5.8K deployed units',
      '3.4K active users',
      'Single-threaded lead',
    ],
    points: [
      'Directed full-lifecycle program execution as a single-threaded lead, managing 5.8K deployed test units and 3.4K active users from validation through post-launch.',
      'Identified and mitigated a critical late-stage voice remote usability defect, institutionalizing gated user feedback checkpoints across all downstream portfolio programs.',
      'Established a standardized field telemetry integration model, creating a unified operational framework now deployed across the entire hardware vertical.',
      'Fed real-time field telemetry directly into Plan of Record (POR) adjustments, optimizing defect resolution cycles prior to mass production.',
    ],
  },
];
