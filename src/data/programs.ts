/* ============================================================
   PROGRAMS — breadth first, depth second.
   `portfolio` is the matrix at the top. `programs` are the
   detail panels below it.
   ============================================================ */

export const programsLead =
  'Four years across the Nest and Google TV portfolio, leading the entertainment vertical. Hardware and software, first-party and third-party, from unreleased hardware through in-market release.';

export const portfolio = [
  {
    label: 'Defined strategy',
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
    label: 'Platforms',
    items: ['Google TV', 'Google Home Platform', 'Matter', 'Assistant', 'Fitbit'],
  },
  {
    label: 'Cross-functional scope',
    items: [
      'Product',
      'Technical Program Management',
      'Software Engineering',
      'Hardware Engineering',
      'User Experience',
      'Legal',
      'Marketing',
      'Public Relations',
      'Compliance',
      'Quality Assurance',
      'External partners (LG, Walmart, ADT)',
      'Vendor teams',
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
    descriptor: 'Path to quality, entrance criteria through scale approval',
    metrics: ['2,600+ participants', '~10K devices', '≥95% production validation bar'],
    points: [
      'Defined the testing strategy end to end: entrance and success criteria, distribution, activation schedules, and allocation across three phases',
      'Ran the first compatibility testing of Matter over Thread and Matter over Wi-Fi against a hub device, with no prior framework to work from',
      'Delivered insight directly to the general manager and executive leadership, informing launch decisions that landed the product at 4.5 satisfaction and an NPS of 21',
    ],
  },
  {
    id: 'commercialization',
    name: 'Google TV Streamer 4K, commercialization',
    descriptor: 'Third-party partner readiness and launch',
    metrics: ['$2M+ in sales', '1M+ activations', '20 launch markets'],
    points: [
      'Managed external partner relationships across LG, Walmart, and third-party manufacturers through onboarding, allocation, and performance tracking',
      'Built the coordination frameworks that carried the product from readiness through launch, improving throughput 22%',
      'Coordinated the factory image and out-of-box experience releases across the Google Home app, Android TV, and Assistant teams to hold feature quality through each phase',
    ],
  },
  {
    id: 'sonos',
    name: 'Sonos v. Google firmware release',
    descriptor: 'Consolidated release against a court deadline',
    metrics: ['720K+ devices', '10M+ in market', '1 release window'],
    points: [
      'Owned the cross-functional response, aligning legal, engineering, marketing, and product against dates set outside the company',
      'Synchronized the software change, the feature activation, and the marketing release into a single timeline',
      'Unblocked the feature activation against a compressed software schedule and an existing communications calendar',
    ],
  },
  {
    id: 'lg-webos',
    name: 'LG webOS with Google Home Platform',
    descriptor: 'Third-party platform integration',
    metrics: ['2 companies', '0 to 1 framework', '1P and 3P scope'],
    points: [
      'Owned the partnership between Google and LG end to end, aligning stakeholders across both organizations',
      'Established the integration and testing framework for third-party platform work, where none existed',
      'Resolved third-party device incompatibility and firmware education gaps reaching users in market',
      'Positioned LG as a strategic platform partner and set the reference model for subsequent third-party integrations',
    ],
  },
  {
    id: 'chromecast-hd',
    name: 'Chromecast HD',
    descriptor: 'Full program ownership, device through in-market',
    metrics: ['5.8K devices', '3.4K users', '1 owner'],
    points: [
      'Ran the program independently from distribution through issue resolution, feeding findings into plan-of-record changes',
      'Identified a late usability gap in voice control through the remote, then made participant feedback a gated requirement in the setup and pilot phases of every program that followed',
      'Established the feedback integration standard now applied across the portfolio',
    ],
  },
];
