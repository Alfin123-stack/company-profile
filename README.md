# RW Connect – Platform Informasi Lingkungan

Platform digital untuk warga yang menghadirkan pengumuman, kalender kegiatan, dan aspirasi warga dalam satu tempat yang terorganisir.

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser
http://localhost:3000
```

## 📁 Struktur Project

```
rw-connect/
├── app/                        # App Router
│   ├── layout.tsx              # Root Layout (Server Component) - Header & Footer global
│   ├── page.tsx                # Halaman Beranda (Server Component)
│   ├── globals.css             # Global styles + Tailwind
│   ├── about/
│   │   └── page.tsx            # Halaman Tentang (Server Component)
│   ├── services/
│   │   └── page.tsx            # Halaman Layanan (Server Component + data fetching)
│   ├── contact/
│   │   └── page.tsx            # Halaman Kontak (Server Component)
│   ├── team/
│   │   └── [id]/
│   │       └── page.tsx        # Dynamic Route - Profil Tim (Server Component)
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic Route - Artikel Blog (Server Component)
│   └── api/
│       └── announcements/
│           └── route.ts        # Route Handler API (GET & POST)
├── components/
│   ├── Header.tsx              # Header (Server Component)
│   ├── Footer.tsx              # Footer (Server Component)
│   ├── NavClient.tsx           # Mobile Navigation (Client Component) ✦
│   ├── AnimatedSection.tsx     # Scroll Animation (Client Component) ✦
│   ├── StatCounter.tsx         # Number Counter (Client Component) ✦
│   ├── AnnouncementCard.tsx    # Card Pengumuman (Server Component)
│   └── ContactForm.tsx         # Form Kontak (Client Component) ✦
└── lib/
    └── data.ts                 # Data fetching functions
```

## ✨ Fitur Teknis

### App Router
- Layout global dengan `app/layout.tsx` untuk Header dan Footer
- Halaman statis: `/`, `/about`, `/services`, `/contact`
- Dynamic routes: `/team/[id]` dan `/blog/[slug]`

### Server vs Client Components
- **Server Components**: Layout, semua halaman, Header, Footer, AnnouncementCard
- **Client Components** (`'use client'`):
  - `NavClient` – Mobile menu dengan state toggle
  - `AnimatedSection` – IntersectionObserver scroll animation
  - `StatCounter` – Animasi angka naik
  - `ContactForm` – Form interaktif dengan validasi dan API call

### Data Fetching
- Server-side data fetching di `/services/page.tsx` dan `/team/[id]/page.tsx`
- `generateStaticParams()` untuk pre-generate dynamic routes
- `generateMetadata()` untuk SEO dinamis

### Route Handler (API)
- `GET /api/announcements` – Ambil semua pengumuman (support filter & limit)
- `POST /api/announcements` – Submit aspirasi warga

## 🎨 Design System
- **Font**: Playfair Display (heading) + DM Sans (body)
- **Warna**: Sage green + warm ivory background
- **Style**: Premium editorial dengan grain texture overlay

## 📊 Rubrik Penilaian
| Kriteria | Implementasi |
|----------|-------------|
| Struktur & routing Next.js | ✅ App Router, dynamic routes, layout |
| Layout & navigasi | ✅ Global layout, responsive header dengan mobile nav |
| Server vs Client component | ✅ Server Components + 4 Client Components |
| Data fetching & API | ✅ Server-side fetch + Route Handler API |
| Kerapian kode | ✅ TypeScript, modular, clean architecture |
# company-profile
