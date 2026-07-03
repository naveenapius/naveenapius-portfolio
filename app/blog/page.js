import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import HeroDecor from "@/components/blog/HeroDecor";
import PostCard from "@/components/blog/PostCard";
import { client } from "@/lib/sanity/client";
import { postsListQuery } from "@/lib/sanity/queries";

// ISR: new/updated posts appear without a redeploy.
export const revalidate = 60;

export const metadata = {
  title: "Naveena Pius — Writing",
  description: "Thoughts on building, riding, and everything in between.",
};

export default async function BlogPage() {
  const posts = await client.fetch(postsListQuery);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-paper">
          <HeroDecor />
          <Container className="relative z-[1] pb-[clamp(40px,5vw,64px)] pt-[clamp(56px,8vw,104px)]">
            <h1 className="animate-rise text-hero-xl leading-[0.86] tracking-[0.01em] [animation-delay:120ms]">
              Writing
            </h1>
            <p className="animate-rise mt-[26px] max-w-[520px] text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-text-muted [animation-delay:200ms]">
              Thoughts on building, riding, and everything in between.
            </p>
          </Container>
        </section>

        <section className="bg-paper">
          <Container className="pb-[var(--section-y)] pt-[clamp(32px,4vw,52px)]">
            {posts.length === 0 ? (
              <p className="font-mono text-[13px] uppercase tracking-[0.1em] text-mono-muted">
                No posts yet — check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] gap-[clamp(26px,3.2vw,40px)]">
                {posts.map((post, i) => (
                  <Reveal key={post._id} className="h-full">
                    <PostCard post={post} index={i} />
                  </Reveal>
                ))}
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer
        variant="dark"
        role="ENGINEER // RIDER // INDIA"
        tagline={{ label: "Back to home →", href: "/" }}
      />
    </>
  );
}
