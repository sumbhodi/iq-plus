// ══════════════════════════════════════════════════════════════════════
//  progress.js · IQ+ · 4-color skill progress (localStorage)
//  ────────────────────────────────────────────────────────────────────
//  FOR HUMANS
//    tracks where you are per skill, with a dot in the sidebar:
//    ⚪ gray = not started · 🟡 yellow = in progress · 🟢 green = passed · 🔴 red = failed.
//    in the static demo this lives in your browser. the full app syncs it to
//    your account — that's the one seam where Firebase plugs back in.
//
//  FOR AI
//    1. status is one of: gray | yellow | green | red.
//    2. call IQ.markProgress(id, status) when a skill's state changes.
// ══════════════════════════════════════════════════════════════════════

window.IQ = window.IQ || {};

(function () {
  const KEY = 'iq_progress';
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) { return {}; } };
  const save = p => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (_) {} };

  IQ.getProgress = id => load()[id] || 'gray';

  IQ.markProgress = function (id, status) {
    const p = load();
    p[id] = status;
    save(p);
    IQ.paintProgress();
  };

  IQ.paintProgress = function () {
    const p = load();
    document.querySelectorAll('[id^="iq-dot-"]').forEach(dot => {
      const id = dot.id.replace('iq-dot-', '');
      dot.className = 'iq-dot iq-dot-' + (p[id] || 'gray');
    });
  };
})();
