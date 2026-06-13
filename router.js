// ══════════════════════════════════════════════════════════════════════
//  router.js · IQ+ · shell orchestrator
//  ────────────────────────────────────────────────────────────────────
//  PAGE 0 — TOC
//    typeset ........ MathJax helper
//    loadSkill ...... inject data/skill-<id>.js on demand (works file:// too)
//    buildSidebar ... render the nav from curriculum
//    setLessonCtx ... hand the open lesson to the tutor
//    route .......... hash → load skill → render lesson/practice/coming-soon
//  ────────────────────────────────────────────────────────────────────
//  FOR HUMANS
//    the persistent shell. nav + routing live here once; content swaps in
//    #iq-content. adding a skill never touches this file — drop a data file.
//
//  FOR AI
//    1. routes are hash: #/<id> = lesson, #/<id>/practice, etc.
//    2. a skill renders only if data/skill-<id>.js exists; else "coming soon".
//    3. set window.currentLesson on every route so the tutor has context.
// ══════════════════════════════════════════════════════════════════════

window.IQ = window.IQ || { skills: {} };

IQ.typeset = function (el) {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise(el ? [el] : undefined).catch(() => {});
  }
};

// ── load a skill's data file on demand (script-injection: works served + file://) ──
IQ.loadSkill = function (id, cb) {
  if (IQ.skills[id]) return cb(IQ.skills[id]);
  const s = document.createElement('script');
  s.src = 'data/skill-' + id + '.js';
  s.onload = () => cb(IQ.skills[id] || null);
  s.onerror = () => cb(null);
  document.head.appendChild(s);
};

// ── sidebar (from curriculum) ──
function buildSidebar() {
  const c = IQ.curriculum;
  const nav = document.getElementById('iq-sidebar-nav');
  if (!c || !nav) return;
  nav.innerHTML =
    `<div class="iq-path">${c.title} · ${c.subtitle}</div>` +
    c.skillSets.map(set => `
      <div class="iq-set">
        <div class="iq-set-name">${set.id} · ${set.name}</div>
        ${set.skills.map(sk => `
          <a class="iq-skill ${sk.built ? '' : 'iq-skill-soon'}"
             href="${sk.built ? '#/' + sk.id : '#/soon'}" data-skill="${sk.id}">
            <span class="iq-dot" id="iq-dot-${sk.id}"></span>
            ${sk.id} · ${sk.name}${sk.built ? '' : ' <span class="iq-soon-tag">soon</span>'}
          </a>`).join('')}
      </div>`).join('');
  if (IQ.paintProgress) IQ.paintProgress();
}

function setActive(id) {
  document.querySelectorAll('#iq-sidebar-nav .iq-skill').forEach(a =>
    a.classList.toggle('iq-active', a.dataset.skill === id));
}

// ── hand the open lesson to the tutor as plain-text context ──
function setLessonCtx(skill) {
  const strip = html => { const d = document.createElement('div'); d.innerHTML = html || ''; return d.textContent || ''; };
  window.currentLesson = {
    module: skill.set || ('Path ' + skill.path),
    name: skill.title,
    content: [strip(skill.core), strip(skill.fifth), strip(skill.phd)].join('\n\n').trim(),
  };
  if (window.tutor && tutor.onLessonChange) tutor.onLessonChange();
}

function comingSoon(what) {
  return `<div class="iq-card iq-soon">
      <p class="iq-done-emoji">🚧</p>
      <h2 class="iq-h1">${what} — coming soon</h2>
      <p>Skill 1.1 · Place Value is the live, human-proofed reference. The rest is the builder's job — see <code>BUILD.md</code>.</p>
    </div>`;
}

function route() {
  const mount = document.getElementById('iq-content');
  const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
  if (!parts.length) { location.hash = '#/1.1'; return; }

  const id = parts[0], view = parts[1] || 'lesson';
  if (id === 'soon') { mount.innerHTML = comingSoon('That skill'); return; }

  IQ.loadSkill(id, skill => {
    setActive(id);
    if (!skill) { mount.innerHTML = comingSoon('Skill ' + id); return; }
    setLessonCtx(skill);
    if (view === 'practice')   IQ.renderPractice(skill, mount);
    else if (view === 'lesson') IQ.renderLesson(skill, mount);
    else mount.innerHTML = comingSoon(view.charAt(0).toUpperCase() + view.slice(1));
    window.scrollTo(0, 0);
  });
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => { buildSidebar(); route(); });
