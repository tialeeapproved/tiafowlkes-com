/* ============================================================
   Regenerates the site-copy half of the bot's knowledge base.

     npm run knowledge

   The four folders' copy is written from the SAME source the
   pages render from, so the bot can never quote a version of
   the site that is no longer live. The hand-written files in
   src/knowledge (about, resume, targeting, bridging) are never
   touched by this script.

   Nothing here globs a directory. Every source is named. That
   is the point: the client READMEs, the assessment notes, and
   anything else in the project cannot be picked up by accident.
   ============================================================ */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'src/knowledge');

/* Pull an exported array or string out of a .ts data file without
   running it. These files are plain literals, so a scoped eval of
   the single export is safer and simpler than a TS toolchain. */
function readExport(file, name) {
  const src = readFileSync(join(ROOT, 'src/data', file), 'utf8');
  /* The name must end here — `programs` and `programsLead` both live
     in the same file, and a prefix match silently reads the wrong one. */
  const decl = new RegExp(`export const ${name}\\s*(?=[:=])`);
  const m = decl.exec(src);
  if (!m) throw new Error(`${name} not found in ${file}`);
  const start = m.index;
  const eq = src.indexOf('=', start + m[0].length - 1);
  let i = src.indexOf(';', eq);
  // walk to the true end of the literal, ignoring semicolons in strings
  let depth = 0, quote = null, end = -1;
  for (let p = eq + 1; p < src.length; p++) {
    const c = src[p];
    if (quote) {
      if (c === '\\') p++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { quote = c; continue; }
    if ('[{('.includes(c)) depth++;
    else if (']})'.includes(c)) depth--;
    else if (c === ';' && depth === 0) { end = p; break; }
  }
  if (end === -1) end = i;
  let literal = src.slice(eq + 1, end).trim();
  literal = literal.replace(/\s+as\s+const$/, '');
  return eval(`(${literal})`);
}

const esc = (s) => String(s).trim();

/* ---- Decisions ------------------------------------------------ */
const dir = join(ROOT, 'src/content/decisions');
const decisions = readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .sort()
  .map((f) => {
    const raw = readFileSync(join(dir, f), 'utf8');
    const fm = raw.split('---')[1] || '';
    const get = (k) => {
      const m = fm.match(new RegExp(`^${k}:\\s*(.*)$`, 'm'));
      return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
    };
    return {
      draft: get('draft') === 'true',
      headline: get('headline'),
      constraint: get('constraint'),
      call: get('call'),
      impact: get('impact'),
    };
  })
  .filter((d) => !d.draft);

let out = `# Decisions\n\nStrategic calls made under ambiguity, competing priorities, and fixed timelines.\nEach entry is a decision, the constraint it was made under, and what followed.\n\n`;
for (const d of decisions) {
  out += `## ${esc(d.headline)}\n\n`;
  out += `**Constraint** — ${esc(d.constraint)}\n\n`;
  out += `**The call** — ${esc(d.call)}\n\n`;
  out += `**Impact** — ${esc(d.impact)}\n\n`;
}
writeFileSync(join(OUT, 'decisions.md'), out);

/* ---- Programs ------------------------------------------------- */
const programsLead = readExport('programs.ts', 'programsLead');
const portfolio = readExport('programs.ts', 'portfolio');
const programs = readExport('programs.ts', 'programs');

out = `# Programs\n\n${esc(programsLead)}\n\n## Portfolio\n\n`;
for (const col of portfolio) {
  out += `**${col.label}:** ${col.items.map((i) => i.name).join(', ')}.\n\n`;
}
for (const p of programs) {
  out += `## ${esc(p.name)}\n\n*${esc(p.descriptor)}*\n\n`;
  out += `Key figures: ${p.metrics.join(' · ')}.\n\n`;
  for (const pt of p.points) out += `- ${esc(pt)}\n`;
  out += `\n`;
}
writeFileSync(join(OUT, 'programs.md'), out);

/* ---- Systems -------------------------------------------------- */
const systemsLead = readExport('systems.ts', 'systemsLead');
const systems = readExport('systems.ts', 'systems');

out = `# Systems\n\n${esc(systemsLead)}\n\nThese outlived the programs that produced them.\n\n`;
for (const s of systems) {
  out += `## ${s.n}. ${esc(s.name)}\n\n${esc(s.served)}\n\n${esc(s.changed)}\n\n`;
}
writeFileSync(join(OUT, 'systems.md'), out);

/* ---- AI Fluency ----------------------------------------------- */
const aiLead = readExport('ai.ts', 'aiLead');
const aiProjects = readExport('ai.ts', 'aiProjects');
const aiTools = readExport('ai.ts', 'aiTools');

out = `# AI Fluency\n\n${esc(aiLead)}\n\n`;
for (const p of aiProjects) {
  out += `## ${esc(p.name)}\n\n*${esc(p.descriptor)}*\n\n`;
  if (p.impact) out += `${esc(p.impact)}\n\n`;
  if (p.tools) out += `Built with: ${p.tools.join(', ')}.\n\n`;
  if (p.pills) {
    out += `Sites designed and shipped end to end: `;
    out += p.pills
      .map((s) => (s.builtWith ? `${s.name} (built with ${s.builtWith})` : s.name))
      .join(', ');
    out += `.\n\n`;
  }
}
out += `## Working toolkit\n\n`;
for (const t of aiTools) {
  out += `**${t.name}** — ${t.uses.join('; ')}.\n\n`;
}
writeFileSync(join(OUT, 'ai-fluency.md'), out);

console.log(
  `knowledge rebuilt: decisions (${decisions.length}), programs (${programs.length}), ` +
    `systems (${systems.length}), ai (${aiProjects.length} + ${aiTools.length} tools)`
);
