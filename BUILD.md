# BUILD — finishing IQ+ in one shot

Hand this repo + this file to an **Opus-class (or better) AI** and it can generate the rest of the curriculum. Then **every generated skill must be proofread and edited by a human who has taken through calculus — ideally one who teaches math.** The one shipped skill (Place Value) is the quality bar. Never ship AI output unproofed. That human sign-off *is* the product.

## What's already built (do not rebuild)
- **Shell** — `index.html`, `app.css`: sidebar, theme, content mount. Built once.
- **Router** — `router.js`: hash routing, on-demand skill loading, tutor context.
- **Progress** — `progress.js`: 4-color status in localStorage.
- **Templates** — `templates/lesson.js`, `templates/practice.js`: render any skill.
- **Tutor** — `tutor.js`: BYOK live *help*. NOT a content source.
- **Gold skill** — `data/skill-1.1.js`: the reference. Match its depth and warmth.

## Your job
For each skill in the curriculum, produce **one file** — `data/skill-<id>.js` — and flip `built: true` for it in `data/curriculum.js`. Nothing else changes. That is the whole point of the architecture.

## The data contract (one skill = one file)

```js
window.IQ = window.IQ || { skills: {}, curriculum: null };
IQ.skills['<id>'] = {
  id: '<id>',                // 'set.skill', e.g. '1.2'
  path: '100',
  set:  '<n> · <Set Name>',  // e.g. '1 · Number Sense'
  title: '<Skill Name>',
  core:  `<3–4 dense lines · HTML · the speed-read>`,
  fifth: `<5th-grade expansion · HTML>`,
  phd:   `<PhD expansion · HTML>`,
  practice: [ /* Oregon-Trail problems — see below */ ],
};
```

Math goes in `$...$` (MathJax renders it). Content HTML is trusted (it gets proofed) — use `.iq-box` for callouts; standard Tailwind utilities are available.

## The three reading levels (the heart of it)

**core** — ultra-dense. 3–4 lines: the fact, one worked number, the pattern.

**fifth** (5th-grade) — *formal, polite kid teaching a confused adult.* Six beats:
1. hook (one relatable line)
2. concrete example (physical: coins, blocks, addresses)
3. the pattern (the rule, 2–3 sentences)
4. second example (a different angle)
5. why it matters (what breaks without it)
6. pro tip (a memory/reading trick)

**phd** — *collegial, not condescending; adult conversation.* Six beats:
1. dense opening
2. digestible breakdown
3. the formula
4. formula-component breakdown
5. concrete numeric example
6. cross-curricular footnote (other bases, history, where it returns later)

Read `data/skill-1.1.js` for exactly what "good" looks like at all three levels. **Match that bar — warm and rigorous, never slop.**

## Practice (Oregon-Trail)

Each skill: 2–4 problems. A problem is a chain of **steps**; each step offers **exactly four choices**, **one** correct. Every choice — right or wrong — carries `feedback` that teaches (wrong ones by elimination). Rotate **one human option** in per problem ("take a break", "tell me a joke", "get a glass of water", "stretch"). The correct pick reveals `work` — the arithmetic, done for the student, so a typo can't sink them. The student chooses the *method* and copies the work onto their own paper. Never offer the bare final answer as a choice without the steps leading there.

```js
practice: [{
  problem: '<the problem · HTML>',
  hint: '<one nudge>',
  steps: [{
    prompt: '<what to decide this step>',
    work: '<the arithmetic for this step · shown on the correct pick>',
    choices: [
      { text: '<choice>', correct: true,  feedback: '<why it is right>' },
      { text: '<choice>', correct: false, feedback: '<why it is wrong, by elimination>' }
      // ...four total, exactly one correct...
    ]
  }]
}]
```

## Naming + order
- id `set.skill` → file `data/skill-<id>.js` (e.g. `1.2` → `data/skill-1.2.js`).
- Order: finish Set 1 (1.2, 1.3, 1.4) → Sets 2–8 → Paths 200–600.
- **Content source:** `IQ+_Math_Calc_Curriculum.md` (the full 279-skill spec) and `IQ+_DevCheatSheet.md`, both in the legacy `iq_plus/` copy. Feed those in for *what* to teach; this file is the *format + quality* contract for *how*.

## The one rule
**Quality over speed.** One proofed skill beats forty AI-slop skills. A human who has done the math signs off on every skill before it ships.

gowf — Sum Bhodi
