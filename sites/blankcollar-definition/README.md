# blankcollar.com

The canonical definition of **blankcollar** — the worker of the AI era.

One page. One definition. Dictionary-grade. Exportable to a social post.

## What this is

A tiny Next.js 15 site whose only job is to be THE reference when someone searches for the term *blank collar*. It's modeled on a dictionary entry (headword, pronunciation, three senses, adjective form, etymology) and ships with a one-click PNG export that drops a 1080×1080 social card with `#blankcollar` in the lower-right corner.

Brand palette is pulled from the live theblankcollar.com site (Webflow). Colors are CSS variables, so the bg / fg / accent can be swapped at runtime by the visitor — or changed globally in `lib/themes.ts`.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind v4
- `html-to-image` for the PNG export
- Inter + Fraunces + JetBrains Mono via Google Fonts
- Next.js OG image generation at `app/opengraph-image.tsx`

## Run locally

```bash
npm install          # or pnpm / bun / yarn
npm run dev          # open http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel

1. Push this directory to a GitHub repo (e.g. `theblankcollar/blankcollar-definition`).
2. In Vercel: **New Project → Import** that repo.
   - If this lives inside a larger monorepo, set **Root Directory** to `sites/blankcollar-definition`.
3. Add the custom domain `blankcollar.com` (and `www.blankcollar.com`) in Vercel → Settings → Domains.
4. Update your DNS:
   - `A` record on `blankcollar.com` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`

## Editing the definition

Edit `lib/definition.ts` — it's the single source of truth for the headword, pronunciation, senses, example sentences, adjective form, and etymology. Both the on-page entry and the exported PNG card read from it.

## Editing brand colors

Edit `lib/themes.ts`. Each theme has `bg`, `fg`, `accent`, and `muted`. The visitor-facing theme pills (lower center of the page) show every theme; the two color swatches next to them let a visitor free-tune `bg` and `fg` for their own export.

## SEO

- `<title>`, `<meta description>`, OpenGraph + Twitter tags in `app/layout.tsx`
- JSON-LD `DefinedTerm` schema in the `<head>`
- `app/sitemap.ts` and `app/robots.ts`
- Generated 1200×630 OG image at `/opengraph-image`

## License

© Kristian Kabashi. *The Blank Collar Equation* is a registered work.
