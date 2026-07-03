import Link from "next/link";

/**
 * Mono uppercase CTA. Primary = solid ink fill; secondary = 2px ink outline;
 * lime = lime fill (for use on dark sections). Adds a → glyph when `arrow`.
 *
 * @param {string} href
 * @param {"primary"|"secondary"|"lime"} [variant="primary"]
 * @param {boolean} [arrow=false]
 */
const VARIANTS = {
  primary: "bg-ink text-paper",
  secondary: "border-2 border-ink text-ink",
  lime: "bg-lime text-ink",
};

export default function Button({
  href,
  variant = "primary",
  arrow = false,
  className = "",
  children,
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-[9px] rounded px-6 py-4 font-mono text-[12.5px] font-semibold uppercase tracking-[0.06em] no-underline ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {arrow && <span className="text-[15px]">→</span>}
    </Link>
  );
}
