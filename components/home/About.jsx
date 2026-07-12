import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * "Built from inside the industry" — stencil heading beside a two-paragraph
 * bio, with a couple of light-lime highlighted phrases.
 */
export default function About() {
  return (
    <section id="about" className="scroll-mt-[72px] bg-paper">
      <Container>
        <Reveal className="flex flex-wrap gap-[clamp(28px,5vw,64px)] py-[var(--section-y)]">
          <div className="w-[240px] max-w-full flex-none">
            <h2 className="text-[clamp(30px,4.4vw,50px)] leading-[0.96]">
              Built from inside the industry
            </h2>
          </div>

          <div className="min-w-[300px] flex-[1_1_440px] self-center">
            <p className="mb-[22px] text-[clamp(16px,1.8vw,19px)] leading-[1.65] text-text-body">
              I work at the intersection of complex systems and human needs,
              figuring out and building exactly what&apos;s needed. By day I work on data pipelines and annotation systems that
              keep AI products running cleanly. On the side I build websites for
              businesses that need a technical partner who actually listens.
            </p>
            <p className="text-[clamp(16px,1.8vw,19px)] leading-[1.65] text-text-body">
              I&apos;m also deeply embedded in the motorsports world as a
              content creator and rider, which is how I built a live booking and leads website for{" "}
              <a
                href="https://www.enduroedge.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime-light px-[0.14em] font-bold no-underline"
              >
                Enduro Edge <span aria-hidden="true">↗</span>
              </a>
              , an off-road
              events company. I don&apos;t just build for industries, I understand and build from within them.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
