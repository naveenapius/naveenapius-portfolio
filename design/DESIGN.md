# DESIGN.md — naveenapius.com

Handoff reference for the Naveena Pius personal site. Pairs with the project files. Read this first, then open the `.dc.html` files for the source of truth.

---

## 1. Who this is for

Naveena Pius — a **software engineer** (data pipelines & annotation systems for AI products) who **rides motorcycles** and creates riding content on the side. Web development is a side gig. The site carries two identities that share one visual language:

- **Engineering / builder** — the primary voice (Homepage, Blog).
- **Media / creator / rider** — the secondary voice (Media page).

Tone: direct, unpretentious, "substance over spectacle." Confident but not corporate. No fluff, no filler.

---

## 2. Design language

A **brutalist-editorial** system: hard 2px ink outlines, solid offset drop-shadows (no blur), a warm off-white paper ground, a single punchy lime accent, and stencil display type. Think workshop signage meets a well-set magazine — utilitarian parts, deliberate typography.

Core principles:
- **High contrast, flat color.** No gradients (the only exception is one thin lime→transparent divider rule). Color is applied in confident blocks.
- **Hard shadows, not soft.** Shadows are solid fills offset by 5–9px (`box-shadow: 7px 7px 0 #161710`), never blurred. They read as printed registration, not depth.
- **Everything is squared or lightly rounded.** Borders are `2px solid #161710`; radii are small (4–8px) except pills (30px) and the occasional circle.
- **Generous negative space** around large stencil headings.
- **One accent, used sparingly.** Lime marks the thing that matters on a given screen — never more than a few hits per viewport.

### Recurring motifs (the "signature")
- **45° rotated squares** — large decorative diamonds bleeding off the top-right corner of hero sections (`#CDE990`), and tiny 9px lime diamonds as list bullets. This is the strongest brand shape; it also drives the logo's corner cut.
- **Offset-shadow cards** — bordered blocks floated on a solid color shadow.
- **Faint grid texture** — a 36px ink grid at ~4.5% opacity behind hero areas (toggleable via the `gridTexture` prop).
- **Marquee tickers** — dark full-bleed strips of mono text scrolling horizontally (tech stack on Homepage, ride themes on Media).
- **Lime highlight on a word** — a key word in a headline gets a rotated lime block behind it with an offset ink shadow.
- **Pills** — lime-tinted rounded tags for categories/skills; a dashed outline pill for status.

> **Note on `//` eyebrow labels:** early drafts prefixed section labels with a mono `// LABEL` kicker. These were intentionally **removed** across the site — do not reintroduce them. Sections now lead directly with the stencil `<h2>`.

---

## 3. Color

| Token | Hex | Role |
|---|---|---|
| Paper | `#FFFFE8` | Primary light background, text on dark |
| Ink | `#161710` | Primary dark background, body text, borders |
| Ink surface | `#1F2018` | Raised card on dark sections (e.g. "keep reading") |
| **Lime** | `#AACB73` | **Primary accent** — CTAs, highlights, shadows, active nav marker |
| Light lime | `#CDE990` | Decorative diamonds, mono labels on dark, secondary highlight |
| Text muted (light bg) | `#4A4B3E` | Secondary/body copy on paper |
| Text body (light bg) | `#2C2D22` | Long-form article body |
| Lime text | `#6E8B3D` | Small mono accents / active links on paper |
| Deep lime text | `#37491C` | Text inside lime pills |
| Mono muted | `#8C8D78` | Meta text, timestamps, footer captions |
| Pink shadow | `#FFD4D4` | Offset shadow on the "collaborate" card only |
| Pink accents | `#E89AAA` / `#A4566B` / `#C76A82` | The media/collaborate voice — used *only* on the collaborate card and its links |

**Usage rules**
- Lime is the engineering/primary accent. Pink appears **only** on the collaborate (media) contact card to distinguish the two voices — do not scatter it elsewhere.
- Selection color is lime on ink (`::selection{background:#AACB73;color:#161710}`).
- Borders on paper: `#161710`; hairlines: `rgba(22,23,16,.12–.28)`. Borders on ink: `rgba(255,255,255,.14–.2)`.
- `theme-color` (browser chrome) is `#161710`.

---

## 4. Typography

Three families, loaded from Google Fonts in every page's `<helmet>`:

- **Allerta Stencil** — display only. All large headings and the wordmark. Always `text-transform:uppercase`, `font-weight:400`, tight leading (`.86–.96`). This is the loudest brand signal; use it for page titles (`<h1>`) and section titles (`<h2>`), banner text, footer wordmark.
- **Cantarell** — body + card/article titles. Regular 400 for prose, 700 for card headings and post `<h1>`. Warm humanist sans that softens the brutalist frame.
- **JetBrains Mono** — all "system" text: nav, buttons, tags, eyebrows, dates, read-time, footer meta. Weights 500–700, wide letter-spacing (`.06–.22em`), often uppercase. This is the "engineering" texture.

**Scale (fluid, `clamp()`):**
- Page hero `<h1>`: `clamp(42px,6.4vw,76px)` — Homepage; Blog index goes huge at `clamp(56px,11vw,150px)`.
- Section `<h2>`: `clamp(30px,5vw,58px)` stencil.
- Article `<h1>` (Cantarell 700): `clamp(32px,5.6vw,54px)`.
- Article body: 18px / line-height 1.75; lede paragraph `clamp(19px,2.2vw,22px)`.
- Mono labels: 10–12.5px.
- Minimum body ~15px; never smaller than ~10.5px for mono micro-labels.

Use `text-wrap:balance` on headings and `text-wrap:pretty` on long paragraphs.

---

## 5. Components & patterns

