import Link from "next/link";
import { isExternalHref, externalLinkProps } from "@/lib/links";

/**
 * Mono uppercase CTA with the site's signature hard offset shadow and motion.
 *
 * Fill: primary = solid ink; secondary = 2px ink outline; secondaryLight =
 * 2px translucent-paper outline (on dark grounds); lime = lime fill (on dark
 * grounds). Adds a → glyph when `arrow`.
 *
 * Shadow: each variant carries a default offset that contrasts with the ground
 * it lives on, so the slab is always visible — lime behind the solid-ink
 * primary CTA, ink behind the light outline, paper behind the dark-ground fills.
 * Pass `shadow="pink"` to flag a media / Instagram link instead.
 *
 * Motion: hover (desktop only — Tailwind gates `hover:` behind
 * `@media (hover:hover)`) lifts the button up-left and grows the shadow; a
 * click/tap presses it down onto the shadow and collapses it.
 *
 * @param {string} href
 * @param {"primary"|"secondary"|"secondaryLight"|"lime"} [variant="primary"]
 * @param {boolean} [arrow=false]
 * @param {"ink"|"paper"|"lime"|"pink"} [shadow] - override the variant's default shadow color.
 */
const VARIANTS = {
  primary: "bg-ink text-paper",
  secondary: "border-2 border-ink text-ink",
  secondaryLight: "border-2 border-paper/40 text-paper",
  lime: "bg-lime text-ink",
};

// Offset shadow per color: a resting 4px slab plus a grown 6px hover state so
// the button appears to lift (paired with the hover translate below). `active`
// collapses the shadow entirely — see INTERACTION. Full literal class strings,
// since Tailwind only generates CSS for classes it can see in source.
const SHADOW = {
  ink: {
    base: "shadow-[4px_4px_0_var(--ink)]",
    hover: "hover:shadow-[6px_6px_0_var(--ink)]",
  },
  paper: {
    base: "shadow-[4px_4px_0_var(--paper)]",
    hover: "hover:shadow-[6px_6px_0_var(--paper)]",
  },
  lime: {
    base: "shadow-[4px_4px_0_var(--lime)]",
    hover: "hover:shadow-[6px_6px_0_var(--lime)]",
  },
  pink: {
    base: "shadow-[4px_4px_0_var(--pink)]",
    hover: "hover:shadow-[6px_6px_0_var(--pink)]",
  },
};

// Default shadow color per variant (contrasts the fill and the section ground).
const VARIANT_SHADOW = {
  primary: "lime",
  secondary: "ink",
  secondaryLight: "paper",
  lime: "paper",
};

// Shared motion. Hover lifts up-left (with the grown shadow); active drops the
// button 4px down-right — onto where its shadow sat — and removes the shadow for
// a tactile "press". `active` comes after `hover` in Tailwind's variant order,
// so it wins while pressing.
const INTERACTION =
  "transition-all duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

export default function Button({
  href,
  variant = "primary",
  arrow = false,
  shadow,
  className = "",
  children,
}) {
  const s = SHADOW[shadow ?? VARIANT_SHADOW[variant]];
  const classes = `inline-flex items-center gap-[9px] rounded px-6 py-4 font-mono text-[12.5px] font-semibold uppercase tracking-[0.06em] no-underline ${VARIANTS[variant]} ${s.base} ${s.hover} ${INTERACTION} ${className}`;

  // Same-page anchors (e.g. "#work") are left to the browser's native
  // fragment scroll. next/link's Link intercepts the click as a client-side
  // navigation, and when it decides the target URL matches what it already
  // thinks is current (easy to happen after scrolling around the page
  // without the hash updating), it skips the scroll — the button appears to
  // do nothing. A plain <a> always jumps to the id.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow && <span className="text-[15px]">→</span>}
      </a>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes} {...externalLinkProps}>
        {children}
        {arrow && <span className="text-[15px]">→</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow && <span className="text-[15px]">→</span>}
    </Link>
  );
}
