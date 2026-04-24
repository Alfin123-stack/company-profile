"use client"
import AnimatedSection from "@/components/AnimatedSection";
import CalendarEventItem from "./CalendarEventItem";
import { calendarEvents } from "@/data/services";

export default function CalendarSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-3 block">
            Kalender
          </span>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            Kegiatan Bulan Ini
          </h2>
        </div>
        <div className="space-y-3 max-w-3xl">
          {calendarEvents.map((ev, i) => (
            <CalendarEventItem key={i} {...ev} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
