import Link from "next/link";
import { NotebookPen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogCTA() {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1e5c1e 0%, #2d7a2d 60%, #4d9e4d 100%)",
          }}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10">
            <NotebookPen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}>
              Punya cerita atau informasi?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Kirimkan tulisan atau informasi Anda untuk dipublikasikan di blog
              RW Connect dan dibaca seluruh warga.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-sage-700 font-medium hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Kirim Tulisan <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
