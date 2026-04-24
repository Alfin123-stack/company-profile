import HeroSection from "./_components/HeroSection";
import StatsSection from "./_components/StatsSection";
import AnnouncementsPreview from "./_components/AnnouncementsPreview";
import FeaturesGrid from "./_components/FeaturesGrid";
import CTASection from "./_components/CTASection";

// Server Component — fetch data, lalu distribusikan ke masing-masing komponen
export default async function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <AnnouncementsPreview />
      <FeaturesGrid />
      <CTASection />
    </div>
  );
}
