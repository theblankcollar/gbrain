# theblankcollar.com

Marketing site for The Blank Collar — an AI-native transformation agency.

## Stack

- **Astro 4.16** (hybrid output) + **TypeScript** (strict)
- **Tailwind CSS 3.4** with CSS-variable-backed light/dark tokens
- **Vercel adapter** (`@astrojs/vercel/serverless`)
- Bilingual **EN** (`/`) + **DE** (`/de/`) via Astro built-in i18n
- Package manager: **Bun**

## Local development

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static + SSR build
bun run preview  # serve the built site locally
```

## Project layout

```
src/
  components/    Nav, Footer, Section, ResourceStub
  layouts/       Base.astro (HTML shell, head, hreflang)
  i18n/          ui.ts (strings + helpers)
  pages/         EN tree (/, /services, /services/cases, /framework, /about, /contact, /ecosystem, /resources/*)
  pages/de/      DE mirror under /de/
  styles/        global.css (Tailwind + CSS vars + components)
public/
  brand/logo/    SVG logo variants (drop-in)
  fonts/         PP Neue Machina WOFF2 (drop-in once licensed)
  favicon.svg
docs/            Source-of-truth docs (positioning, sitemap, design system, content drafts)
```

## Design tokens

Tailwind config (`tailwind.config.ts`) mirrors `docs/design-system.md`. Components reference
**semantic tokens only** (`surface`, `text`, `border`, `accent`) — never hard-coded hex.

## Phase state

- **Phase 5a** — Scaffold, build green. ✅
- **Phase 5b** — Push to repo. ✅
- **Phase 6** — Fill remaining content (case detail pages, resource items), wire Resend
  contact form, accessibility + performance pass.
- **Phase 7** — Vercel domain cutover.

## Known issues

- `@astrojs/sitemap@3.7.x` crashes with the Vercel hybrid output. Disabled in
  `astro.config.mjs` until a compatible version ships. Re-enable in Phase 6.
- Build warns Node 22 (local) vs Vercel runtime 18. Cosmetic; bump
  `@astrojs/vercel` to v10 in a later phase.

## Environment variables

Copy `.env.example` to `.env` and fill in:

```
RESEND_API_KEY=          # Phase 6 — contact form
CONTACT_INBOX=           # where contact form goes
NEWSLETTER_PROVIDER=     # buttondown | convertkit | none
NEWSLETTER_API_KEY=      # if NEWSLETTER_PROVIDER != none
```

## Deployment

Connect the repo in Vercel. The serverless adapter handles hybrid output.
Set the env vars listed above in the Vercel dashboard before launch.
