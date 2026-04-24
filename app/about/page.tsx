import type { Metadata } from "next";
import AboutHero from "./_components/AboutHero";
import ProblemSection from "./_components/ProblemSection";
import VisionMissionSection from "./_components/VisionMissionSection";
import ValuesSection from "./_components/ValuesSection";

export const metadata: Metadata = {
  title: "Tentang Kami – RW Connect",
  description:
    "Kenali lebih dekat platform informasi lingkungan RW Connect dan visi kami untuk komunitas yang lebih terhubung.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 overflow-x-hidden">
      <AboutHero />
      <ProblemSection />
      <VisionMissionSection />
      <ValuesSection />
    </div>
  );
}
