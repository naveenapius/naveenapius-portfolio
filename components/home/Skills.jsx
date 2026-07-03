import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";

/** Skill groups, grouped by where they live (per the design). */
const GROUPS = [
  {
    label: "ENGINEERING",
    items: ["Python", "GCP", "AWS", "Prefect", "REST APIs", "Codefresh", "Linux", "GitHub"],
  },
  {
    label: "WEB",
    items: ["Next.js", "React", "Tailwind CSS", "Node.js", "Vercel", "Netlify"],
  },
  {
    label: "DATA & INTEGRATIONS",
    items: ["Sanity", "NocoDB", "Upstash Redis", "Razorpay", "Umami"],
  },
];

/** Dark "spec board" of skills, grouped into labelled columns of chips. */
export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-[72px] bg-ink text-paper">
      <Container>
        <Reveal className="py-[var(--section-y)]">
          <div className="mb-[clamp(36px,5vw,56px)] flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-h2 leading-[0.95]">Skills</h2>
            <span className="max-w-[300px] text-right font-mono text-[11px] font-medium leading-[1.6] tracking-[0.08em] text-mono-muted">
              The tools I reach for, grouped by where they live.
            </span>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[clamp(28px,3.4vw,48px)]">
            {GROUPS.map((group) => (
              <div key={group.label}>
                <div className="mb-4 border-b border-white/[0.14] pb-[10px] font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-light">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-[9px]">
                  {group.items.map((item) => (
                    <Tag key={item} variant="outline">
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
