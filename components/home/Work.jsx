import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/blog/PostCard";
import { client } from "@/lib/sanity/client";
import { latestPostsQuery } from "@/lib/sanity/queries";

// ISR: new/updated posts appear here without a redeploy.
export const revalidate = 60;

export default async function Work() {
  const posts = await client.fetch(latestPostsQuery);

  return (
    <section id="work" className="scroll-mt-[72px] bg-paper">
      <Container className="py-[var(--section-y)]">
        <Reveal className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="text-h2 leading-[0.95]">My Work</h2>
        </Reveal>

        {posts.length === 0 ? (
          <p className="font-mono text-[13px] uppercase tracking-[0.1em] text-mono-muted">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(26px,3.4vw,44px)]">
            {posts.map((post, i) => (
              <Reveal key={post._id}>
                <PostCard post={post} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
