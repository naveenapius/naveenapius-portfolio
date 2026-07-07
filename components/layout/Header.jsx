"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
const pillClass = `${linkBase} inline-flex items-center gap-[7px] rounded bg-lime px-[14px] py-[9px] text-ink shadow-[3px_3px_0_var(--ink)] hover:text-ink transition-all duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0_var(--ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`;
const contactClass = `${linkBase} inline-flex items-center gap-[8px] rounded bg-ink px-[14px] py-[9px] text-paper shadow-[3px_3px_0_var(--lime)] hover:text-paper transition-all duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0_var(--lime)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`;

/**
 * The highlighted lime cross-site pill. It points at the "other side" of the
 * site: on the media page it sends visitors to the engineering home ("DEV");
 * everywhere else it promotes the media page ("MEDIA").
 *
 * @param {boolean} toDev - true on the media page (link home, labelled DEV).
 */
function CrossPill({ toDev, onClick }) {
  return (
    <Link
      href={toDev ? "/" : "/media"}
      onClick={onClick}
      className={pillClass}
    >
      {toDev ? "DEV" : "MEDIA"} <span className="text-[13px]">↗</span>
    </Link>
  );
}

/**
 * Sticky site header. On desktop the full mono nav sits inline; below `md` it
 * collapses to a hamburger, leaving only the highlighted cross-site pill in the
 * bar. Active route is marked lime; the MEDIA slot becomes the cross-site pill
 * (MEDIA on the homepage, DEV → home on the media page).
 */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isMedia = pathname.startsWith("/media");
  const [open, setOpen] = useState(false);

  const isActive = (match) => match && pathname.startsWith(match);
  const close = () => setOpen(false);

  // Clicking the logo while already on "/" is a same-route Link to Next's
  // router, so it no-ops instead of scrolling — do that scroll ourselves.
  const goHome = (e) => {
    close();
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/85 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[var(--container)] items-center justify-between gap-[18px] px-[var(--gutter)] py-[14px]">
        <Link
          href="/"
          onClick={goHome}
          className="font-mono text-[14px] font-bold leading-none tracking-[0.06em] text-ink no-underline"
        >
          NAVEENA&nbsp;PIUS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[clamp(14px,2.2vw,30px)] md:flex">
          {NAV.filter(({ label }) => label !== "MEDIA").map(({ label, href, match }) => (
            <Link
              key={label}
              href={href}
              className={`${linkBase} ${isActive(match) ? "text-lime-text" : "text-ink"}`}
            >
              {label}
            </Link>
          ))}
          {isHome || isMedia ? (
            <CrossPill toDev={isMedia} />
          ) : (
            <Link
              href="/media"
              className={`${linkBase} text-ink`}
            >
              MEDIA
            </Link>
          )}
          <Link href="/#contact" className={contactClass}>
            CONTACT
          </Link>
        </nav>

        {/* Mobile bar: keep the highlighted cross-site pill + a hamburger toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <CrossPill toDev={isMedia} onClick={close} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded border-2 border-ink text-ink"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                  <line x1="2" y1="13" x2="16" y2="13" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t-2 border-ink bg-paper md:hidden"
        >
          <div className="mx-auto flex max-w-[var(--container)] flex-col px-[var(--gutter)] py-2">
            {NAV.filter((n) => n.label !== "MEDIA").map(({ label, href, match }) => (
              <Link
                key={label}
                href={href}
                onClick={close}
                className={`border-b border-ink/10 py-4 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] no-underline ${
                  isActive(match) ? "text-lime-text" : "text-ink"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={close}
              className={`${contactClass} mt-4 justify-center py-4 text-[13px]`}
            >
              CONTACT
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
