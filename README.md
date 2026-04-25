# 🏘️ RW Connect

Platform informasi lingkungan digital untuk warga — pengumuman, kalender kegiatan, dan aspirasi warga dalam satu tempat.

---

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## 📁 Struktur Project

```
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer global)
│   ├── page.tsx                # Beranda
│   ├── about/page.tsx          # Tentang
│   ├── services/page.tsx       # Layanan
│   ├── contact/page.tsx        # Kontak
│   ├── blog/
│   │   ├── page.tsx            # Daftar artikel
│   │   └── [slug]/page.tsx     # Detail artikel (dynamic route)
│   └── api/
│       └── blog/
│           ├── route.ts        # GET /api/blog
│           └── [slug]/route.ts # GET /api/blog/[slug]
│
├── components/
│   ├── Header.tsx              # Navbar global
│   ├── Footer.tsx              # Footer global
│   ├── AnnouncementCard.tsx    # Kartu pengumuman
│   ├── AnimatedSection.tsx     # Animasi scroll
│   ├── StatCounter.tsx         # Counter angka
│   ├── ContactForm.tsx         # Form aspirasi
│   ├── NavClient.tsx           # Mobile nav
│   └── BackButton.tsx          # Tombol kembali
│
├── data/
│   ├── announcement.ts         # Data dummy pengumuman
│   ├── blog.ts                 # Data dummy artikel
│   └── services.ts             # Data dummy layanan
│
├── types/
│   ├── announcement.ts         # Type Announcement
│   └── blogPost.ts             # Type BlogPost
│
└── lib/
    └── blog.ts                 # Helper fetch artikel
```

---

## 🗺️ Halaman

| Route | Keterangan |
|-------|------------|
| `/` | Beranda — hero, statistik, pengumuman, fitur |
| `/about` | Tentang platform |
| `/services` | Layanan & kalender kegiatan |
| `/blog` | Daftar artikel |
| `/blog/[slug]` | Detail artikel |
| `/contact` | Form aspirasi warga |

---

## 🔌 API

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/blog` | Semua artikel |
| GET | `/api/blog/[slug]` | Detail artikel |

---

## ⚛️ Server vs Client Component

| Komponen | Tipe | Alasan |
|----------|------|--------|
| Semua `page.tsx` | Server | Fetch data, tidak ada interaksi |
| `Header.tsx` | Server | Hanya berisi Link |
| `Footer.tsx` | Server | Konten statis |
| `AnnouncementCard.tsx` | **Client** | Menyimpan Lucide icon di object |
| `AnimatedSection.tsx` | **Client** | `IntersectionObserver` |
| `StatCounter.tsx` | **Client** | `useState` animasi angka |
| `ContactForm.tsx` | **Client** | `useState` + fetch POST |
| `NavClient.tsx` | **Client** | `useState` toggle menu |

---

## 🛠️ Tech Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** — Icons
