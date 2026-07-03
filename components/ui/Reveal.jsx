"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fade + rise-in on scroll (DESIGN.md motion). Elements start 24px low and
 * transparent, then settle when they enter the viewport. A 1.6s safety timer
 * force-reveals everything so static captures/exports never get stuck hidden.
 *
 * @param {React.ElementType} [as="div"] - element/tag to render.
 * @param {string} [className]
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    const safety = setTimeout(() => setShown(true), 1600); // never stay hidden

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
