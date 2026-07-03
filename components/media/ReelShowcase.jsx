import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ReelCard from "@/components/media/ReelCard";
import { SOCIAL } from "@/lib/contact";

const IG = SOCIAL.instagram.url;

const REELS = [
  {
    title: "6,000 km to Ladakh, solo",
    href: IG,
    image: { filename: "reel-ladakh.png", label: "Reel — highest views (9:16)" },
  },
  {
    title: "Beginner gear, the honest take",
    href: IG,
    image: { filename: "reel-gear.png", label: "Reel — gear review (9:16)" },
  },
  {
    title: "How to corner with confidence",
    href: IG,
    image: { filename: "reel-corner.png", label: "Reel — riding tip (9:16)" },
  },
];

export default function ReelShowcase() {
  return (
    <section id="reels" className="scroll-mt-[72px] bg-paper">
      <Container className="pb-[var(--section-y)]">
        <Reveal className="mb-[clamp(36px,5vw,56px)]">
          <h2 className="text-h2 leading-[0.95]">Reel showcase</h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(26px,3.4vw,44px)]">
          {REELS.map((reel) => (
            <Reveal key={reel.title}>
              <ReelCard reel={reel} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
