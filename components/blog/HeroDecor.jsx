/**
 * Signature hero backdrop shared by the blog index and post pages: a faint ink
 * grid plus a lime diamond bleeding off the top-right corner. Decorative only.
 *
 * @param {string} [gridClass] - positioning for the grid (index covers the whole
 *   hero; the post page limits it to the top band).
 */
export default function HeroDecor({ gridClass = "inset-0" }) {
  return (
    <>
      <div className={`hero-grid pointer-events-none absolute z-0 ${gridClass}`} />
      <div className="absolute -right-[110px] -top-[110px] z-0 h-[340px] w-[340px] rotate-45 bg-lime-light" />
    </>
  );
}
