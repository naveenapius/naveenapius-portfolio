import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

/**
 * "Substance over spectacle" — a wide 16:11 ride frame (lime offset shadow)
 * beside a short positioning statement.
 */
export default function MediaFeature() {
  return (
    <section className="bg-paper">
      <Container>
        <Reveal className="flex flex-wrap items-stretch gap-[clamp(28px,5vw,60px)] py-[var(--section-y)]">
          <div className="relative min-w-[300px] flex-[1_1_420px]">
            <div className="aspect-[16/11] h-full w-full min-h-[clamp(300px,34vw,440px)] overflow-hidden rounded-[8px] border-2 border-ink shadow-[9px_9px_0_var(--lime)]">
              <ImagePlaceholder
                filename="media-feature.png"
                label="Ride / trail photography — wide, atmospheric (16:11)"
              />
            </div>
          </div>

          <div className="flex min-w-[280px] flex-[1_1_360px] flex-col justify-center">
            <h2 className="mb-[22px] text-[clamp(30px,4.4vw,52px)] leading-[0.96]">
              Substance over spectacle
            </h2>
            <p className="text-[clamp(16px,1.8vw,19px)] leading-[1.65] text-text-body">
              Ride vlogs, short-form reels, and real-world riding tips — built
              for riders who want substance over spectacle. The photography
              speaks for itself; what a brand gets is honest, well-produced
              content that real riders actually watch and trust.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
