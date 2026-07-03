"use client";

import { useEffect, useRef } from "react";

/**
 * Fade + rise-in on scroll (DESIGN.md motion), as pure progressive enhancement.
 *
 * Content renders VISIBLE by default. On mount we only touch elements that
 * start below the fold: hide them (`reveal-init`) and reveal (`reveal-in`) once
 * they scroll into view. Anything already on-screen is left untouched (no
 * flash), and if JS never runs the content is simply visible. A safety timer
 * guarantees nothing stays hidden.
 *
 * @param {React.ElementType} [as="div"] - element/tag to render.
 * @param {string} [className]
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // Only enhance elements that start below the fold — leave visible ones be.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-init");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    const safety = setTimeout(() => el.classList.add("reveal-in"), 1200);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
