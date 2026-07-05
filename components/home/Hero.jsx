import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * Landing hero: stencil headline with a lime highlight word, intro, two CTAs,
 * and a cut-out portrait. Signature diamonds bleed off the top-right corner
 * over a faint ink grid.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      {/* faint grid texture */}
      <div className="hero-grid pointer-events-none absolute inset-0 z-0" />

      {/* signature 45° diamonds bleeding off the top-right corner */}
      <div className="absolute -right-[110px] -top-[110px] z-0 h-[380px] w-[380px] rotate-45 bg-lime-light" />
      <div className="absolute -top-[110px] right-[74px] z-0 h-[380px] w-[48px] origin-top rotate-45 bg-lime" />

      <Container className="relative z-[1] flex flex-wrap items-center gap-[clamp(28px,5vw,60px)] pb-[clamp(64px,8vw,104px)] pt-[clamp(48px,7vw,92px)]">
        <div className="min-w-[300px] flex-[1_1_440px]">
          <h1 className="animate-rise text-hero tracking-[0.01em] [animation-delay:120ms]">
            I build
            <br />
            what you
            <br />
            actually{" "}
            <span className="inline-block rotate-[-2.5deg] bg-lime px-[0.12em] text-ink shadow-[5px_5px_0_var(--ink)]">
              need
            </span>
          </h1>

          <p className="animate-rise mt-[26px] max-w-[470px] text-[clamp(15px,1.7vw,18px)] leading-[1.55] text-text-muted [animation-delay:200ms]">
            I&apos;m a software engineer building the data pipelines and
            annotation systems that keep AI products running cleanly. Web
            development is my side gig — same rigor, smaller canvas.
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-[14px] [animation-delay:280ms]">
            <Button href="#contact" variant="primary" arrow>
              Reach out to me
            </Button>
            <Button href="#contact" variant="secondary">
              Collaborate
            </Button>
          </div>
        </div>

        {/* Portrait cut-out: transparent PNG with a paper edge + drop shadow. */}
        <div className="animate-rise relative min-h-[clamp(420px,44vw,560px)] min-w-[300px] flex-[1_1_340px] [animation-delay:340ms]">
          <div className="absolute bottom-0 left-1/2 h-[clamp(390px,50vw,560px)] w-[clamp(300px,38vw,440px)] -translate-x-1/2">
            <Image
              src="/hero-portrait.png"
              alt="Portrait of Naveena Pius"
              fill
              priority
              className="scale-[1.56] object-contain object-center [filter:drop-shadow(3px_0_0_#fff)_drop-shadow(-3px_0_0_#fff)_drop-shadow(0_-3px_0_#fff)_drop-shadow(7px_12px_13px_rgba(22,23,16,0.32))]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
