// ══════════════════════════════════════════════════════════════════════
//  data/curriculum.js · IQ+ · the Path 100 tree (nav only — no content)
//  ────────────────────────────────────────────────────────────────────
//  FOR HUMANS
//    this is the table of contents the sidebar reads. names only.
//    a skill's actual content lives in data/skill-<id>.js, loaded on demand.
//    `built: true` = that skill has a data file; everything else is "coming soon".
//
//  FOR AI (builder)
//    1. to add a skill: set built:true here AND drop data/skill-<id>.js.
//    2. ids are 'set.skill' (e.g. '1.1'); they map to data/skill-1.1.js.
//    3. don't put lesson content here — only the menu.
// ══════════════════════════════════════════════════════════════════════

window.IQ = window.IQ || { skills: {}, curriculum: null };

IQ.curriculum = {
  path: '100',
  title: 'Path 100',
  subtitle: 'Foundations → Pre-Calc',
  skillSets: [
    { id: '1', name: 'Number Sense', skills: [
      { id: '1.1', name: 'Place Value',       built: true  },
      { id: '1.2', name: 'Comparing Numbers', built: false },
      { id: '1.3', name: 'Rounding',          built: false },
      { id: '1.4', name: 'Patterns',          built: false },
    ]},
    { id: '2', name: 'Operations',      skills: [] },
    { id: '3', name: 'Fractions',       skills: [] },
    { id: '4', name: 'Decimals',        skills: [] },
    { id: '5', name: 'Percents',        skills: [] },
    { id: '6', name: 'Measurement',     skills: [] },
    { id: '7', name: 'Algebra',         skills: [] },
    { id: '8', name: 'Problem Solving', skills: [] },
  ],
  // Path 100 = 38 skills across 8 sets. Only 1.1 is built — the rest are the
  // builder's job (see BUILD.md). Paths 200–600 layer on top with the same shape.
};
