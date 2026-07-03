import Link from "next/link";

/**
 * Site footer: big stencil NAVEENA / PIUS wordmark, a mono role line, an
 * optional tagline, and a `// END` sign-off over a hairline divider.
 *
 * @param {"dark"|"light"} [variant="dark"] - ink ground (default) or paper ground (Media).
 * @param {string} role - mono role line, e.g. "ENGINEER // RIDER // INDIA".
 * @param {string | {label: string, href: string}} [tagline] - a plain caption or a link.
 */
export default function Footer({ variant = "dark", role, tagline }) {
  const isDark = variant === "dark";

  const shell = isDark
    ? "bg-ink text-paper"
    : "bg-paper text-ink border-t-2 border-ink";
  const accent = isDark ? "text-lime-light" : "text-lime-text";
  const taglineColor = isDark ? "text-mono-muted" : "text-text-muted";
  const hairline = isDark
    ? "border-[var(--border-paper)]"
    : "border-[var(--border-ink)]";

  return (
    <footer className={shell}>
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] py-[clamp(48px,6vw,76px)]">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div className="font-stencil text-wordmark uppercase leading-[0.9]">
            Naveena
            <br />
            Pius
          </div>

          <div className="text-right">
            <div
              className={`font-mono text-[11px] font-semibold uppercase leading-[1.8] tracking-[0.12em] ${accent}`}
            >
              {role}
            </div>

            {typeof tagline === "string" ? (
              <p
                className={`font-mono text-[11px] font-medium leading-[1.8] tracking-[0.06em] ${taglineColor}`}
              >
                {tagline}
              </p>
            ) : tagline ? (
              <Link
                href={tagline.href}
                className={`mt-1 inline-block border-b font-mono text-[11px] font-medium leading-[1.8] tracking-[0.06em] no-underline ${taglineColor} ${hairline}`}
              >
                {tagline.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div
          className={`mt-[clamp(36px,5vw,56px)] flex flex-wrap items-center justify-between gap-[14px] border-t pt-[22px] font-mono text-[11px] font-medium tracking-[0.06em] text-mono-muted ${hairline}`}
        >
          <span>© 2026 Naveena Pius</span>
          <span className={accent}>{"// END"}</span>
        </div>
      </div>
    </footer>
  );
}
