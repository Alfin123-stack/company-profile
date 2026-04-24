export default function BlogHero() {
  return (
    <section className="py-20 relative">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <span className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-4 block">
          Blog & Artikel
        </span>
        <h1
          className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}>
          Informasi & <em className="text-sage-600 font-normal">Inspirasi</em>
          <br />
          untuk Warga
        </h1>
        <p className="text-xl text-mist max-w-2xl leading-relaxed">
          Panduan, opini, dan cerita dari pengurus dan warga RW 05 tentang
          kehidupan lingkungan yang lebih baik.
        </p>
      </div>
    </section>
  );
}
