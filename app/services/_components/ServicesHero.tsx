export default function ServicesHero() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-4 block">
            Layanan Kami
          </span>
          <h1
            className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}>
            Semua yang anda{" "}
            <em className="text-sage-600 font-normal">butuhkan</em>
          </h1>
          <p className="text-xl text-mist leading-relaxed">
            Dari pengumuman hingga aspirasi warga — semua tersedia dalam satu
            platform yang dirancang untuk kehidupan lingkungan yang lebih baik.
          </p>
        </div>
      </div>
    </section>
  );
}
