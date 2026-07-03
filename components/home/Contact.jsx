import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactCard from "@/components/home/ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-[72px] bg-paper">
      <Container className="py-[var(--section-y)]">
        <Reveal className="mb-[clamp(34px,4.5vw,52px)] max-w-[640px]">
          <h2 className="mb-[18px] text-h2 leading-[0.95]">Let&apos;s talk</h2>
          <p className="text-[clamp(16px,1.8vw,19px)] leading-[1.6] text-text-body">
            I&apos;m always open to good conversations. Find the right door
            below.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(24px,3vw,40px)]">
          <ContactCard
            accent="lime"
            label="Work with me"
            description="Open to freelance projects and full-time roles."
            links={[
              { label: "Email", href: "mailto:hello@naveenapius.com" },
              { label: "LinkedIn", href: "#" },
              { label: "GitHub", href: "#" },
            ]}
          />
          <ContactCard
            accent="pink"
            label="Collaborate with me"
            description="Open to brand collaborations and content partnerships."
            links={[
              { label: "Email", href: "mailto:media@naveenapius.com" },
              { label: "Instagram", href: "#" },
              { label: "Learn more", href: "/media", external: true },
            ]}
          />
        </Reveal>
      </Container>
    </section>
  );
}
