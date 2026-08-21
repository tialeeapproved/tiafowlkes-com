/* ============================================================
   AI FLUENCY
   The clickability is the argument, so these cards stay EMPTY
   until there is real work with real links behind them.
   No placeholders — an empty section reads better than four
   cards that go nowhere.
   ============================================================ */

export const aiFramework =
  'Architected the LLM feature evaluation framework across 2K test subjects, reducing critical model hallucinations by 27% and improving response accuracy by 45%. All systems below were independently engineered and deployed.';

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
