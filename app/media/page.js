import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Marquee from "@/components/ui/Marquee";
import MediaHero from "@/components/media/MediaHero";
import Stats from "@/components/media/Stats";
import MediaFeature from "@/components/media/MediaFeature";
import ReelShowcase from "@/components/media/ReelShowcase";
import CollabCta from "@/components/media/CollabCta";

const RIDE_THEMES = [
  "RIDE VLOGS",
  "GEAR REVIEWS",
  "RIDING TIPS",
  "TRAIL & TOUR",
  "LADAKH",
  "OFF-ROAD",
];

export const metadata = {
  title: "Naveena Pius — Media & Creator",
  description:
    "Rides, reviews, and real-world riding tips — making motorcycling accessible one ride at a time.",
};

export default function MediaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MediaHero />
        <Marquee items={RIDE_THEMES} />
        <Stats />
        <MediaFeature />
        <ReelShowcase />
        <CollabCta />
      </main>
      <Footer
        variant="light"
        role="CREATOR // RIDER // INDIA"
        tagline={{ label: "Also an engineer →", href: "/" }}
      />
    </>
  );
}
