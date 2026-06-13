// ══════════════════════════════════════════════════════════════════════
//  data/skill-1.1.js · IQ+ · Place Value  (Path 100 · Set 1 · Skill 1.1)
//  ────────────────────────────────────────────────────────────────────
//  THE GOLD STANDARD. This is the human-proofed reference skill. Every other
//  skill the builder generates must match this depth and warmth — content
//  only, no layout: the templates own the chrome.
//
//  Shape (the contract every skill file fills):
//    core      — 3–4 dense lines, the speed-read
//    fifth     — 5th-grade expansion (hook · examples · pattern · why · pro tip)
//    phd       — PhD expansion (dense → breakdown → formula → example → footnote)
//    practice  — Oregon-Trail problems: each a chain of steps, 4 choices/step,
//                exactly one correct, every choice teaches via `feedback`.
//                Rotate a human option in (break · joke · water · stretch).
//  HTML in core/fifth/phd is trusted (authored + proofed), injected as-is.
//  Wrap math in $...$ — MathJax renders it.
// ══════════════════════════════════════════════════════════════════════

window.IQ = window.IQ || { skills: {}, curriculum: null };

IQ.skills['1.1'] = {
  id: '1.1',
  path: '100',
  set: '1 · Number Sense',
  title: 'Place Value',

  core: `
    <p><strong>Place value:</strong> a digit's position decides its value. Base-10 uses powers of 10.</p>
    <p><strong>3,524 =</strong> $3\\times10^3 + 5\\times10^2 + 2\\times10^1 + 4\\times10^0$ = 3000 + 500 + 20 + 4</p>
    <p><strong>Pattern:</strong> each position left is 10× larger. Ones → Tens → Hundreds → Thousands.</p>`,

  fifth: `
    <p class="text-lg font-bold mb-3">Place value is like organizing your piggy bank — where you put the coins matters!</p>

    <div class="iq-box mb-4">
      <p class="font-bold mb-2">📍 Sorting 2,743 pennies</p>
      <p>Piles of 1,000: that's <strong>2</strong> piles, 743 left.<br>
         Piles of 100: that's <strong>7</strong> piles, 43 left.<br>
         Piles of 10: that's <strong>4</strong> piles, 3 left.<br>
         Single pennies: <strong>3</strong>.</p>
      <p class="mt-2">So <strong>2,743 = 2 thousands + 7 hundreds + 4 tens + 3 ones</strong>.</p>
    </div>

    <div class="iq-box mb-4">
      <p class="font-bold mb-2">🎯 The pattern</p>
      <p>Each place is <strong>10× bigger</strong> than the one on its right. Fill small piles first; ten of something makes one of the next size up. 1 → 10 → 100 → 1,000 → forever.</p>
    </div>

    <div class="iq-box mb-4">
      <p class="font-bold mb-2">📍 Street address</p>
      <p><strong>5,204 Main St:</strong> 5 = which thousand block · 2 = which hundred · 0 = no tens · 4 = the exact house. Same digits in different spots = a completely different house (5,204 ≠ 4,025).</p>
    </div>

    <div class="iq-box">
      <p class="font-bold mb-2">💡 Pro reading trick</p>
      <p>Start from the <strong>right</strong> and count up: ones, tens, hundreds, thousands. For 8,512: 2 (ones) → 1 (tens) → 5 (hundreds) → 8 (thousands).</p>
    </div>`,

  phd: `
    <h4 class="font-bold mb-2">Positional notation systems</h4>
    <p class="mb-3">A <strong>positional numeral system</strong> represents numbers where digit position determines magnitude. Decimal (base-10) uses ten symbols (0–9); each position represents a power of the base.</p>
    <p class="mb-3">Moving one position left multiplies value by the base — ×10 in decimal, ×2 in binary. The principle generalizes to any base: decimal 13 = $1\\times10^1 + 3\\times10^0$, while binary 1101 = $1\\times2^3 + 1\\times2^2 + 0\\times2^1 + 1\\times2^0$ = 13 (same value, different representation).</p>
    <p class="mb-2 font-semibold">Formal: $N = \\sum_{i=0}^{n} d_i \\, b^{i}$</p>
    <div class="iq-box my-3">
      <p class="font-bold mb-1">Reading the formula:</p>
      <ul class="list-disc list-inside space-y-1 ml-2">
        <li>$N$ — the number</li>
        <li>$d_i$ — the digit at position $i$ (0–9 in decimal)</li>
        <li>$b$ — the base (10 for decimal)</li>
        <li>$i$ — position index, starting at 0 from the right</li>
      </ul>
    </div>
    <p class="mb-1"><strong>Decompose 3,524:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-2 mb-3">
      <li>$d_3=3$: $3\\times10^3 = 3000$</li>
      <li>$d_2=5$: $5\\times10^2 = 500$</li>
      <li>$d_1=2$: $2\\times10^1 = 20$</li>
      <li>$d_0=4$: $4\\times10^0 = 4$</li>
    </ul>
    <p class="text-sm opacity-80">Other bases: binary (2), octal (8), hex (16); historically base-60 (Babylonian), base-20 (Mayan). Binary returns in modular arithmetic (Path 300).</p>`,

  practice: [
    {
      problem: 'What is the value of the digit <strong>7</strong> in <strong>4,728</strong>?',
      hint: 'Count positions from the right: ones, tens, hundreds…',
      steps: [
        { prompt: 'Which place is the 7 in?',
          work: '4,<u>7</u>28 — from the right: 8 ones, 2 tens, 7 hundreds.',
          choices: [
            { text: 'Hundreds', correct: true,  feedback: 'Yes — counting from the right: ones, tens, hundreds.' },
            { text: 'Tens',     correct: false, feedback: 'The 2 is in the tens place. Count again from the right.' },
            { text: 'Thousands',correct: false, feedback: 'That is the 4. The 7 sits one place to its right.' },
            { text: '🧃 Get a glass of water', correct: false, feedback: 'Good idea — hydrate, then count from the right: ones, tens, hundreds.' },
          ]},
        { prompt: 'So the 7 means 7 × what?',
          work: 'Hundreds place → multiply by 100.',
          choices: [
            { text: '× 100',  correct: true,  feedback: 'Right — the hundreds place weights a digit by 100.' },
            { text: '× 10',   correct: false, feedback: 'That is the tens place.' },
            { text: '× 1000', correct: false, feedback: 'That is the thousands place.' },
            { text: '😂 Tell me a joke', correct: false, feedback: 'Why was 6 afraid of 7? Because 7 ate 9. Now — hundreds means ×100.' },
          ]},
        { prompt: 'Final value of the 7?',
          work: '$7 \\times 100 = 700$.',
          choices: [
            { text: '700',  correct: true,  feedback: '🎉 $7\\times100 = 700$. Write that on your paper.' },
            { text: '70',   correct: false, feedback: 'That would be the tens place.' },
            { text: '7',    correct: false, feedback: 'That is just the digit, not its value in the number.' },
            { text: '7000', correct: false, feedback: 'That would be the thousands place.' },
          ]},
      ],
    },
    {
      problem: 'Write <strong>6,090</strong> in expanded form.',
      hint: 'A 0 in a place contributes nothing — but it still holds the spot.',
      steps: [
        { prompt: 'How many thousands?',
          work: '6,090 → the 6 is in the thousands place.',
          choices: [
            { text: '6 thousands ($6\\times1000$)', correct: true,  feedback: 'Yes — $6\\times1000 = 6000$.' },
            { text: '60 thousands',                correct: false, feedback: 'Only one digit sits in the thousands place here: the 6.' },
            { text: '9 thousands',                 correct: false, feedback: 'The 9 is further right — that is the tens place.' },
            { text: '🧘 Stretch your legs',        correct: false, feedback: 'Stretch, then look: the leftmost digit, 6, is the thousands.' },
          ]},
        { prompt: 'The hundreds digit is 0. What does it contribute?',
          work: '$0\\times100 = 0$ — but the 0 keeps the 9 in the tens place, not the hundreds.',
          choices: [
            { text: 'Nothing — but it holds the place', correct: true,  feedback: 'Exactly. Drop the 0 and 6,090 would wrongly become 690.' },
            { text: '100',                              correct: false, feedback: '$0\\times100 = 0$, not 100.' },
            { text: 'You can ignore it entirely',       correct: false, feedback: 'If you delete it the other digits shift — the 0 is a placeholder.' },
            { text: '900',                              correct: false, feedback: 'That mixes up the place — the 9 is in tens, not hundreds.' },
          ]},
        { prompt: 'Put it together — expanded form of 6,090:',
          work: '$6000 + 0 + 90 + 0 = 6{,}090$.',
          choices: [
            { text: '$6000 + 90$',         correct: true,  feedback: '🎉 $6000 + 90 = 6{,}090$. The empty places contribute 0. Write it down.' },
            { text: '$6000 + 900$',        correct: false, feedback: 'The 9 is in the tens place, so it is 90, not 900.' },
            { text: '$600 + 90$',          correct: false, feedback: 'The 6 is thousands — 6000, not 600.' },
            { text: '$6000 + 90 + 0 + 0$ but written as 6900', correct: false, feedback: 'Careful — 6,090 is not 6,900. The tens digit is 9, the hundreds is 0.' },
          ]},
      ],
    },
  ],
};
