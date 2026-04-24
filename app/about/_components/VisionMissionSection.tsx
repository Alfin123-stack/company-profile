"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, Target, Check } from "lucide-react";
import { missions } from "@/data/about";

export default function VisionMissionSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            Visi & Misi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Visi */}
          <div
            className="p-10 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #1e5c1e 0%, #2d7a2d 100%)",
            }}>
            <Sparkles className="w-10 h-10 mb-6 text-white" />
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}>
              Visi
            </h3>
            <p className="text-white/70 leading-relaxed">
              Menjadi platform informasi lingkungan terpercaya yang mewujudkan
              komunitas yang terhubung, transparan, dan berdaya melalui
              teknologi digital.
            </p>
          </div>

          {/* Misi */}
          <div className="p-10 rounded-3xl border border-ink/15 bg-white">
            <Target className="w-10 h-10 mb-6 text-sage-600" />
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}>
              Misi
            </h3>
            <ul className="space-y-3 text-mist text-sm leading-relaxed">
              {missions.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
