/* ============================================================
   AI FLUENCY
   The clickability is the argument, so these cards stay EMPTY
   until there is real work with real links behind them.
   No placeholders — an empty section reads better than four
   cards that go nowhere.
   ============================================================ */

export const aiFramework =
  'Built the evaluation framework for LLM features across 2K testers, cutting critical failures 27% and improving response consistency 45%. Everything below, I built.';

export interface AiProject {
  name: string;
  descriptor: string;
  impact: string;
  tools: string[];
  href: string;
  image?: string;
}

/* TODO (Tia) — needed before this section renders:
   1. iOS app — name, one line on what it does, current state,
      public or TestFlight link, full build stack
   2. AI tutoring platform — is the client nameable, what is
      linkable, what was the deliverable
   3. Client work — which tialeeapproved sites belong here, URLs
   4. This site — recommended as a card, since it's the only
      evidence the reader is already inside of                    */
export const aiProjects: AiProject[] = [];

export const education =
  'B.S. Computer Science, User Experience concentration, Michigan State University';
