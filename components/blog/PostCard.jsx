import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { urlForImage } from "@/lib/sanity/image";
import { formatMonthYear, readLabel } from "@/lib/blog";

/**
 * Blog index card. Posts with a `coverImage` show a 16:9 cropped cover and the
 * title in the body; image-less posts get a stencil title-block cover instead
 * (alternating ink / lime grounds by position), so the title isn't duplicated.
 * Card chrome (border, offset shadow, hover-to-lime) matches the site's other
 * cards for coherence.
 *
 * @param {object} post - a post from postsListQuery.
 * @param {number} index - position in the grid (drives title-block ground).
 */
export default function PostCard({ post, index = 0 }) {
  const { slug, title, excerpt, coverImage, categories, publishedAt, readTime } = post;
  const hasCover = Boolean(coverImage);
  const darkBlock = index % 2 === 0;

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex h-full flex-col overflow-hidden rounded-[8px] border-2 border-ink bg-paper no-underline shadow-[7px_7px_0_var(--ink)] transition duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_var(--lime)]"
    >
      {hasCover ? (
        <div className="relative aspect-video border-b-2 border-ink">
          <Image
            src={urlForImage(coverImage).width(760).height(428).fit("crop").url()}
            alt={title}
            fill
            sizes="(max-width: 700px) 100vw, 380px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={`relative flex aspect-video items-end overflow-hidden border-b-2 border-ink p-[clamp(22px,2.6vw,30px)] ${
            darkBlock ? "bg-ink text-paper" : "bg-lime-light text-ink"
          }`}
        >
          <div className="absolute -right-[60px] -top-[60px] h-[180px] w-[180px] rotate-45 bg-lime/20" />
          <h3 className="relative line-clamp-3 font-stencil text-[clamp(24px,3.4vw,38px)] uppercase leading-[0.95]">
            {title}
          </h3>
        </div>
      )}

      <div className="flex flex-1 flex-col p-[clamp(20px,2.4vw,28px)]">
        {categories?.length ? (
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Tag key={c}>{c.toUpperCase()}</Tag>
            ))}
          </div>
        ) : null}

        {hasCover && (
          <h3 className="mb-[10px] line-clamp-2 font-body text-[22px] font-bold leading-[1.25]">
            {title}
          </h3>
        )}

        {excerpt && (
          <p className="mb-[22px] line-clamp-3 text-[15px] leading-[1.55] text-text-muted">
            {excerpt}
          </p>
        )}

        <div className="mt-auto flex gap-4 font-mono text-[11px] font-medium tracking-[0.06em] text-mono-muted">
          {publishedAt && <span>{formatMonthYear(publishedAt)}</span>}
          {readTime ? <span>{readLabel(readTime)}</span> : null}
        </div>
      </div>
    </Link>
  );
}
