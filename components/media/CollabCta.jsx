import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { EMAIL, SOCIAL, mailto } from "@/lib/contact";

/**
 * Closing collaboration CTA on ink: big stencil "Let's ride together", a line
 * of copy, and two CTAs (email + Instagram). A faint lime diamond bleeds off
 * the bottom-left corner. Narrower centered column than the standard container.
 */
export default function CollabCta() {
  return (
    <section
      id="collab"
      className="relative scroll-mt-[72px] overflow-hidden bg-ink text-paper"
    >
      <div className="absolute -bottom-[130px] -left-[110px] z-0 h-[360px] w-[360px] rotate-45 bg-lime opacity-[0.16]" />

      <Reveal className="relative z-[1] mx-auto max-w-[760px] px-[var(--gutter)] py-[clamp(80px,11vw,150px)] text-center">
        <h2 className="text-[clamp(40px,7vw,84px)] leading-[0.92]">
          Let&apos;s ride
          <br />
          together
        </h2>
        <p className="mx-auto mt-7 max-w-[480px] text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-paper/75">
          Open to brand collaborations and partnerships. Reach out and
          let&apos;s talk.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-[14px]">
          <Button href={mailto(EMAIL.media)} variant="lime" arrow>
            {EMAIL.media}
          </Button>
          <Button
            href={SOCIAL.instagram.url}
            variant="secondaryLight"
            shadow="pink"
          >
            <InstagramIcon />
            {SOCIAL.instagram.handle}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
