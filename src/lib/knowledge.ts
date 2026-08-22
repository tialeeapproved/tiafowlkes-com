/* ============================================================
   THE BOT'S KNOWLEDGE BASE

   Every file is imported by name. There is deliberately no glob
   here — not `import.meta.glob`, not a directory read, nothing
   that could pick up a file by proximity. Adding a source is a
   code change someone has to make on purpose.

   The four generated files come from `npm run knowledge`, which
   reads the same data the pages render from. Do not hand-edit
   them.
   ============================================================ */

import bridging from '../knowledge/bridging.md?raw';
import about from '../knowledge/about.md?raw';
import targeting from '../knowledge/targeting.md?raw';
import resume from '../knowledge/resume.md?raw';
import strengths from '../knowledge/strengths.md?raw';
import decisions from '../knowledge/decisions.md?raw';
import programs from '../knowledge/programs.md?raw';
import systems from '../knowledge/systems.md?raw';
import aiFluency from '../knowledge/ai-fluency.md?raw';

/* `bridging.md` is the instruction set, so it leads. The rest is
   evidence, ordered the way a reader would want it: who she is,
   what she wants, the record, then the detail. */
export const systemPrompt = [
  bridging,
  '\n\n---\n\n',
  about,
  '\n\n---\n\n',
  targeting,
  '\n\n---\n\n',
  strengths,
  '\n\n---\n\n',
  resume,
  '\n\n---\n\n',
  decisions,
  '\n\n---\n\n',
  programs,
  '\n\n---\n\n',
  systems,
  '\n\n---\n\n',
  aiFluency,
].join('');

/* Rough, but enough to sanity-check the cache assumption in a log
   line. Four characters per token is the documented estimate. */
export const approxTokens = Math.round(systemPrompt.length / 4);
