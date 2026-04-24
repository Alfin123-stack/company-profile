"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}>
          Terjadi Kesalahan
        </h1>

        <p className="text-mist mb-8 max-w-md mx-auto">
          Terjadi error saat memuat halaman. Silakan coba lagi atau kembali ke
          beranda.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-ink text-white hover:opacity-90 transition">
            Coba Lagi
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-ink/20 hover:bg-ink hover:text-white transition">
            Kembali
          </Link>
        </div>
      </div>
    </section>
  );
}
