# theblankcollar.com — resume build

You (the reader) are a new Claude Code session on the user's local machine, after they installed the Claude GitHub App. You should have read/write access to both `theblankcollar/gbrain` and `theblankcollar/theblankcollar.com`.

## Quick summary

The previous Claude session planned and scaffolded the entire `theblankcollar.com` website with user Kristian Kabashi but could not push — its GitHub access was locked to `gbrain` only. It staged the full scaffold **here**, inside `theblankcollar/gbrain` on branch `handoff/theblankcollar-com-v1`, under the folder `handoff/theblankcollar.com/`.

## Your task (in order)

1. Confirm you have push access to `theblankcollar/theblankcollar.com`.
2. Clone or `git fetch` that repo. Branch to push to: **`claude/create-blankcollar-repo-qoZOh`** (create if missing).
3. Copy every file from `theblankcollar/gbrain` branch `handoff/theblankcollar-com-v1` path `handoff/theblankcollar.com/` into your working copy of `theblankcollar.com`, preserving directory structure. Options:
   - `git archive` from gbrain and extract
   - `gh api` to download + untar
   - Clone gbrain branch, then `cp -r`
4. Run `bun install && bun run build`. Build must succeed — it has been verified.
5. Commit with message: `scaffold: Astro + Tailwind + EN/DE i18n (Phases 1–5a)`
6. Push to `claude/create-blankcollar-repo-qoZOh`.
7. After success, tell the user:
   - Scaffold is in the repo on that branch
   - Next steps (see §NEXT STEPS below)
   - Offer to move on to Phase 6 (filling remaining page stubs, wiring Resend, etc.)

## Stack (decided — do not change)

- Astro 4.16 (hybrid rendering) + TypeScript strict
- Tailwind CSS 3.4 with CSS-variable-backed light/dark tokens
- Vercel adapter `@astrojs/vercel@^7.8.2` (/serverless)
- Bilingual EN (`/`) + DE (`/de/`) via Astro built-in i18n
- Astro content collections for services / cases / essays / videos / podcast / whitepapers / workshops
- Package manager: Bun (`bun install`, `bun run build`)

## Known issues (don't re-discover)

- `@astrojs/sitemap@3.7.x` crashes with the Vercel hybrid output. **Do not** re-add it to `astro.config.mjs` — the config is correct as shipped.
- Build warns Node 22 (local) vs Vercel runtime 18. Cosmetic; bump `@astrojs/vercel` to v10 in a later phase.

## Phase state

- **Phases 1–4 complete** (documented in `docs/positioning.md`, `docs/sitemap.md`, `docs/design-system.md`, `docs/content/*.md`). Read these before writing any new code — they are the source of truth.
- **Phase 5a complete** — scaffold, build green, 17 pages prerendered.
- **Phase 5b = this task** — push scaffold to `theblankcollar.com` repo.
- **Phase 6 pending** — fill remaining page stubs, Resend integration, 8 case pages, accessibility + performance pass.
- **Phase 7 pending** — Vercel domain cutover.

## Next steps after push (tell Kristian)

1. **SVG logos** → drop the five variants into `public/brand/logo/` (black, white, motion, variant-292, variant-294).
2. **PP Neue Machina WOFF2** → drop into `public/fonts/` once the Pangram Pangram web license is confirmed.
3. **Vercel** → connect repo in Vercel dashboard; set env vars `RESEND_API_KEY`, `CONTACT_INBOX`, `NEWSLETTER_PROVIDER`, `NEWSLETTER_API_KEY`.
4. **Start Phase 6** — ask Kristian which page to flesh out first.

## Cleanup

After you've successfully pushed the scaffold to `theblankcollar.com`, you can delete the staging branch from gbrain:

```bash
git push theblankcollar/gbrain --delete handoff/theblankcollar-com-v1
```

Do this **only after** Kristian confirms the `theblankcollar.com` push looks good.
