// ══════════════════════════════════════════════════════════════════════
//  templates/practice.js · IQ+ · Oregon-Trail practice engine
//  ────────────────────────────────────────────────────────────────────
//  FOR HUMANS
//    a problem is a chain of steps. each step offers four choices; one is
//    right. wrong picks teach by elimination and let you retry. a right pick
//    shows the worked arithmetic and moves you on. you never type a number —
//    you choose the method and copy the work onto your own paper.
//
//  FOR AI
//    1. all problems come from skill.practice — never invent them here.
//    2. every choice carries `feedback`; exactly one has correct:true.
//    3. on the last step of the last problem, mark the skill green.
// ══════════════════════════════════════════════════════════════════════

window.IQ = window.IQ || {};

IQ.renderPractice = function (skill, mount) {
  const problems = skill.practice || [];
  if (!problems.length) {
    mount.innerHTML = '<p class="iq-soon">No practice for this skill yet.</p>';
    return;
  }

  let pi = 0, si = 0;

  function render() {
    const prob = problems[pi];
    const step = prob.steps[si];
    mount.innerHTML = `
      <h1 class="iq-h1">${skill.id} · ${skill.title} — Practice</h1>
      <div class="iq-card">
        ${prob.hint ? `<div class="iq-hintbar">💡 ${prob.hint}</div>` : ''}
        <p class="iq-prob-num">Problem ${pi + 1} of ${problems.length}</p>
        <p class="iq-prob">${prob.problem}</p>
        <p class="iq-step-label">Step ${si + 1} of ${prob.steps.length}</p>
        <p class="iq-step-prompt">${step.prompt}</p>
        <div id="iq-choices" class="iq-choices"></div>
        <div id="iq-feedback" class="iq-feedback"></div>
      </div>
      <a class="iq-back" href="#/${skill.id}">← Back to lesson</a>`;

    const cc = document.getElementById('iq-choices');
    step.choices.forEach(ch => {
      const b = document.createElement('button');
      b.className = 'iq-choice';
      b.innerHTML = ch.text;
      b.onclick = () => pick(ch, b);
      cc.appendChild(b);
    });
    IQ.typeset(mount);
  }

  function pick(ch, btn) {
    const fb = document.getElementById('iq-feedback');
    if (ch.correct) {
      btn.classList.add('iq-correct');
      document.querySelectorAll('#iq-choices .iq-choice').forEach(b => (b.disabled = true));
      const last = si === problems[pi].steps.length - 1 && pi === problems.length - 1;
      const work = problems[pi].steps[si].work;
      fb.innerHTML =
        `<div class="iq-ok">✅ ${ch.feedback}</div>` +
        (work ? `<div class="iq-work">${work}</div>` : '') +
        `<button class="iq-next" id="iq-next">${last ? 'Finish 🏆' : 'Next →'}</button>`;
      document.getElementById('iq-next').onclick = advance;
      IQ.typeset(fb);
    } else {
      btn.classList.add('iq-wrong');
      btn.disabled = true;
      fb.innerHTML = `<div class="iq-no">${ch.feedback}</div>`;
      IQ.typeset(fb);
    }
  }

  function advance() {
    si++;
    if (si >= problems[pi].steps.length) { si = 0; pi++; }
    if (pi >= problems.length) { done(); return; }
    render();
  }

  function done() {
    if (IQ.markProgress) IQ.markProgress(skill.id, 'green');
    mount.innerHTML = `
      <div class="iq-card iq-done">
        <p class="iq-done-emoji">🎉</p>
        <h2 class="iq-h1">Practice complete</h2>
        <p>You worked every step of ${problems.length} problem${problems.length > 1 ? 's' : ''}. Copy your work onto your own paper.</p>
        <div class="iq-actions">
          <button class="iq-btn iq-btn-practice" id="iq-again">↺ Again</button>
          <a class="iq-btn iq-btn-quiz" href="#/${skill.id}">Back to lesson</a>
        </div>
      </div>`;
    document.getElementById('iq-again').onclick = () => { pi = 0; si = 0; render(); };
  }

  render();
};
