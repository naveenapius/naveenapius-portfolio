import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import InstagramIcon from "@/components/ui/InstagramIcon";

/**
 * Media landing hero: stencil headline with a lime highlight word, intro, two
 * CTAs (collaborate + highlights), and a 4:5 ride photo. Signature diamonds
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
            Gathering
            <br />
            <span className="mb-[10px] inline-block rotate-[-2.5deg] bg-lime px-[0.12em] text-ink shadow-[5px_5px_0_var(--ink)]">
              memories
            </span>
            <br />
            one ride at a time
          </h1>

          <p className="animate-rise mt-[30px] max-w-[480px] text-[clamp(15px,1.7vw,18px)] leading-[1.55] text-text-muted [animation-delay:200ms]">
          I'm a 23 year old rider based in Kochi. On the weekdays I peer over code, by weekends I'm off on my next adventure with my bike, Toothless.
          <br></br>
          My journeys have taken me through all kinds of terrain, from the coasts of South India, the twisties of the Western Ghats, the waterfalls of Maharashtra,
          and the mountains of the Himalayas. No adventure feels too big, with Toothless by my side.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-[14px] [animation-delay:280ms]">
            <Button href="#collab" variant="primary" arrow>
              Let&apos;s collaborate
            </Button>
            <Button href="#reels" variant="secondary" shadow="pink">
              <InstagramIcon />
              Highlights
            </Button>
          </div>
        </div>

        {/* Ride photo */}
        <div className="animate-rise relative min-w-[300px] flex-[1_1_360px] [animation-delay:340ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border-2 border-ink shadow-[9px_9px_0_var(--ink)]">
            <Image
              src="/media-hero2.png"
              alt="Naveena riding"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
