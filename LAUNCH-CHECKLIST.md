# riteshosta.com — Launch Readiness Checklist

The site is **built and verified** (all 24 pages render, SEO/schema/redirects/sitemap working). Nothing below blocks the *build* — every item is a **launch gate**: a decision, a fact, an integration, an asset, or a legal review that must land before go-live. Each is tied to the exact file(s) where a `[CONFIRM]` / `TODO` / `[PLACEHOLDER]` marker lives in code.

Legend: ☐ open · ✅ done in build · ⛔ blocks launch

---

## A · Decisions to lock (architecture §1.6)

- ☐ **Funnel Experience™ — retire or keep?** *Rec: retire from nav; one origin-story mention on About.* Reflected in `app/about/page.tsx` (M02 journey references it as origin only). ⛔
- ☐ **Courses — Graphy or migrate?** *Rec: keep Graphy for checkout, mirror catalogue for SEO.* Built that way: `app/courses/page.tsx` links out to `/s/store`. Confirm the store URL + course list.
- ☐ **Playbooks — gate or ungate?** *Rec: ungate the 40+ signals checklist, gate the other three.* Built that way in `components/site/PlaybookCard.tsx`. Confirm.
- ☐ **Programme pricing — show or hide?** *Rec: "From $10K" on Engine Build; Sprint & Coaching on application.* Built: Engine Build shows it (`app/programs/gtm-engine-build/page.tsx:109`); Sprint/Coaching unpriced. ⛔
- ☐ **Newsletter name** — defaulted to "Ritesh's Newsletter" (matches the monogram). Alt: "The Signal Loop". Used in `components/modules/NLBlock.tsx`, `app/newsletter/page.tsx`.
- ☐ **Spelling: British → American** — copy is currently **British** (personalisation, optimise, behaviour). One find-and-replace pass at sign-off. Affects **every page**. ⛔
- ☐ **Tagline ownership** — "Run your B2B like an e-commerce engine" is body-only here (Home M01), H1 belongs to insightstap.com. Verify the shared keyword register.

## B · Facts to confirm (architecture Annex A) ⛔ (all block publish)

