import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

/**
 * Reel showcase card: 9:16 cover, title, and a "View on Instagram" out-link.
 * Hover lifts up-left and swaps the shadow to lime (site card behavior).
 *
 * @param {{ title: string, href: string, image: {filename: string, label: string} }} reel
 */
export default function ReelCard({ reel }) {
  const { title, href, image } = reel;

  return (
    <article className="flex flex-col overflow-hidden rounded-[8px] border-2 border-ink bg-paper shadow-[7px_7px_0_var(--ink)] transition duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_var(--lime)]">
      <div className="aspect-[9/16] border-b-2 border-ink">
        <ImagePlaceholder filename={image.filename} label={image.label} />
      </div>

      <div className="flex flex-1 flex-col p-[clamp(18px,2.2vw,24px)]">
        <h3 className="mb-4 font-body text-[19px] font-bold leading-[1.2]">
          {title}
        </h3>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold tracking-[0.06em] no-underline"
        >
          <span className="border-b-2 border-lime pb-1">View on Instagram</span>
          <span className="text-lime-text">↗</span>
        </Link>
      </div>
    </article>
  );
}
