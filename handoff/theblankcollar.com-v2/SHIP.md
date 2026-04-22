# theblankcollar.com — ship the scaffold

The Astro scaffold has been rebuilt and the build is green. The Claude session that
built it could not push to `theblankcollar/theblankcollar.com` (its git proxy is
locked to `theblankcollar/gbrain`, same trap as v1). Everything you need to push
is staged here.

## What's here

- `scaffold.bundle` — git bundle containing the single commit on branch
  `claude/create-blankcollar-repo-qoZOh`. Use this for a one-shot push (preferred).
- `src/`, `public/`, `docs/`, configs — the full scaffold tree, in case you'd
  rather copy files into an existing working copy than fetch from the bundle.

## One-shot push (preferred)

From your local machine, with push access to `theblankcollar.com`:

```bash
# Fetch this gbrain branch + the bundle
git -C /path/to/gbrain checkout claude/build-theblankcollar-com-Cs3Sr
git -C /path/to/gbrain pull

# Clone the empty target repo (or use an existing clone)
git clone https://github.com/theblankcollar/theblankcollar.com.git
cd theblankcollar.com

# Pull the prepared commit out of the bundle and push it
git fetch /path/to/gbrain/handoff/theblankcollar.com-v2/scaffold.bundle \
  claude/create-blankcollar-repo-qoZOh:claude/create-blankcollar-repo-qoZOh
git push -u origin claude/create-blankcollar-repo-qoZOh
```

Commit SHA: `1b92da44a5d43f66d3790237eca42bf59fc0c8a4`
Commit message: `scaffold: Astro + Tailwind + EN/DE i18n (Phases 1–5a)`

## Manual copy alternative

If the bundle path is awkward:

```bash
git clone https://github.com/theblankcollar/theblankcollar.com.git
cd theblankcollar.com
git checkout -b claude/create-blankcollar-repo-qoZOh

# Copy everything except SHIP.md and scaffold.bundle
cp -r /path/to/gbrain/handoff/theblankcollar.com-v2/. .
rm SHIP.md scaffold.bundle

git add -A
git commit -m "scaffold: Astro + Tailwind + EN/DE i18n (Phases 1–5a)"
git push -u origin claude/create-blankcollar-repo-qoZOh
```

## Verify the build locally

```bash
bun install && bun run build
```

Should report 27 prerendered routes, no errors.

## After the push

1. Open a PR on `theblankcollar.com` from `claude/create-blankcollar-repo-qoZOh` into
   `main` (or merge directly if you prefer).
2. Delete the v1 staging branch from gbrain:
   `git push origin --delete handoff/theblankcollar-com-v1`
3. Delete this v2 staging directory in a follow-up commit:
   `git rm -r handoff/theblankcollar.com-v2 && git commit -m "chore: drop scaffold handoff"`

## Phase state

- ✅ Phases 1–4 — positioning, sitemap, design system, content drafts (`docs/`)
- ✅ Phase 5a — scaffold + green build (this work)
- ⏳ Phase 5b — push to repo (this is what you're about to do)
- ⏳ Phase 6 — case detail pages, Resend contact form, accessibility/perf pass,
  re-enable `@astrojs/sitemap` once a hybrid-compatible version ships
- ⏳ Phase 7 — Vercel domain cutover

## Next-step assets to drop in

- `public/brand/logo/` — five SVG logo variants (black, white, motion, variant-292, variant-294)
- `public/fonts/` — PP Neue Machina WOFF2 (Pangram Pangram license required)
- Vercel env vars: `RESEND_API_KEY`, `CONTACT_INBOX`, `NEWSLETTER_PROVIDER`, `NEWSLETTER_API_KEY`

## Notes

- The build emits a Node 22 vs Vercel 18 warning. Cosmetic — bump
  `@astrojs/vercel` to v10 when ready (Phase 6+).
- The contact form posts to `/api/contact` but no handler is wired yet
  (button is `disabled` for now). Phase 6 ships the Resend integration.
- Theme toggle persists `tbc-theme` in localStorage; defaults to `prefers-color-scheme`.
