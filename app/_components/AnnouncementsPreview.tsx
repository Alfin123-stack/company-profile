import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnnouncementCard from "@/components/AnnouncementCard";
import { announcements } from "@/constants/announcement";

export default function AnnouncementsPreview() {
  const latestAnnouncements = announcements.slice(0, 3);

  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-3 block">
              Terbaru
            </span>
            <h2
              className="text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}>
              Pengumuman
              <br />
              <em className="font-normal text-mist">& Informasi</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-sage-600 hover:gap-4 transition-all duration-300">
            Lihat semua <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestAnnouncements.map((item, i) => (
            <AnnouncementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
