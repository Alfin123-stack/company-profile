import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Clock,
  ScanFace,
  InspectionPanel,
} from "lucide-react";

// Server Component
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)",
                }}>
                RW
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}>
                RW Connect
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Platform informasi lingkungan yang memastikan setiap warga
              mendapat akses yang sama terhadap informasi penting secara tepat
              waktu.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center hover:border-sage-500 hover:bg-sage-500/20 transition-all duration-200"
                    aria-label={s.label}>
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs tracking-widest uppercase text-white/30 font-medium mb-4">
              Platform
            </div>
            <ul className="space-y-3">
              {platformLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <div className="text-xs tracking-widest uppercase text-white/30 font-medium mb-4">
              Kontak
            </div>

            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Balai RW 05, Jl. Raya Lingkungan</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>admin@rwconnect.id</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 812-0000-0000</span>
              </li>

              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Senin–Jumat, 08–21 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} RW Connect. Dibuat dengan ❤️ untuk warga.
          </p>

          <div className="flex gap-6 text-xs text-white/30">
            <Link
              href="/about"
              className="hover:text-white/60 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link
              href="/about"
              className="hover:text-white/60 transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================
// DATA
// ==========================

const socials = [
  { icon: ScanFace, href: "#", label: "Facebook" },
  { icon: InspectionPanel, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

const platformLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/services", label: "Layanan" },
  { href: "/contact", label: "Kontak & Aspirasi" },
  { href: "/blog/cara-pakai-rwconnect", label: "Panduan Penggunaan" },
];
