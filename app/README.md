# IQ+ · Math Calc — the app

The full IQ+ platform: splash → **Google / Apple / email sign-in (Firebase)** → dashboard, profile, settings, full nav, and the Place Value skill working end to end. Real accounts, real progress tracking, running off localhost.

## Two doors

- **Sign in** to the full app (this repo) — accounts, dashboard, progress.
- **Just want to see a lesson?** No sign-up needed → **https://sumbhodi.github.io/iq-plus/** (the clean instant demo).

The splash offers both.

## What it shows

- **Firebase auth** — Google, Apple, email — with user profiles + avatars
- **Dashboard** with 4-color progress tracking, **settings**, account delete, privacy/ToS/contact
- The locked **lesson template** (Place Value) at three reading depths + the Oregon-Trail practice

## Status

Proof-of-concept: the authenticated shell + one complete skill. The clean **4-layer rebuild** that finishes the whole curriculum from a builder spec lives at the demo above (repo `iq-plus`).

## Note for self-hosting

Google sign-in only works once this host's domain is in the Firebase project's **Authorized Domains** (Firebase console → Authentication → Settings). The `firebase_config.js` keys are client keys — safe to ship (that's how Firebase web auth works).

## License

BSL 1.1 — see [LICENSE](LICENSE).

gowf —
Sum Bhodi
