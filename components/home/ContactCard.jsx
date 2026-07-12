import Link from "next/link";
import { isExternalHref, externalLinkProps } from "@/lib/links";

/**
 * Contact card with a mono "// LABEL" marker and a list of channel links.
 * `lime` = engineering voice (Work with me); `pink` = media voice (Collaborate).
 * Pink is used ONLY here, per DESIGN.md — do not reuse it elsewhere.
 *
 * @param {"lime"|"pink"} accent
 * @param {string} label
 * @param {string} description
 * @param {{ label, href, external?: boolean }[]} links
 * @param {string} [id] - anchor target, so other pages can deep-link to this card.
 */
const ACCENT = {
  lime: {
    shadow: "shadow-[7px_7px_0_var(--lime)]",
    marker: "text-lime",
    label: "text-lime-deep",
    arrow: "text-lime-text",
  },
  pink: {
    shadow: "shadow-[7px_7px_0_var(--pink-shadow)]",
    marker: "text-pink",
    label: "text-pink-deep",
    arrow: "text-pink-mid",
  },
};

export default function ContactCard({ accent, label, description, links, id }) {
  const a = ACCENT[accent];

  return (
    <div
      id={id}
      className={`relative rounded-[8px] border-2 border-ink bg-paper p-[clamp(26px,3vw,38px)] ${a.shadow}`}
    >
      <div
        className={`mb-[14px] font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${a.label}`}
      >
        <span className={a.marker}>{"//"}</span> {label}
      </div>

      <p className="mb-6 text-[16px] leading-[1.55] text-text-body">
        {description}
      </p>

      <div className="flex flex-col border-b border-ink/10">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            {...(isExternalHref(link.href) ? externalLinkProps : {})}
            className="flex items-center justify-between gap-[12px] border-t border-ink/10 px-[2px] py-[14px] font-mono text-[13px] font-semibold no-underline"
          >
            <span>
              {link.label}
              {link.external && <span className={a.arrow}> ↗</span>}
            </span>
            <span className={a.arrow}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
