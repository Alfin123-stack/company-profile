import type { Metadata } from "next";
import ServicesHero from "./_components/ServicesHero";
import ServiceCardGrid from "./_components/ServiceCardGrid";
import AnnouncementsSection from "./_components/AnnouncementsSection";
import CalendarSection from "./_components/CalendarSection";

export const metadata: Metadata = {
  title: "Layanan – RW Connect",
  description:
    "Seluruh layanan informasi dan fitur RW Connect untuk warga lingkungan.",
};

export default async function ServicesPage() {
  return (
    <div className="pt-24 overflow-x-hidden">
      <ServicesHero />
      <ServiceCardGrid />
      <AnnouncementsSection />
      <CalendarSection />
    </div>
  );
}
