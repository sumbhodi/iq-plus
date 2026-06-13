# IQ+ · Math Calc

Calculus-prep that respects the learner. Pick your depth. Practice by reasoning. Never get a confident wrong answer.

## What it is

Placement-test prep, Path 100 → 600. Every skill is one lesson at **three reading depths** — a dense core, a 5th-grade walk-through, and a PhD treatment — plus an **Oregon-Trail practice** mode: you choose the *method* step by step and the app does the arithmetic, so a typo can't sink you. You copy the work onto your own paper.

## Run

Static site. Open `index.html`, or serve the folder:

    python3 -m http.server 8000

The demo strips sign-in so anyone can walk in. The full app uses Firebase auth + progress sync — that's the one seam where accounts plug back in.

## Architecture — the clean rebuild

Four layers, so a new skill is **data, not engineering**:

- **shell** — `index.html` + `app.css`: nav, theme, content mount. Built once.
- **router** — `router.js`: hash routing, loads a skill's data on demand.
- **templates** — `templates/`: render any skill (lesson · practice).
- **data** — `data/skill-<id>.js`: the content, one file per skill.

Change the nav once in the shell; add a skill by dropping one data file. No 190-file edit cycles.

## The tutor

🎓 **Ask the tutor** — bring-your-own-key live help (Groq · Gemini · OpenRouter free, or Anthropic), or snap a photo of your homework. The key stays in your browser, called straight from it — no server. The tutor *explains and walks you through*; it never writes the curriculum. That content is human-proofed, not live-generated.

## Finishing it

One skill ships fully proofed (Place Value). The rest is generated from [BUILD.md](BUILD.md) by an Opus-class AI, then **proofread by a human who's done the math.** That sign-off is the product.

## License

BSL 1.1 — use it, build with it, learn from it. Make money from it, pay me. Four years after release it turns Apache 2.0. See [LICENSE](LICENSE).

gowf —
Sum Bhodi