- ☐ **Years of experience** → using **10+** (`data`/stat bars, `app/about`). Make it agree with the InsightsTap trust strip.
- ☐ **Projects delivered** → **100+** (personal figure; not the agency's 1,000+). Home stat bar + `app/about/page.tsx:168`.
- ☐ **B2B clients** → **40+** (`data`, Home stat bar). Confirm or drop to a 3-up.
- ☐ **Fiverr rating** → **5.0 ★ / 45 reviews / 43 five-star** — perishable, verify on launch day. `app/testimonials/page.tsx:44`.
- ☐ **Newsletter subscriber count** — intentionally **omitted** (no number invented). `app/newsletter/page.tsx:45`. Supply the real figure or keep the descriptor only.
- ☐ **Fortune 500 claim** — flagged in `app/about/page.tsx:112`; cut if it cannot be named.
- ☐ **Certifications** — SAP/Oracle/HubSpot claims flagged in `app/about/page.tsx:81`; keep only what can be evidenced.
- ☐ **Case metrics** (40% CAC, 3× velocity, 42% in-market) — `data/cases.ts:2`; confirm arithmetic + whether clients can be named.
- ☐ **Testimonial attributions** — `data/testimonials.ts:2`; re-confirm permission + current titles. **Two quotes are `[PLACEHOLDER]`** (Marilisa Barberi, Liz Flynn) — paste the real text before publish.
- ☐ **Client logos** — `components/modules/LogoWall.tsx:5`; written usage permission per mark; unlicensed logos come out.
- ☐ **The 98% dark-funnel stat** — used in the Speaking talk title (`app/speaking/page.tsx:15`) and referenced elsewhere; **attribute or soften** before publish.

## C · Integrations to wire (currently styled placeholders)

- ☐ **HubSpot — newsletter form** (`components/site/SubscribeForm.tsx`, `components/modules/NLBlock.tsx`) → FPG033 pattern, **separate newsletter list**. ⛔
- ☐ **HubSpot — qualifying form** (`components/site/QualifyForm.tsx`) → same portal as InsightsTap, **separate personal-brand list** for attribution. ⛔
- ☐ **HubSpot — meetings embed** on Contact (`app/contact/page.tsx:51`) → `latest_aes_meeting_link` pattern. ⛔
- ☐ **Playbook email gates** (`components/site/PlaybookCard.tsx`) → wire gated cards to the HubSpot newsletter form.
- ☐ **YouTube** — Videos grid + `/videos/[slug]` embeds are placeholders; wire the real feed + embeds (`app/videos/[slug]/page.tsx:63`, `data/videos.ts:3`). Subscribe/channel URL (`app/videos/page.tsx:41`, `app/contact/page.tsx:12`).
- ☐ **Graphy** — Courses enrol link (`app/courses/page.tsx:76`) → confirm `/s/store`; mirror the real catalogue.

## D · Assets to produce (architecture Annex B)

- ✅ **Favicon + apple-touch-icon** — derived from the monogram (`app/icon.png`, `app/apple-icon.png`).
- ✅ **Framework diagrams** — built as live SVG components (`components/diagrams/FrameworkStack.tsx`, `FrameworkDiagrams.tsx`). *Optional: commission polished illustration versions per Annex B.*
- ☐ **Cut-out / editorial portraits** — hero uses `ritesh-hero.webp`; the transparent cut-out at ≥1600px is still ideal (`components/site/PortraitFrame.tsx:1`).
- ☐ **Candid / PAWS photo** — About M08 uses `ritesh-alt.webp` as a stand-in (`app/about/page.tsx:242`). Source the real candid.
- ☐ **Stage photograph** — Speaking ships without a hero image by design (`app/speaking/page.tsx:64`). Source from a past event.
- ☐ **Playbook PDFs ×4** — HTML → WeasyPrint pipeline (`app/playbooks/page.tsx:48`, `components/site/PlaybookCard.tsx:30`). ⛔ (the gated downloads)
- ☐ **Default OG image** (1200×630) + per-framework OG overrides — **not yet built**; every social share currently has no image. Add via `app/opengraph-image` or metadata. ⛔
- ☐ **Press-kit ZIP** — Speaking button is disabled pending it (`app/speaking/page.tsx:122`).
- ☐ **Client logo pack** (SVG, greyscale) — replace the text placeholders in `components/modules/LogoWall.tsx`.
- ☐ **Case thumbnails ×8** — `/work` cards use styled placeholders; commission the visual set.
- ☐ **Video thumbnails** — VideoObject `thumbnailUrl` points at the (not-yet-built) default OG image.

## E · Content to write

- ✅ **6 pillar launch articles** — written, one per cluster, each linking up to its pillar (`data/articles.ts`).
- ☐ **Fill out the clusters** — the architecture lists more article seeds per cluster; add over time.
- ☐ **Video summaries/transcripts** — detail pages have transcript placeholders.
- ☐ **Newsletter recent-issues** — omitted until ≥3 issues exist (per spec).

## F · Technical & SEO (architecture §3.9)

- ✅ **XML sitemap** — `app/sitemap.ts` → `/sitemap.xml` (39 URLs; legal excluded).
- ✅ **robots.txt** — `app/robots.ts`, references the sitemap.
- ✅ **Redirect map** — `next.config.mjs` (`/aboutus→/about` etc. verified 308; `/s/checkout` + `/t/public/login` intentionally NOT redirected).
- ✅ **Real 404 status** — `app/not-found.tsx` returns 404 (not a friendly 200).
- ✅ **Self-referencing canonical + per-page meta** — every page's `metadata` sets `alternates.canonical` + title/description to the §3.4 spec.
- ✅ **Structured data** — Person, Service, Article, VideoObject, BreadcrumbList in place; **no Review/AggregateRating** anywhere (deliberate).
- ✅ **Fonts** — Raleway/Poppins/Inter/Space Mono via `next/font` (self-hosted, subset, `font-display: swap`).
- ☐ **Default + per-page OG/Twitter images** — see D. ⛔
- ☐ **Hero LCP** — hero photo uses `next/image` with `priority`; serve AVIF/WebP (WebP done), target LCP < 2.5s; test on the real domain.
- ☐ **GA4 + Google Search Console + Bing Webmaster** — add analytics + verify the property; submit the sitemap.
- ☐ **Consent banner + Google consent mode** — pair with the cookie policy (EU traffic expected from speaking).
- ☐ **www vs non-www** — pick one (live site is `www`), 301 the other at DNS/host.
- ☐ **`hreflang`** — not needed (one language) — do **not** add.

## G · Legal ⛔

- ☐ **Privacy / Terms / Refund / Cookie** — four pages are **drafts, `noindex`, marked pending counsel** (`app/{privacy-policy,terms-of-use,refund-policy,cookie-policy}/page.tsx`). Have counsel review; reconcile Privacy with the final HubSpot form fields + analytics.

---

### Fastest path to a soft launch
1. Lock the 7 §1.6 decisions + run the British→American pass. 2. Confirm the Annex A numbers (or drop unconfirmable ones). 3. Wire the 3 HubSpot integrations. 4. Ship the default OG image. 5. Counsel signs the legal pages. 6. GA4 + Search Console. Everything else (photography, PDFs, more articles, case thumbnails) can iterate post-launch without holding the date.
