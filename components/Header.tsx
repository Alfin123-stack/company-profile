import Link from "next/link";
import NavClient from "./NavClient";

// Server Component
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div
          className="rounded-2xl border border-ink/10 backdrop-blur-xl px-6 py-3 flex items-center justify-between"
          style={{ background: "rgba(247, 244, 238, 0.85)" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #1e5c1e, #4d9e4d)",
              }}>
              RW
            </div>
            <span
              className="font-bold text-ink"
              style={{ fontFamily: "var(--font-display)" }}>
              RW Connect
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-mist hover:text-ink hover:bg-ink/5 transition-all duration-200">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex px-5 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-sage-500/20"
              style={{
                background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)",
              }}>
              Aspirasi
            </Link>
            {/* Mobile nav toggle - Client component */}
            <NavClient navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/services", label: "Layanan" },
  { href: "/contact", label: "Kontak" },
  { href: "/blog", label: "Artikel" },
];