- **Sticky header** — translucent paper with blur, 2px ink bottom border. Left: `NAVEENA PIUS` mono wordmark. Right: mono nav (`WORK / SKILLS / MEDIA / WRITING`), a solid-ink `CONTACT` button. The current section is marked lime (`#6E8B3D`). Homepage's `MEDIA` nav item is a highlighted lime pill with offset shadow (cross-site emphasis).
- **CTA buttons** — primary = solid ink fill, paper text; secondary = transparent with 2px ink border. Mono, uppercase, small radius, `→` glyph on primary. On dark sections the primary CTA flips to lime fill / ink text.
- **Cards** — 2px ink border, 6–8px radius, solid offset shadow (ink by default; lime or pink to signal emphasis). Hover: translate up-left 2px and grow the shadow to lime.
- **Tag pills** — `rgba(170,203,115,.32)` fill, lime border, deep-lime text, 30px radius, mono. Multiple per card, wrapping row with `gap`.
- **Stat blocks** (Media) — big stencil numbers in lime on ink, mono caption under, each with a lime left-rule as separator.
- **Banner title blocks** (Blog cards / post headers without a photo) — ink or light-lime panel, 16:9 / 2:1, stencil title bottom-aligned, a rotated lime diamond bleeding from a corner.
- **Image placeholders** — `<image-slot>` web component (`image-slot.js`) everywhere the user drops their own photo. Give each a unique `id` and a descriptive `placeholder`. Style the slot with the card's border/shadow.
- **Reading-progress bar** (BlogPost) — fixed 3px lime bar at top, width driven by scroll.
- **Footer** — ink, big stencil `NAVEENA / PIUS` wordmark, mono role line (`ENGINEER // RIDER // INDIA`), a `// END` sign-off, copyright.

### Motion
- **Reveal on scroll** — elements marked `data-reveal` fade + rise 24px via IntersectionObserver, with a safety timeout that force-reveals after 1.6s (so static captures/exports never get stuck hidden). Keep this pattern for new sections.
- **Marquee** — CSS `@keyframes` translateX loop, duplicated span for seamlessness.
- **Hover** — 0.25s ease card lift; nav/link color shifts.
- Entrance `@keyframes kfUp` on hero elements with staggered delays.
Keep motion subtle and functional; no parallax, no scroll-jacking.

---

## 6. Project architecture

Everything is built as **Design Components** — self-contained `*.dc.html` files that open directly in a browser and share the runtime `support.js` (do not edit `support.js`). Styling is **inline only** (no external CSS/classes); the sole `<style>` block per file holds resets, `@keyframes`, and a couple of `-webkit-line-clamp` helpers.

### Pages (each a standalone DC)
| File | Purpose | Notes |
|---|---|---|
| `Homepage.dc.html` | Landing — hero, skills, work, contact | Engineering-forward. Contact has two cards: **Work with me** (lime) and **Collaborate with me** (pink → links to Media). |
| `Media.dc.html` | Creator/rider page — hero, stats, content, reel showcase, collab CTA | Pink/collab voice lives here; links back to Homepage. |
| `Blog.dc.html` | Writing index — 6 post cards (newest first) | Cards alternate photo covers and stencil title-blocks. Each card links to `BlogPost.dc.html`. |
| `BlogPost.dc.html` | Single article layout (reference template) | One fully-designed post (Enduro Edge). Tags, meta, cover, rich body (h2 / lede / bullet diamonds / pull-quote), author row, prev-next, reading progress. Use as the template for the other posts. |

### Navigation
Pages link with **relative hrefs** (`Media.dc.html`, `Blog.dc.html`, `Homepage.dc.html#contact`). In-page anchors use `#work`, `#skills`, `#contact`, etc. with `scroll-margin-top` to clear the sticky header.

### Tweakable props (Tweaks panel / DC props)
- `gridTexture` (boolean) — the faint hero grid.
- `marquee` (boolean) — the scrolling tickers (Homepage/Media).
- `availableBadge` (boolean) — Homepage "available for work" status pill.
Read via `this.props.x ?? default`. Add new toggles here rather than hard-coding.

### Assets (all derived from the chosen logo, mark **"1c" — diagonal N**)
| File | Use |
|---|---|
| `favicon.svg` | Scalable primary favicon (the master mark: ink rounded tile, cream diagonal `N`, lime 45° corner cut) |
| `favicon-16.png`, `favicon-32.png` | Raster favicons |
| `apple-touch-icon.png` (180) | iOS home-screen icon |
| `icon-192.png` | Author avatar on posts |
| `og-image.png` (1200×630) | Social share card — mark + stencil wordmark on ink |
| `image-slot.js` | Web component for user-supplied images (referenced by every page) |

The logo is **pure geometry** (no font dependency) so it stays crisp to 16px. The 45° corner cut ties it to the site's rotated-square motif. If you regenerate the OG image, the wordmark uses Allerta Stencil; embed the font (it won't load in a raw canvas context).

---

## 7. Extending the system — checklist

- Build new screens as `*.dc.html`; keep styling **inline**.
- Reuse the palette and the three fonts exactly. Don't introduce new accent colors — lime for engineering, pink only for the media/collab voice.
- Lead sections with a stencil `<h2>`; **no `//` eyebrow kickers**.
- Frame content in bordered offset-shadow cards; use lime shadow for emphasis, pink shadow only for media/collab.
- Mark new sections `data-reveal` for the scroll animation.
- Use `<image-slot>` (unique `id` + descriptive `placeholder`) for any user photo.
- Keep the sticky header + footer consistent across pages; mark the active nav item lime.
- Respect the density: big type, lots of air, one accent hit per view. Substance over spectacle.
- Add screen/section labels via `data-screen-label` / keep `data-comment-anchor` attributes intact when restructuring so review comments stay pinned.
