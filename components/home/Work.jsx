import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WorkCard from "@/components/home/WorkCard";

/**
 * Featured projects.
 *
 * NOTE: content is static for now. The "Blog Post" links are placeholders (#);
 * they'll point at real posts once the blog is wired up. Images are placeholders
 * until their PNGs land in /public (see each `image.filename`).
 */
const PROJECTS = [
  {
    title: "Enduro Edge",
    description:
      "Lead generation and booking platform for an off-road events company.",
    image: { filename: "work-enduro-edge.png", label: "Enduro Edge screenshot (16:9)" },
    tags: ["Next.js", "Sanity", "Razorpay", "NocoDB", "Upstash", "Vercel"],
    links: [
      { label: "Live Site", href: "#" },
      { label: "Blog Post", href: "#" },
      { label: "Case Study", soon: true },
    ],
  },
  {
    title: "naveenapius.com",
    description:
      "Personal portfolio and media presence — designed and built from scratch.",
    image: { filename: "work-portfolio.png", label: "naveenapius.com screenshot (16:9)" },
    tags: ["Next.js", "Sanity", "Tailwind", "Netlify"],
    links: [
      { label: "Live Site", href: "/" },
      { label: "Blog Post", soon: true },
      { label: "Case Study", soon: true },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-[72px] bg-paper">
      <Container className="py-[var(--section-y)]">
        <Reveal className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="text-h2 leading-[0.95]">My Work</h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(26px,3.4vw,44px)]">
          {PROJECTS.map((project) => (
            <Reveal key={project.title}>
              <WorkCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
