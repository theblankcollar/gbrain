# The Blank Collar — Design System

> Owner: Kristian. Source of truth for every visual decision. Every token here flows into `tailwind.config.ts`. The full token set is already wired there — this doc is the narrative.

## Principles

1. Bold, minimal, modern.
2. **Magenta is the brand.** Everything else supports it.
3. **Gradient as spine.** Signature Lime → Magenta gradient appears on every page at least once.
4. Paper and ink. Same type, same scale, same components — surface flips for dark mode.
5. Editorial typography. PP Neue Machina Inktrap carries the voice (Regular + Ultrabold only).
6. No decorative chrome. If it doesn't do structural work, cut it.

## Color palette

**Brand (six hues):**
- Magenta (Main) `#FA2BB8` — primary brand, accent, CTAs
- Neon Green / Lime `#D6F41F` — signature gradient start
- Mint `#3CFFD0` — cool accent, alt gradient
- Fiery Red `#FF3D00` — heat / urgency
- Ink `#1E1C1C` — primary text (light), primary surface (dark)
- Pure White / Paper `#FFFFFF` — primary surface (light), primary text (dark)

**Paper scale (light surfaces / dark text):**
- `paper.1` `#FFFFFF` · `paper.2` `#F5F5F3` · `paper.3` `#E9E8E4` · `line-soft` `rgba(30,28,28,.15)`

**Ink scale (dark surfaces / light text):**
- `ink.1` `#1E1C1C` · `ink.2` `#2A2828` · `ink.3` `#3D3B3B`

**Semantic tokens (mode-aware via CSS vars):**
- `surface` / `surface-2` / `surface-3` — backgrounds
- `text` / `text-muted` — type
- `border` — hairlines
- `accent` — always magenta, always same

Components reference semantic tokens only. Never hard-code hex.

## Gradients

Five named gradients, part of the brand:

- `sig-lime-magenta` — 135° linear, `#D6F41F → #FA2BB8` — signature. Every page uses this once, minimum.
- `step-ellipse` — radial `#D6F41F → #FF9A3D → #FA2BB8` — step indicators
- `mint-magenta` — 135° linear, `#3CFFD0 → #FA2BB8` — cooler alt
- `white-magenta` — 135° linear, `#FFFFFF → #FA2BB8` — icon fills
- `red-magenta` — 135° linear, `#FF3D00 → #FA2BB8` — heat moments

Rules: one gradient per viewport, behind type not on it.

## Typography

**PP Neue Machina Inktrap** — Regular v2.0 + Ultrabold v2.0. Commercial (Pangram Pangram). Self-host WOFF2 in `/public/fonts/`. License required before launch.

**Fallback:** `"Inter", "Helvetica Neue", Arial, system-ui, sans-serif`.

**Scale (fluid via `clamp()`):**
- `display` 56 → 120px, Ultrabold, lh 0.95
- `h1` 40 → 72px, Ultrabold, lh 1.00
- `h2` 32 → 48px, Ultrabold, lh 1.05
- `h3` 24 → 32px, Regular, lh 1.15
- `h4` 20 → 24px, Regular, lh 1.25
- `body-lg` 18 → 20px, Regular, lh 1.55
- `body` 16 → 17px, Regular, lh 1.6
- `small` 14px · `micro` 12px

Tracking: display and H1 at `-0.02em`. Body at default. Italics for emphasis only. Prose capped at ~66ch.

## Spacing, radii, shadows

- **Spacing:** 4px grid (Tailwind default: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200)
- **Radii:** `sm` 4px · `md` 8px (buttons/inputs) · `lg` 16px (cards) · `xl` 24px (hero blocks) · `full` pill
- **Shadows:** restrained. Use borders + surfaces first.
  - `sm` `0 1px 2px 0 rgba(30,28,28,.06)`
  - `md` `0 4px 12px -2px rgba(30,28,28,.10)`
  - `lg` `0 12px 32px -6px rgba(30,28,28,.14)`

## Logo (5 variants)

| Variant | Use |
|---|---|
| Black | Light surfaces, default light-mode nav |
| White | Ink surfaces, default dark-mode nav |
| Motion | Animated (scrolling nav, social, launch) |
| Variant 292 | Italic/roman mix for editorial contexts |
| Variant 294 | Italic/roman alt, hero variety |

Assets in `/public/brand/logo/` (SVG preferred). Clear space = one "T" height.

## Components

Hand-rolled in Astro + Tailwind. No UI library dependency.

- **Button:** primary (magenta surface, white text), secondary (outlined text), ghost (no border). Sizes sm 36px / md 44px / lg 56px. Radius `md`.
- **Card:** `surface-2` bg, `border`, radius `lg`, padding 24–32px. Hover lifts with `shadow.md` + border shift to magenta.
- **Input / textarea:** `surface` bg, `border`, radius `md`. Focus → border magenta + magenta shadow ring.
- **Nav:** sticky, `surface` with 60% blur on scroll. Logo left, links center, switchers far right.
- **Footer:** `surface-2`, four columns + legal strip.

## Motion

Editorial. Default easing `cubic-bezier(0.22, 1, 0.36, 1)`, default duration 400ms.

- Scroll-triggered entries on major sections: fade + 12px rise, fires once per session.
- Signature gradient can shimmer on hero (12s pan, respects reduced-motion).
- Only `transform` and `opacity` animated — no layout-shift properties.
- `prefers-reduced-motion: reduce` disables all non-essential motion.

## Light / dark mode

- Default: `prefers-color-scheme`.
- Toggle persists `tbc-theme: 'light' | 'dark' | 'system'` in `localStorage`.
- 200ms transition on color changes, no layout shift.
- **Zero hard-coded hex values in components** — everything via semantic tokens.

## Accessibility

- WCAG AA contrast. Magenta body text on white fails — never use magenta for body copy on light surface, only for accents/headings or as surface with white text.
- Focus ring: 3px `rgba(250,43,184,.5)` outline, offset 2px, on every interactive element.
- Keyboard reachability + skip-to-content link.
- Explicit `<label for>` on every input. Errors via `aria-live`.
- Descriptive alt on every image. `role="presentation"` on decorative SVGs.

## Still needed

- SVG logo files → `/public/brand/logo/`
- PP Neue Machina WOFF2 → `/public/fonts/`
- Favicon + OG default (generated from logo)
- Photography direction (for cases + About — TBD)
