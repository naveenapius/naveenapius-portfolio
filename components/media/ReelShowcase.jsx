import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ReelGrid from "@/components/media/ReelGrid";

export default function ReelShowcase() {
  return (
    <section id="reels" className="scroll-mt-[72px] bg-paper">
      <Container className="pb-[var(--section-y)]">
        <Reveal className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="text-h2 leading-[0.95]">Reel showcase</h2>
        </Reveal>

        <ReelGrid />
      </Container>
    </section>
  );
}
