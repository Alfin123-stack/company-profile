import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #2d7a2d 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #E8A020 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="text-center relative z-10 px-6">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500" />
        </div>

        <h1
          className="text-6xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}>
          404
        </h1>

        <h2 className="text-2xl mb-4 text-mist">Halaman tidak ditemukan</h2>

        <p className="text-mist mb-8 max-w-md mx-auto">
          Sepertinya halaman yang kamu cari tidak tersedia atau sudah
          dipindahkan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-sage-500/25"
          style={{
            background: "linear-gradient(135deg, #2d7a2d 0%, #4d9e4d 100%)",
          }}>
          Kembali ke Beranda →
        </Link>
      </div>
    </section>
  );
}
