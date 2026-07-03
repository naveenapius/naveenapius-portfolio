"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Site nav — canonical order per DESIGN.md §5.
 * `match` decides which route lights up the item as active.
 */
const NAV = [
  { label: "WORK", href: "/#work" },
  { label: "SKILLS", href: "/#skills" },
  { label: "MEDIA", href: "/media", match: "/media" },
  { label: "WRITING", href: "/blog", match: "/blog" },
];

const linkBase =
  "font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] no-underline transition-colors hover:text-lime-text";

/**
 * Sticky site header: translucent paper, blurred, 2px ink underline.
 * Active section is marked lime; on the homepage the MEDIA item becomes a
 * lime pill with an offset shadow (cross-site emphasis).
 */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/85 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[var(--container)] flex-wrap items-center justify-between gap-[18px] px-[var(--gutter)] py-[14px]">
        <Link
          href="/"
          className="font-mono text-[14px] font-bold leading-none tracking-[0.06em] text-ink no-underline"
        >
          NAVEENA&nbsp;PIUS
        </Link>

        <nav className="flex flex-wrap items-center gap-[clamp(14px,2.2vw,30px)]">
          {NAV.map(({ label, href, match }) => {
            const isActive = match && pathname.startsWith(match);

            // Homepage: MEDIA gets the lime-pill emphasis treatment.
            if (label === "MEDIA" && isHome) {
              return (
                <Link
                  key={label}
                  href={href}
                  className={`${linkBase} inline-flex items-center gap-[7px] rounded bg-lime px-[14px] py-[9px] text-ink shadow-[3px_3px_0_var(--ink)] hover:text-ink`}
                >
                  {label} <span className="text-[13px]">↗</span>
                </Link>
              );
            }

            return (
              <Link
                key={label}
                href={href}
                className={`${linkBase} ${isActive ? "text-lime-text" : "text-ink"}`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/#contact"
            className={`${linkBase} inline-flex items-center gap-[8px] rounded bg-ink px-[14px] py-[9px] text-paper hover:text-paper`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
