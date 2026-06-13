// ══════════════════════════════════════════════════════════════════════
//  templates/lesson.js · IQ+ · render a lesson from skill data
//  ────────────────────────────────────────────────────────────────────
//  FOR HUMANS
//    one job: turn a skill object into the lesson view — the dense core,
//    the two collapsible depths (PhD / 5th grade), and the action buttons.
//    no content lives here; it all comes from data/skill-<id>.js.
//
//  FOR AI
//    1. read content from `skill.core/fifth/phd` — never hardcode lesson text.
//    2. content is trusted authored HTML → injected as-is; call IQ.typeset after.
//    3. actions route by hash: #/<id>/practice etc. the router handles them.
// ══════════════════════════════════════════════════════════════════════

window.IQ = window.IQ || {};

IQ.toggle = function (id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('iq-hidden');
};

IQ.renderLesson = function (skill, mount) {
  mount.innerHTML = `
    <h1 class="iq-h1">${skill.id} · ${skill.title}</h1>
    <p class="iq-sub">${skill.set || ''}</p>

    <a class="iq-pretest" href="#/${skill.id}/pretest">🧪 PRETEST</a>

    <div class="iq-card iq-speedread">
      <div class="iq-core">${skill.core || ''}</div>

      <button class="iq-toggle" onclick="IQ.toggle('iq-phd')">🎓 PhD explanation</button>
      <div id="iq-phd" class="iq-expand iq-hidden">${skill.phd || ''}</div>

      <button class="iq-toggle" onclick="IQ.toggle('iq-fifth')">🧒 5th-grade explanation</button>
      <div id="iq-fifth" class="iq-expand iq-hidden">${skill.fifth || ''}</div>
    </div>

    <div class="iq-actions">
      <a class="iq-btn iq-btn-practice" href="#/${skill.id}/practice">🎯 PRACTICE</a>
      <a class="iq-btn iq-btn-quiz"     href="#/${skill.id}/quiz">📝 QUIZ</a>
      <a class="iq-btn iq-btn-test"     href="#/${skill.id}/test">✅ TEST</a>
    </div>`;
  IQ.typeset(mount);
};
