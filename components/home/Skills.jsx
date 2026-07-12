import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";

/** Skill groups, mirrors the resume's Skills section. AI/ML leads so recruiters see it first. */
const GROUPS = [
  {
    label: "DATA & CLOUD",
    items: ["Python", "Pandas", "NumPy", "JavaScript", "REST APIs", "Webhooks", "ETL", "AWS", "GCP", "Docker"],
  },
  {
    label: "SYSTEMS & OS",
    items: ["Linux/Unix", "Arch", "Debian", "Fedora", "Kali", "OS Agnostic", "Virtual Machines"],
  },
  {
    label: "WEB & FULL-STACK",
    items: ["Next.js", "React", "Tailwind CSS", "Sanity", "NocoDB", "Razorpay", "Umami", "Upstash Redis", "ntfy", "Netlify", "Cloudflare Workers", "Backblaze B2"],
  },
  {
    label: "CI/CD & OBSERVABILITY",
    items: ["GitHub", "Codefresh", "Datadog", "Umami", "Jira"],
  },
  {
    label: "AI TOOLS & LLMS",
    items: ["Claude", "Gemini", "TranslateLLM", "RT-DETR", "Ollama", "Cursor"],
  },
  {
    label: "CUSTOMER & DELIVERY",
    items: ["Technical scoping", "Solution design", "Stakeholder management"],
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
              Stuff I picked over many years of fiddling, breaking and learning
            </span>
          </div>

          <div className="grid grid-cols-1 gap-[clamp(28px,3.4vw,48px)] sm:grid-cols-3">
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
