import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import HeroDecor from "@/components/blog/HeroDecor";
import ReadingProgress from "@/components/blog/ReadingProgress";
import PortableTextBody from "@/components/blog/PortableTextBody";
import { client } from "@/lib/sanity/client";
import { postBySlugQuery, postSlugsQuery, postsListQuery } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { AUTHOR, formatMonthYear, imageDims, readLabel } from "@/lib/blog";

// ISR: pre-build known slugs, render unknown ones on demand, refresh over time.
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });
  if (!post) return {};

  const description = post.excerpt || post.subtitle || undefined;
  return {
    title: `${post.title} — Naveena Pius`,
    description,
    openGraph: {
      type: "article",
      title: post.title,
      description,
      images: post.coverImage
        ? [urlForImage(post.coverImage).width(1200).height(630).fit("crop").url()]
        : [],
    },
  };
}

/** Dark prev/next card for the "Keep reading" band. */
function NeighborCard({ post, dir }) {
  const isNext = dir === "next";
  const meta = [post.categories?.[0]?.toUpperCase(), readLabel(post.readTime)]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`flex flex-col gap-3 rounded-[8px] border-2 border-white/15 bg-ink-surface p-[clamp(22px,2.6vw,30px)] no-underline transition duration-200 hover:-translate-y-[2px] hover:border-lime ${
        isNext ? "items-end text-right" : ""
      }`}
    >
      <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-mono-muted">
        {isNext ? "Next →" : "← Previous"}
      </span>
      <span className="font-body text-[19px] font-bold leading-[1.3] text-paper">
        {post.title}
      </span>
      {meta && (
        <span className="font-mono text-[11px] font-medium tracking-[0.06em] text-mono-muted">
          {meta}
        </span>
      )}
    </Link>
  );
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const [post, all] = await Promise.all([
    client.fetch(postBySlugQuery, { slug }),
    client.fetch(postsListQuery),
  ]);

  if (!post) notFound();

  const idx = all.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null; // newer
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null; // older
  const coverDims = post.coverImage ? imageDims(post.coverImage) : null;

  return (
    <>
      <ReadingProgress />
      <Header />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-paper">
          <HeroDecor gridClass="inset-x-0 top-0 h-[520px]" />

          <div className="relative z-[1] mx-auto max-w-[760px] px-[clamp(20px,5vw,32px)] pb-[clamp(56px,7vw,88px)] pt-[clamp(26px,4vw,44px)]">
            <Link
              href="/blog"
              className="mb-[clamp(26px,3.5vw,40px)] inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted no-underline"
            >
              <span>←</span> All Writing
            </Link>

            <Reveal as="article">
              {post.categories?.length ? (
                <div className="mb-5 flex flex-wrap gap-2">
                  {post.categories.map((c) => (
                    <Tag key={c}>{c.toUpperCase()}</Tag>
                  ))}
                </div>
              ) : null}

              <h1 className="post-title mb-[22px] text-article-h1">{post.title}</h1>

              <div className="mb-[clamp(28px,3.5vw,38px)] flex items-center gap-3 font-mono text-[12px] font-medium tracking-[0.06em] text-mono-muted">
                {post.publishedAt && <span>{formatMonthYear(post.publishedAt)}</span>}
                {post.readTime ? (
                  <>
                    <span className="h-[5px] w-[5px] rounded-full bg-lime" />
                    <span>{readLabel(post.readTime)}</span>
                  </>
                ) : null}
              </div>

              {post.coverImage && (
                <div className="mb-[clamp(34px,4.2vw,48px)] overflow-hidden rounded-[8px] border-2 border-ink shadow-[7px_7px_0_var(--ink)]">
                  <Image
                    src={urlForImage(post.coverImage).width(1520).url()}
                    alt={post.title}
                    width={coverDims.width}
                    height={coverDims.height}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              )}

              {post.subtitle && (
                <p className="mb-[26px] text-lede leading-[1.55] text-ink">
                  {post.subtitle}
                </p>
              )}

              <PortableTextBody value={post.body} />

              {/* Author — single-author site, so details come from lib/blog. */}
              <div className="mt-[clamp(40px,5vw,56px)] flex items-center gap-4 border-t-2 border-ink pt-[26px]">
                <div className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[8px] border-2 border-ink bg-lime font-mono text-[15px] font-bold text-ink">
                  {AUTHOR.initials}
                </div>
                <div>
                  <div className="font-body text-[15px] font-bold">{AUTHOR.name}</div>
                  <div className="font-mono text-[11.5px] font-medium leading-[1.5] tracking-[0.04em] text-lime-text">
                    {AUTHOR.role}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {(prev || next) && (
          <section className="bg-ink text-paper">
            <Container className="py-[clamp(48px,6vw,80px)]">
              <div className="mb-[clamp(24px,3vw,34px)] font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-light">
                Keep reading
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-[clamp(20px,2.6vw,32px)]">
                {prev && <NeighborCard post={prev} dir="prev" />}
                {next && <NeighborCard post={next} dir="next" />}
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer
        variant="dark"
        role="ENGINEER // RIDER // INDIA"
        tagline={{ label: "Back to writing →", href: "/blog" }}
      />
    </>
  );
}
