/* ============================================================
   FOLDERS ARE QUERIES, NOT DIRECTORIES.
   Each folder is a saved view over src/content/evidence/.
   "Rename a folder" / "reorder the desktop" → this file.
   ============================================================ */

export type FolderId = 'decisions' | 'programs' | 'systems' | 'ai-fluency';

export interface Folder {
  id: FolderId;
  label: string;
  /* Sits under the icon like file metadata on a real desktop.
     This is where altitude gets asserted before any click. */
  caption: string;
  /* The recruiter question this folder answers. */
  question: string;
  /* Tag matched against evidence frontmatter. */
  tag: string;
}

export const folders: Folder[] = [
  {
    id: 'decisions',
    label: 'Decisions',
    caption: 'gate reviews · KPIs · scope',
    question: 'Does she think, or just execute?',
    tag: 'decisions',
  },
  {
    id: 'programs',
    label: 'Programs',
    caption: '20 markets · 2M users',
    question: 'Has she shipped real things at scale?',
    tag: 'programs',
  },
  {
    id: 'systems',
    label: 'Systems',
    caption: 'adopted by 4 orgs',
    question: 'Does her impact outlive her programs?',
    tag: 'systems',
  },
  {
    id: 'ai-fluency',
    label: 'AI Fluency',
    caption: 'shipped, not theoretical',
    question: 'Can she work where the field is going?',
    tag: 'ai',
  },
];

/* Decisions opens by default — content on screen in the first
   second, no empty-desktop moment where the visitor must act first. */
export const defaultFolder: FolderId = 'decisions';

export const getFolder = (id: string): Folder | undefined =>
  folders.find((f) => f.id === id);
