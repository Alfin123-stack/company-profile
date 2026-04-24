import Link from "next/link";
import { Stars } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Komponen: section Call to Action di bagian bawah beranda
export default function CTASection() {
  return (
    <AnimatedSection className="py-32">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}>
            Siap membuat lingkungan{" "}
            <em className="text-sage-600">lebih terhubung?</em>
          </h2>
          <p className="text-mist mb-10 leading-relaxed">
            Bergabunglah dengan ribuan warga yang sudah merasakan manfaat
            informasi yang terorganisir.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-sage-500/30 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg, #1e5c1e 0%, #2d7a2d 50%, #4d9e4d 100%)",
            }}>
            Mulai Sekarang
            <Stars className="w-5 h-5 text-yellow-400" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
