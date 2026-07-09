import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * Creator stats on ink: big stencil numbers in lime, mono caption under, each
 * with a lime left-rule separator. Two rows split by a fading lime hairline.
 */
const ROW_ONE = [
  { value: "100K+", label: "Avg. reel views" },
  { value: "14.4K", label: "Followers" },
  { value: "2+ Yrs", label: "Creating" },
];

const ROW_TWO = [
  { value: "32,000+", label: "km total on the dash" },
  { value: "6,000+", label: "km Ladakh ride" },
  { value: "50+", label: "Rides completed" },
];

function StatRow({ stats }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(20px,2.6vw,40px)]">
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="border-l-2 border-lime/40 pl-[clamp(16px,1.8vw,26px)]"
        >
          <div className="font-stencil text-[clamp(40px,4.4vw,60px)] leading-[0.92] text-lime">
            {value}
          </div>
          <div className="mt-[14px] font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-mono-muted">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="scroll-mt-[72px] bg-ink text-paper">
      <Container className="py-[var(--section-y)]">
        <Reveal>
          <StatRow stats={ROW_ONE} />
          <div className="my-[clamp(40px,5vw,64px)] h-px bg-gradient-to-r from-lime to-lime/10" />
          <StatRow stats={ROW_TWO} />
        </Reveal>
      </Container>
    </section>
  );
}
