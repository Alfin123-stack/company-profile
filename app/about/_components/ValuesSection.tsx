"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { values } from "@/data/about";

export default function ValuesSection() {
  return (
    <AnimatedSection className="py-20 bg-ink text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}>
            Nilai-nilai kami
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="border-t border-white/20 pt-6">
              <div
                className="text-2xl font-bold text-sage-400 mb-2"
                style={{ fontFamily: "var(--font-display)" }}>
                0{i + 1}
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-white/40 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
