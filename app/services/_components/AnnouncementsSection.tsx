"use client";
import AnimatedSection from "@/components/AnimatedSection";
import AnnouncementCard from "@/components/AnnouncementCard";
import { announcements } from "@/data/announcement";

export default function AnnouncementsSection() {
  return (
    <AnimatedSection className="py-20 bg-white border-y border-ink/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-3 block">
            Data Real-time
          </span>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            Semua Pengumuman &{" "}
            <em className="font-normal text-mist">Informasi</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map((item, i) => (
            <AnnouncementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
