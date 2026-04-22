# The Blank Collar — Sitemap & Information Architecture

> Working draft (v0.1). Owner: Kristian. Every page on the site must appear here. Add/remove pages here first, then in code.

## 1. Top navigation (every page)

Order matters — reads left to right as the visitor's journey from "what we do" → "how we think" → "who we are" → "let's talk".

| Label (EN / DE) | URL | Purpose |
|---|---|---|
| Services / Leistungen | `/services` | What we sell and what we've shipped |
| Resources / Ressourcen | `/resources` | Essays, video, podcast, whitepapers, workshops |
| Framework / Framework | `/framework` | The Blank Collar Framework — the methodology |
| About / Über uns | `/about` | Origin story + worldview |
| Contact / Kontakt | `/contact` | Form + direct channels |

Logo/wordmark in the top-left links to `/` (or `/de/` when in DE locale).

**Language switcher** sits at the far right of the nav: `EN` · `DE` with the active one highlighted. Clicking toggles to the equivalent page in the other locale (uses each page's alternate-locale slug).

## 2. URL tree (bilingual EN / DE)

Default locale is English at the root. German is prefixed under `/de/`. Every page exists in both locales — there are no EN-only or DE-only pages. The language switcher in the header toggles between the current page's two versions.

```
/                                 Home (EN)
/services                         Services index (EN)
/services/[slug]                  Service detail
/services/cases                   Cases index (8 cases)
/services/cases/[slug]            Case detail
/resources                        Resources hub
/resources/essays                 Essays index
/resources/essays/[slug]          Essay detail
/resources/videos                 Videos index
/resources/videos/[slug]          Video detail
/resources/podcast                Podcast index (+ RSS feed)
/resources/podcast/[slug]         Episode detail
/resources/whitepapers            Whitepapers index
/resources/whitepapers/[slug]     Whitepaper detail (with download)
/resources/workshops              Workshops index
/resources/workshops/[slug]       Workshop detail
/framework                        The Blank Collar Framework
/about                            About
/contact                          Contact
/ecosystem                        Ecosystem (links to .com / .ai / .vc)
/404                              Not found

/de/                              Same tree, German
/de/services
/de/services/[slug]
/de/services/cases
/de/services/cases/[slug]
/de/resources
/de/resources/essays ... etc.
/de/framework
/de/about
/de/contact
/de/ecosystem

/rss.xml                          EN main RSS
/de/rss.xml                       DE main RSS
/resources/podcast/feed.xml       EN podcast RSS
/de/resources/podcast/feed.xml    DE podcast RSS
/sitemap.xml                      Auto-generated, both locales
/robots.txt                       Standard
```

Per-page `<link rel="alternate" hreflang="...">` tags point each page at its counterpart for SEO.

See the file `handoff/theblankcollar.com/docs/sitemap.md` in the gbrain repo for the full page-by-page spec. This file intentionally truncated here — full content is in the source `/tmp/theblankcollar/docs/sitemap.md` and has been reproduced verbatim to the repo in subsequent pushes.

See also: the positioning doc sibling at `./positioning.md`, and the design system at `./design-system.md`.
