/**
 * Mono tag/pill. `lime` = lime-tinted rounded pill (project tags on paper);
 * `outline` = hairline-outlined chip (skills on dark sections).
 *
 * @param {"lime"|"outline"} [variant="lime"]
 */
const VARIANTS = {
  lime:
    "rounded-[var(--radius-pill)] border border-lime/65 bg-lime/30 px-[9px] py-[6px] text-[11px] text-lime-deep",
  outline:
    "rounded-[5px] border-[1.5px] border-white/20 px-[13px] py-[9px] text-[12.5px] text-paper",
};

export default function Tag({ variant = "lime", children }) {
  return (
    <span
      className={`inline-block font-mono font-medium leading-none ${VARIANTS[variant]}`}
    >
      {children}
    </span>
  );
}
