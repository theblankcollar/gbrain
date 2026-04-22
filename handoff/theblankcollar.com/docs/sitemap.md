# The Blank Collar — Sitemap & Information Architecture

> Owner: Kristian. Full page-by-page spec. Every page on the site must appear here. Add/remove pages here first, then in code.

## 1. Top navigation (every page)

| Label (EN / DE) | URL | Purpose |
|---|---|---|
| Services / Leistungen | `/services` | What we sell and what we've shipped |
| Resources / Ressourcen | `/resources` | Essays, video, podcast, whitepapers, workshops |
| Framework / Framework | `/framework` | The Blank Collar Framework |
| About / Über uns | `/about` | Origin story + worldview |
| Contact / Kontakt | `/contact` | Form + direct channels |

Logo links to `/` (or `/de/`). Language switcher on far right.

## 2. URL tree (bilingual EN / DE)

```
/                                 Home
/services                         Services index
/services/[slug]                  Service detail
/services/cases                   Cases index (8 cases)
/services/cases/[slug]            Case detail
/resources                        Resources hub
/resources/essays                 Essays index + /[slug]
/resources/videos                 Videos index + /[slug]
/resources/podcast                Podcast index + /[slug] (own RSS)
/resources/whitepapers            Whitepapers index + /[slug]
/resources/workshops              Workshops index + /[slug]
/framework                        The Blank Collar Framework
/about                            About
/contact                          Contact
/ecosystem                        Ecosystem
/404                              Not found
/de/                              Same tree, German
```

Per-page `hreflang` tags point each page at its counterpart.

## 3. Page specs

### 3.1 Home
Sections: Hero (manifesto opener, single CTA → contact) · Three on-ramps (Agencies / Enterprises & Scaleups / Mid-market cards) · Proof strip (cased logos: Dentsu, YouGov, Numarics, Cybee.ai, Mai Group, Alletta, Visorway, Iqtax; non-linked: iProspect, Merkle, Mandeta) · The offer (Services / Resources / Framework) · Featured resources (latest essay/video/whitepaper) · Manifesto block (full passage) · Ecosystem teaser (.ai + .vc) · Close CTA.

### 3.2 Services index
Sections: Heading + positioning · Productized offers (3–5 cards) · Capability areas (6–8: marketing ops, finance ops, HR ops, automation, product build, transformation) · How we work (3 steps: workshop → 24h plan → 7–14d ship) · Cases teaser · CTA.

### 3.3 Service detail `/services/[slug]`
Sections: Name + outcome · Problem (3 bullets) · What you get · How it works · Timeline (no pricing — contact-driven) · Related cases · CTA.

### 3.4 Cases index `/services/cases`
Heading · Case grid · optional filters · CTA.

### 3.5 Case detail `/services/cases/[slug]`
Client + project · Context · What we built (multi-deliverable consolidated as sections) · How AI-native made the difference · Timeline/team · Artifacts · Quote (never fabricate) · Related · CTA.

**Initial slugs (one per client):** `dentsu` (Total Collaboration Framework + Data Lake), `yougov` (Transformation + Buy vs Build), `numarics`, `cybee`, `mai-group`, `alletta`, `visorway`, `iqtax`.

### 3.6 Resources hub `/resources`
Format cards (Essays/Videos/Podcast/Whitepapers/Workshops) · Latest mixed feed · Subscribe CTA.

### 3.7 Resources by format
Each format has its own index + detail pattern. Podcast has own RSS at `/resources/podcast/feed.xml`.

### 3.8 Framework `/framework`
Hero · Principles (3–5) · Model (diagram) · Applied (case snippets) · Related resources · Book callout (*The Blank Collar Equation*, future) · CTA.

### 3.9 About `/about`
Hero "How it started" · Arc (Tilllate → Havas → Gyro → YouGov → Dentsu → Numarics → Radicant → Cybee.ai → Mandeta → The Blank Collar) · What it's about · Credentials strip (awards + boards) · Photo/signature · CTA.

### 3.10 Contact `/contact`
"Start with a problem, not a brief" heading · Form (name, company, email, "what are you trying to change", optional budget) · Direct channels · Response expectation. Form → Resend → Kristian.

### 3.11 Ecosystem `/ecosystem`
Four cards: theblankcollar.com (you're here), blankcollar.com (definition), blankcollar.ai (tools), blankcollar.vc (venture).

### 3.12 404
Voice-matched. "This page was built for a pre-AI world and it didn't survive."

## 4. Content collections (Astro) — bilingual

Zod schemas in `src/content.config.ts`. Each collection (services, cases, essays, videos, podcast, whitepapers, workshops) uses `[slug].en.mdx` / `[slug].de.mdx` naming. Schema includes `locale: 'en' | 'de'` and `alternateSlug`.

## 5. Footer

Four columns: Services · Resources · Ecosystem · Company. Legal strip: © · Privacy · Terms · Imprint · Social.

## 6. Resolved decisions

- **Cases:** 8 pages, one per client. Multi-deliverable clients consolidate.
- **Pricing:** contact-driven. No anchors.
- **Languages:** EN + DE at launch. `/de/` URL prefix. `hreflang` tags.

## 7. Open IA questions

- Workshops as service vs. resource — duplication?
- Whitepaper gating?
- On-site search at v1?
- DE translation flow: simultaneous with EN or EN first?
