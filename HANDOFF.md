# Handoff — Header nav reorder + CONTACT button animation

**Working instruction (carry this forward):** Only implement code changes. Do not run `next build`/`next dev` or start a preview/dev server to self-verify. The user drives verification themselves (often on an already-running dev server, and on a physical phone for mobile) and comes back with fixes/requests.

**Context**
Next.js (App Router, JS-only), Tailwind v4, deploys to Netlify. Branch: `staging`. Design tokens in `app/globals.css`. See `.claude/CLAUDE.md` for project conventions.

**Repo state: NOT committed.** `git status` shows [components/layout/Header.jsx](components/layout/Header.jsx) modified, uncommitted. The user has been committing after each change lands in prior sessions, but hasn't yet this time — don't assume this diff is landed, and don't commit it yourself unless asked.

## What was done this session

1. **Moved the DEV/MEDIA cross-site pill next to CONTACT** — [Header.jsx:77-99](components/layout/Header.jsx:77). Previously `CrossPill` rendered inline inside the `NAV.map()` sequence, taking the "MEDIA" slot between SKILLS and WRITING. Now the desktop nav renders WORK/SKILLS/WRITING (MEDIA filtered out of the map), then either `CrossPill` (on home/media pages) or a plain "MEDIA" link (everywhere else), immediately followed by the CONTACT pill — so the highlighted pill and CONTACT sit adjacent at the end of the nav.
   - **Mobile top bar and mobile dropdown were intentionally left untouched.** The mobile bar already has the pill next to the hamburger (no CONTACT there to be "next to"), and the dropdown panel still filters MEDIA out entirely and shows CONTACT alone at the bottom. If the user asks for the same adjacency in the mobile dropdown, that's a follow-up, not something assumed done.

2. **CONTACT button now has hover/press animation** — [Header.jsx:21](components/layout/Header.jsx:21). `contactClass` previously had no shadow or motion, unlike `pillClass` (the lime pill) which already had the site's signature offset-shadow lift/press. Added the same interaction pattern, scaled to this pill's size (3px base shadow → 5px hover, 3px translate + `shadow-none` on active — matching `pillClass`'s constants, not `Button.jsx`'s larger 4px/6px ones).
   - **Shadow color is `var(--lime)`, not `var(--ink)`.** CONTACT sits on `bg-ink` (dark fill), and the lime pill's ink-colored shadow only works because the pill's fill is lime (light). An ink shadow on an ink button would be invisible. Used lime instead, consistent with how `components/ui/Button.jsx`'s `primary` variant (also `bg-ink`) contrasts with a lime shadow — see `VARIANT_SHADOW.primary` there for the precedent.

## Current state

- `Header.jsx` desktop nav order: WORK, SKILLS, WRITING, then DEV/MEDIA pill, then CONTACT — all adjacent at the end.
- Both the DEV/MEDIA pill (`pillClass`) and CONTACT (`contactClass`) now share the same hover-lift / press-collapse motion pattern (3px→5px shadow, 3px active translate), differing only in shadow color (ink vs lime) to contrast their respective fills.
- Mobile bar and mobile dropdown menu are unchanged from before this session.
- No dev server was started this session; none of this has been visually verified in a browser. The user verifies (including on a physical phone for mobile) and will report back.

## Open items for the next agent

- **Uncommitted change** — confirm with the user whether `Header.jsx` should be committed, or wait for them to do it themselves as in prior sessions.
- If asked to also apply the pill-next-to-CONTACT layout to the **mobile dropdown menu**, that's new scope — not done this session.
- If the user reports the CONTACT shadow looks wrong (e.g. wants it to still read as `ink` for some design reason), re-read item 2's reasoning before changing — the lime choice was deliberate to keep the shadow visible against the dark fill, not arbitrary.
