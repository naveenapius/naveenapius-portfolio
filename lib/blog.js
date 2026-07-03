/**
 * Blog helpers shared by the index and post pages.
 * The site has a single author, so author details are hardcoded here.
 */

export const AUTHOR = {
  name: "Naveena Pius",
  role: "Engineer & rider — building from inside the industry.",
  initials: "NP",
};

/** Sanity datetime -> "JUN 2026" (mono meta style). */
export function formatMonthYear(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr)
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();
}

/** readTime (minutes) -> "8 MIN READ", or "" when absent. */
export const readLabel = (minutes) => (minutes ? `${minutes} MIN READ` : "");

/**
 * Natural pixel dimensions encoded in a Sanity image asset ref
 * (…-1151x2048-webp). Lets next/image reserve the right aspect ratio
 * without distorting portrait/landscape covers. Falls back to 16:9.
 */
export function imageDims(image) {
  const ref = image?.asset?._ref || "";
  const m = ref.match(/-(\d+)x(\d+)-/);
  return m ? { width: Number(m[1]), height: Number(m[2]) } : { width: 1600, height: 900 };
}
