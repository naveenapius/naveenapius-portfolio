import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Work from "@/components/home/Work";
import Contact from "@/components/home/Contact";
import Marquee from "@/components/ui/Marquee";

const TECH = [
  "NEXT.JS", "REACT", "TAILWIND", "NODE", "PYTHON",
  "GCP", "AWS", "SANITY", "PREFECT",
];

const APPROACH = ["SCOPE", "ARCHITECT", "SHIP", "LISTEN", "BUILD"];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee items={TECH} />
        <About />
        <Skills />
        <Work />
        <Marquee items={APPROACH} speed="fast" wide />
        <Contact />
      </main>
      <Footer
        role="ENGINEER // INDIA"
        tagline="Builder & rider — building from inside the industry."
      />
    </>
  );
}
