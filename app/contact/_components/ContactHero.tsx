export default function ContactHero() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-4 block">
            Hubungi Kami
          </span>
          <h1
            className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}>
            Suara anda <em className="text-sage-600 font-normal">penting</em>
          </h1>
          <p className="text-xl text-mist leading-relaxed">
            Ada saran? Pertanyaan? Atau ingin melaporkan sesuatu? Kami siap
            mendengar dan merespons setiap masukan dari warga.
          </p>
        </div>
      </div>
    </section>
  );
}
