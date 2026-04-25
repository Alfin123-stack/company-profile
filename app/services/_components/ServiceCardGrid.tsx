"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/services";

export default function ServiceCardGrid() {
  return (
    <AnimatedSection className="pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
