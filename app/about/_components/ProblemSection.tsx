"use cl"
import AnimatedSection from "@/components/AnimatedSection";
import ProblemCard from "./ProblemCard";
import { problems } from "@/data/about";

export default function ProblemSection() {
  return (
    <AnimatedSection className="py-20 bg-white border-y border-ink/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}>
              Masalah yang <em className="text-sage-600">kami selesaikan</em>
            </h2>
            <div className="space-y-6 text-mist leading-relaxed">
              <p>
                Di banyak lingkungan perumahan, komunikasi antar warga masih
                bergantung pada grup WhatsApp yang berantakan. Pengumuman
                penting tenggelam di antara foto dan obrolan sehari-hari. Warga
                tidak mendapat informasi yang sama.
              </p>
              <p>
                Ini bukan hanya masalah komunikasi — ini masalah{" "}
                <strong className="text-ink">pengalaman pengguna</strong> dalam
                menerima informasi. Setiap warga berhak mendapat akses yang
                setara, tepat waktu, dan terstruktur terhadap informasi
                lingkungannya.
              </p>
              <p>
                RW Connect hadir sebagai solusi digital yang berpihak pada
                warga: sederhana, transparan, dan benar-benar bermanfaat dalam
                kehidupan sehari-hari.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <ProblemCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
