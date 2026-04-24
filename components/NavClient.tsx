"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

export default function NavClient({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-ink/15 hover:bg-ink/5 transition-colors duration-200"
        aria-label="Toggle menu">
        <div className="space-y-1.5">
          <span
            className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-20 z-40"
          onClick={() => setOpen(false)}>
          <div
            className="mx-4 mt-2 rounded-2xl border border-ink/10 p-4 shadow-xl backdrop-blur-xl"
            style={{ background: "rgba(247, 244, 238, 0.98)" }}
            onClick={(e) => e.stopPropagation()}>
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-sage-500 text-white"
                      : "text-mist hover:text-ink hover:bg-ink/5"
                  }`}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-white text-center mt-2"
                style={{
                  background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)",
                }}>
                Kirim Aspirasi ✉️
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
