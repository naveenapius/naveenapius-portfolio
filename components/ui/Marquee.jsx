"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dark full-bleed ticker: mono text scrolling horizontally, seamless loop.
 * Content is rendered as two identical halves translated -50% so it repeats
 * without a seam. Each half is repeated enough times to always overflow the
 * viewport, so the loop never rolls into a blank gap on wide screens.
 *
 * @param {string[]} items - words/phrases to scroll.
 * @param {"slow"|"fast"} [speed="slow"] - 24s or 20s loop.
 * @param {boolean} [wide=false] - wider letter-spacing.
 */
export default function Marquee({ items, speed = "slow", wide = false }) {
  const content = items.join("  ✦  ") + "  ✦  ";
  const anim = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  const tracking = wide ? "tracking-[0.18em]" : "tracking-[0.14em]";

  const containerRef = useRef(null);
  const halfRef = useRef(null);
  const [repeat, setRepeat] = useState(1);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const half = halfRef.current;
      if (!container || !half) return;
      const perCopy = half.offsetWidth / repeat;
      if (!perCopy) return;
      // Each half must cover the viewport for the seam to stay filled.
      const needed = Math.max(1, Math.ceil(container.offsetWidth / perCopy));
      if (needed !== repeat) setRepeat(needed);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [repeat, content]);

  const half = content.repeat(repeat);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden border-y-2 border-ink bg-ink"
    >
      <div
        className={`flex w-max ${anim} py-[13px] font-mono text-[12.5px] font-semibold uppercase text-lime-light ${tracking}`}
        aria-hidden="true"
      >
        <span ref={halfRef} className="whitespace-nowrap">
          {half}
        </span>
        <span className="whitespace-nowrap">{half}</span>
      </div>
    </div>
  );
}
