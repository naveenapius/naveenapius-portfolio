/**
 * Dark full-bleed ticker: mono text scrolling horizontally, seamless loop.
 * Content is rendered twice and translated -50% so it repeats without a seam.
 *
 * @param {string[]} items - words/phrases to scroll.
 * @param {"slow"|"fast"} [speed="slow"] - 24s or 20s loop.
 * @param {boolean} [wide=false] - wider letter-spacing.
 */
export default function Marquee({ items, speed = "slow", wide = false }) {
  const content = items.join("  ✦  ") + "  ✦  ";
  const anim = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  const tracking = wide ? "tracking-[0.18em]" : "tracking-[0.14em]";

  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink">
      <div
        className={`flex w-max ${anim} py-[13px] font-mono text-[12.5px] font-semibold uppercase text-lime-light ${tracking}`}
        aria-hidden="true"
      >
        <span className="whitespace-nowrap">{content}</span>
        <span className="whitespace-nowrap">{content}</span>
      </div>
    </div>
  );
}
