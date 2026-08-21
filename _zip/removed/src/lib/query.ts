import { getCollection, type CollectionEntry } from 'astro:content';
import type { Folder } from '../data/folders';

export type Unit = CollectionEntry<'evidence'>;

/* The one place content is read. Folders, list view, and (later)
   the chatbot all query through here, so they can never drift. */

export async function allUnits(): Promise<Unit[]> {
  const units = await getCollection('evidence', ({ data }) => !data.draft);
  return units.sort((a, b) => a.data.order - b.data.order);
}

export async function unitsInFolder(folder: Folder): Promise<Unit[]> {
  const units = await allUnits();
  return units.filter((u) => u.data.tags.includes(folder.tag as never));
}

/* Redaction happens at read time, not write time — so a
   confidential unit can never leak through a path that forgot. */
export function displayOrg(unit: Unit): string {
  return unit.data.confidential ? 'Confidential' : unit.data.org;
}
