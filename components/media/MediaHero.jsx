import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { SOCIAL } from "@/lib/contact";

/**
 * Media landing hero: stencil headline with a lime highlight word, intro, two
 * CTAs (collaborate + Instagram), and a 4:5 ride photo. Signature diamonds
 * bleed off the top-right over a faint ink grid — mirrors the homepage hero.
 */
export default function MediaHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      {/* faint grid texture */}
      <div className="hero-grid pointer-events-none absolute inset-0 z-0" />

      {/* signature 45° diamonds bleeding off the top-right corner */}
      <div className="absolute -right-[110px] -top-[110px] z-0 h-[380px] w-[380px] rotate-45 bg-lime-light" />
      <div className="absolute -top-[110px] right-[74px] z-0 h-[380px] w-[48px] origin-top rotate-45 bg-lime" />

      <Container className="relative z-[1] flex flex-wrap items-center gap-[clamp(28px,5vw,60px)] pb-[clamp(64px,8vw,104px)] pt-[clamp(48px,7vw,92px)]">
        <div className="min-w-[300px] flex-[1_1_460px]">
          <h1 className="animate-rise text-[clamp(38px,5.6vw,70px)] leading-[1.08] tracking-[0.01em] [animation-delay:120ms]">
            Making
            <br />
            motorcycling
            <br />
            <span className="mb-[10px] inline-block rotate-[-2.5deg] bg-lime px-[0.12em] text-ink shadow-[5px_5px_0_var(--ink)]">
              accessible
            </span>
            <br />
            one ride at a time
          </h1>

          <p className="animate-rise mt-[30px] max-w-[480px] text-[clamp(15px,1.7vw,18px)] leading-[1.55] text-text-muted [animation-delay:200ms]">
            Rides, reviews, and real-world riding tips — built for riders who
            want substance over spectacle.
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-[14px] [animation-delay:280ms]">
            <Button href="/#collaborate" variant="primary" arrow>
              Let&apos;s collaborate
            </Button>
            <Button
              href={SOCIAL.instagram.url}
              variant="secondary"
              shadow="pink"
            >
              <InstagramIcon />
              {SOCIAL.instagram.handle}
            </Button>
          </div>
        </div>

        {/* Ride photo.
            IMAGE: drop the photo at /public/media-hero.png (dramatic, high
            contrast, you clearly visible; 4:5). Swap ImagePlaceholder for
            next/image with object-cover when wiring the real asset. */}
        <div className="animate-rise relative min-w-[300px] flex-[1_1_360px] [animation-delay:340ms]">
          <div className="aspect-[4/5] overflow-hidden rounded-[8px] border-2 border-ink shadow-[9px_9px_0_var(--ink)]">
            <ImagePlaceholder
              filename="media-hero.png"
              label="Best ride photo — dramatic, high contrast (4:5)"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
