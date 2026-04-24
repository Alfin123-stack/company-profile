import Link from "next/link";
import { Building2 } from "lucide-react";

// Komponen: menampilkan hero utama halaman beranda
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #2d7a2d 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #E8A020 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-sage-300/40 bg-white/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-sage-600">
              Platform Digital Warga
            </span>
          </div>

          <h1
            className="text-6xl lg:text-8xl font-bold leading-[0.95] mb-8 text-ink"
            style={{ fontFamily: "var(--font-display)" }}>
            Satu Tempat,{" "}
            <em className="text-sage-600 not-italic block">Semua Info</em>
            <span className="text-5xl lg:text-6xl font-normal text-mist">
              Lingkungan Anda.
            </span>
          </h1>

          <p
            className="text-lg text-mist max-w-2xl mb-12 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}>
            Tidak ada lagi informasi yang tenggelam di chat group. RW Connect
            menghadirkan pengumuman, kalender kegiatan, dan aspirasi warga dalam
            satu platform yang rapi dan mudah diakses.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-sage-500/25 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #2d7a2d 0%, #4d9e4d 100%)",
              }}>
              Jelajahi Layanan
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-ink/20 font-medium hover:bg-ink hover:text-white transition-all duration-300">
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Floating icon */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative w-48 h-48 flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full border border-sage-300/30" />
            <div className="absolute inset-4 rounded-full border border-sage-300/20" />
            <Building2 className="w-20 h-20 text-sage-600" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-ink/40" />
      </div>
    </section>
  );
}
