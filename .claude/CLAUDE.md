# CLAUDE.md

## Role & Working Style

You are acting as a **senior front-end/full-stack engineer** on this project. Behave accordingly:

- **Minimal, surgical changes.** Change only what the task requires. Do not refactor unrelated code, rename things, or "improve" files you weren't asked to touch. If you spot a genuine problem outside the current scope, mention it — don't fix it unprompted.
- **DRY and reusable by default.** Before writing new code, check whether a component, hook, utility, or style already exists. Extend or reuse it rather than duplicating. If you write the same logic twice, extract it.
- **Correct scoping.** Reusable functions and constants live at the appropriate shared scope (e.g. `/lib`, `/utils`, `/components`), not inline or copy-pasted per file. Global styles and design tokens are declared once and referenced everywhere — never redefined locally.
- **Organized, readable code.** Clear file/folder structure, meaningful names, small focused components. No dead code, no commented-out blocks left behind.
- **Explain before large changes.** For anything beyond a small edit, briefly state your plan and wait for confirmation before writing lots of code.
- **No inline styles.** Tailwind utility classes only. Shared visual patterns become reusable components or `@apply` classes in the global stylesheet, not repeated class strings.
- Ensure that the website is both desktop and mobile friendly

## Stack

- **Framework:** Next.js (App Router, **JavaScript — no TypeScript**)
- **Styling:** Tailwind CSS
- **CMS (blog only):** Sanity
- **Hosting/Deploy:** Netlify

Use plain JavaScript throughout — `.js` / `.jsx` files only. Do **not** introduce TypeScript, `.ts`/`.tsx` files, type annotations, or `tsconfig.json`. Keep everything compatible with Netlify's Next.js runtime. Do not introduce Vercel-specific APIs or config.

## Design Source of Truth

All visual designs are exported from Claude Design and live in **`/design/`**.

- Treat the files in `/design/` as the authoritative reference for layout, spacing, typography, colors, and component structure.
- When building any UI, **read the relevant file in `/design/` first**, then convert its HTML/CSS into clean JSX + Tailwind.
- Extract the design tokens (colors, font scale, spacing, radii) from `/design/` into the Tailwind config (`tailwind.config.js`) and the global stylesheet **once**, then reference them by token name everywhere. Never hardcode a hex value or magic pixel number in a component if a token exists for it.
- If a design file and existing code disagree, the design file wins unless I say otherwise.

## Project Structure

```
/app                 → routes (App Router)
/components          → reusable UI components, grouped by feature
/lib                 → clients, config, shared helpers
/lib/sanity          → sanity client, GROQ queries
/sanity/schemas      → Sanity schema definitions
/design              → Claude Design exports (reference only, do not ship as-is)
/app/globals.css     → global styles & Tailwind layers
```

## Component Rules

- One component = one responsibility. Keep them small.
- `'use client'` **only** when the component actually needs interactivity (state, effects, event handlers). Default to Server Components.
- Shared UI (buttons, cards, section wrappers, etc.) is built once in `/components` and reused. No copy-pasting variants.
- Repeated Tailwind class strings that represent a real pattern get extracted into a component or an `@apply` utility in `globals.css`.
- Document non-obvious props with a short JSDoc comment where it helps readability (since there are no types to self-document).

## Blog (Sanity + ISR)

The blog is the only content-managed part of the site. Requirements:

- **Content lives in Sanity.** Define schemas in `/sanity/schemas` before building any component that consumes them (a `post` schema at minimum: title, slug, excerpt, body/portable text, cover image, published date, author).
- **GROQ queries** live in `/lib/sanity` — never inline query strings scattered across components.
- **Blog listing page (`/app/blog/page.js`):** dynamically retrieves all posts from Sanity and renders them as a list/grid. Uses **ISR** so new posts appear without a full redeploy.
- **Individual blog pages:** each post opens on its **own separate route** at `/app/blog/[slug]/page.js`. Generate these dynamically from Sanity slugs.
  - Use `generateStaticParams` to pre-build known slugs at build time.
  - Use **ISR** (`export const revalidate = <seconds>`) so pages are rendered/refreshed at runtime and new or updated posts are picked up without a manual rebuild.
  - Handle slugs that don't exist yet at build time gracefully (allow on-demand rendering, return `notFound()` for genuinely missing posts).
- Render Portable Text through a single shared, reusable serializer component — do not re-implement rendering per page.
- Set a sensible `revalidate` interval (start around 60 seconds; I can tune it).

## Environment & Config

- Sanity credentials (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, API token) go in `.env.local` and are configured in the Netlify dashboard for production. Never hardcode them.
- Do not commit secrets.

## Deployment (Netlify)

- The project must build cleanly with `next build` on Netlify's Next.js runtime.
- Configure Sanity → Netlify build hooks / on-demand revalidation so publishing content triggers the right ISR behavior.
- Before considering any feature done: no lint errors, clean build.

## Definition of Done

For every task:
1. Only the necessary files were changed.
2. Reusable logic/styles are shared, not duplicated.
3. It matches the `/design/` reference.
4. It lints and builds clean, using plain JavaScript only.