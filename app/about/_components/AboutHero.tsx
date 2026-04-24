"use client";
export default function AboutHero() {
  return (
    <section className="py-24 relative">
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #2d7a2d 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-4 block">
            Tentang Kami
          </span>
          <h1
            className="text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}>
            Membangun jembatan{" "}
            <em className="text-sage-600 font-normal">informasi</em> antar warga
          </h1>
          <p className="text-xl text-mist leading-relaxed max-w-2xl">
            RW Connect lahir dari kegelisahan nyata: informasi penting yang
            hilang di lautan pesan chat, pengumuman yang tidak sampai ke semua
            warga, dan kegiatan bersama yang kurang terkoordinasi.
          </p>
        </div>
      </div>
    </section>
  );
}
