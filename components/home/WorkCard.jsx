import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Tag from "@/components/ui/Tag";

/**
 * Project card: 16:9 cover, title, blurb, tag row, and a footer of links.
 * A link with `soon: true` renders as a disabled item with a SOON badge.
 * Hover lifts the card up-left and swaps its shadow to lime (DESIGN.md §5).
 *
 * @param {{ title, description, image: {filename, label}, tags: string[],
 *           links: {label, href?, soon?}[] }} project
 */
export default function WorkCard({ project }) {
  const { title, description, image, tags, links } = project;

  return (
    <article className="flex flex-col overflow-hidden rounded-[8px] border-2 border-ink bg-paper shadow-[7px_7px_0_var(--ink)] transition duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_var(--lime)]">
      <div className="aspect-video border-b-2 border-ink">
        <ImagePlaceholder filename={image.filename} label={image.label} />
      </div>

      <div className="flex flex-1 flex-col p-[clamp(20px,2.4vw,28px)]">
        <h3 className="mb-2 font-body text-[22px] font-bold leading-[1.15]">
          {title}
        </h3>
        <p className="mb-[18px] text-[15.5px] leading-[1.55] text-text-muted">
          {description}
        </p>

        <div className="mb-[22px] flex flex-wrap gap-[7px]">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-[18px] border-t border-ink/10 pt-[18px] font-mono text-[12px] font-semibold tracking-[0.04em]">
          {links.map((link) =>
            link.soon ? (
              <span
                key={link.label}
                className="inline-flex items-center gap-[6px] pb-1 text-ink/40"
              >
                {link.label}
                <span className="rounded-[20px] border border-ink/25 px-[5px] py-[2px] text-[9px]">
                  SOON
                </span>
              </span>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-[6px] border-b-2 border-lime pb-1 no-underline"
              >
                {link.label} <span>→</span>
              </Link>
            )
          )}
        </div>
      </div>
    </article>
  );
}
