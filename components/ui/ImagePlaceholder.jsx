/**
 * Placeholder standing in for a user-supplied image.
 *
 * TO ADD THE REAL IMAGE:
 *   1. Drop the PNG in `/public` using the exact `filename` shown below.
 *   2. Replace this component at the call site with next/image, e.g.
 *        <Image src={`/${filename}`} alt="…" fill className="object-cover" />
 *
 * It fills its parent, so the parent controls size / aspect-ratio / borders.
 *
 * @param {string} filename - expected file in /public (e.g. "hero-portrait.png").
 * @param {string} label - short description of what the image is.
 */
export default function ImagePlaceholder({ filename, label, className = "" }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-1.5 border-2 border-dashed border-ink/25 bg-ink/[0.03] p-4 text-center ${className}`}
    >
      <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/50">
        {label}
      </span>
      <code className="font-mono text-[10.5px] text-ink/40">
        /public/{filename}
      </code>
    </div>
  );
}
