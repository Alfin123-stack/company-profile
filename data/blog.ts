import { BlogPost } from "@/types/blogPost";
import { Lightbulb, Shield, Settings, Leaf, UserCog } from "lucide-react";

export const categoryColors: Record<string, string> = {
  Panduan: "bg-blue-50 text-blue-700 border-blue-100",
  Opini: "bg-purple-50 text-purple-700 border-purple-100",
  Program: "bg-sage-50 text-sage-700 border-sage-100",
  Tips: "bg-amber-50 text-amber-700 border-amber-100",
  Inovasi: "bg-rose-50 text-rose-700 border-rose-100",
};

export const cardGradients = [
  "linear-gradient(135deg, #fde8d8, #f4b896)",
  "linear-gradient(135deg, #d8e8fd, #96b4f4)",
  "linear-gradient(135deg, #e8fde8, #96f496)",
  "linear-gradient(135deg, #fdfde8, #f4f496)",
];

export const cardIcons = [
  { icon: Lightbulb, color: "text-orange-500" },
  { icon: Shield, color: "text-blue-500" },
  { icon: Settings, color: "text-gray-500" },
  { icon: Leaf, color: "text-green-500" },
];

export const iconMap: Record<string, any> = {
  leaf: Leaf,
  shield: Shield,
  idea: Lightbulb,
  settings: Settings,
  userCog: UserCog,
};


export const dummyBlogPosts: BlogPost[] = [
  {
    slug: "cara-pakai-rwconnect",
    title: "Panduan Lengkap Menggunakan RW Connect untuk Warga",
    excerpt:
      "Panduan step-by-step agar Anda bisa memanfaatkan semua fitur RW Connect secara maksimal.",
    category: "Panduan",
    date: "20 Apr 2025",
    readTime: 5,
    author: "Tim RW Connect",
    authorRole: "Tim Editorial",
    authorAvatar: "pen",
    authorColor: "text-blue-600",
    tags: ["panduan", "tutorial", "warga", "fitur"],
    content: [
      {
        type: "paragraph",
        text: "RW Connect dirancang untuk memudahkan setiap warga mendapatkan informasi lingkungan secara cepat, tepat, dan terorganisir. Tidak perlu keahlian teknis khusus untuk menggunakannya.",
      },
      { type: "heading", text: "Langkah 1: Registrasi Akun" },
      {
        type: "paragraph",
        text: "Daftarkan diri Anda menggunakan nomor KTP dan nomor rumah. Verifikasi akan dilakukan oleh pengurus RT dalam 1×24 jam.",
      },
      { type: "heading", text: "Langkah 2: Aktifkan Notifikasi" },
      {
        type: "paragraph",
        text: "Setelah akun aktif, pastikan notifikasi diaktifkan agar Anda tidak melewatkan pengumuman penting dari pengurus RW.",
      },
      {
        type: "highlight",
        text: "Tips: Atur preferensi notifikasi sesuai kebutuhan Anda. Anda bisa memilih jenis pengumuman yang ingin diterima agar tidak terlalu banyak notifikasi.",
      },
      { type: "heading", text: "Fitur-Fitur Utama" },
      {
        type: "list",
        items: [
          "Papan Pengumuman — Akses semua info resmi dalam satu halaman",
          "Kalender Kegiatan — Lihat dan tambahkan ke jadwal personal",
          "Aspirasi Warga — Kirim saran dan laporan langsung ke pengurus",
          "Arsip Dokumen — Unduh dokumen administrasi kapan saja",
        ],
      },
    ],
  },

  {
    slug: "pentingnya-informasi-lingkungan",
    title: "Mengapa Informasi Lingkungan yang Terorganisir Itu Penting?",
    excerpt:
      "Dari chat yang berantakan ke platform terpadu — transformasi komunikasi warga yang mengubah segalanya.",
    category: "Opini",
    date: "15 Apr 2025",
    readTime: 4,
    author: "Ketua RW 05",
    authorRole: "Ketua RW",
    authorAvatar: "userCog",
    authorColor: "text-purple-600",
    tags: ["komunitas", "digitalisasi", "informasi", "lingkungan"],
    content: [
      {
        type: "paragraph",
        text: "Berapa kali Anda melewatkan pengumuman penting karena tertimbun di grup WhatsApp? Atau baru tahu ada kegiatan gotong royong setelah acaranya selesai?",
      },
      {
        type: "paragraph",
        text: "Ini bukan salah siapa-siapa. Ini adalah masalah sistemik dalam cara kita menyebarkan informasi di lingkungan modern yang serba cepat.",
      },
      {
        type: "highlight",
        text: "Informasi yang terorganisir bukan kemewahan — itu adalah hak setiap warga untuk mendapat perlakuan yang setara dalam mengakses informasi lingkungannya.",
      },
      { type: "heading", text: "Dampak Nyata" },
      {
        type: "list",
        items: [
          "Partisipasi warga dalam kegiatan meningkat 60%",
          "Keluhan dan aspirasi terselesaikan 3× lebih cepat",
          "Transparansi pengelolaan dana meningkat kepercayaan warga",
          "Koordinasi antar RT menjadi lebih efisien",
        ],
      },
      {
        type: "paragraph",
        text: "Solusi digital bukan tentang gaya hidup modern semata — tapi tentang membuat kehidupan bersama menjadi lebih adil dan nyaman untuk semua orang.",
      },
    ],
  },

  {
    slug: "program-kebersihan-2025",
    title: "Program Kebersihan Lingkungan 2025: Apa yang Berubah?",
    excerpt:
      "Mengenal program kebersihan lingkungan terbaru yang akan dijalankan sepanjang 2025 oleh pengurus RW.",
    category: "Program",
    date: "10 Apr 2025",
    readTime: 3,
    author: "Koordinator Kebersihan",
    authorRole: "Pengurus RW",
    authorAvatar: "leaf",
    authorColor: "text-green-600",
    tags: ["kebersihan", "lingkungan", "program", "2025"],
    content: [
      {
        type: "paragraph",
        text: "Tahun 2025 membawa semangat baru dalam pengelolaan kebersihan lingkungan RW 05. Dengan dukungan teknologi dan kesadaran warga yang semakin tinggi, kami merancang program yang lebih terstruktur.",
      },
      { type: "heading", text: "Program Unggulan 2025" },
      {
        type: "list",
        items: [
          "Bank Sampah Digital — Tukarkan sampah dengan poin reward",
          "Jadwal Gotong Royong Rutin — Setiap minggu terakhir bulan",
          "Komposter Komunal — Pengolahan sampah organik bersama",
          "Taman Toga — Kebun tanaman obat di area fasilitas umum",
        ],
      },
      {
        type: "highlight",
        text: "Warga yang aktif berpartisipasi dalam program kebersihan akan mendapatkan poin yang dapat ditukar dengan berbagai keuntungan dari mitra RW Connect.",
      },
      {
        type: "paragraph",
        text: "Mari bersama-sama kita wujudkan lingkungan yang bersih, hijau, dan nyaman untuk generasi mendatang.",
      },
    ],
  },

  {
    slug: "tips-keamanan-lingkungan",
    title: "7 Tips Menjaga Keamanan Lingkungan yang Bisa Dilakukan Semua Warga",
    excerpt:
      "Keamanan lingkungan adalah tanggung jawab bersama. Berikut tips praktis yang bisa langsung diterapkan.",
    category: "Tips",
    date: "5 Apr 2025",
    readTime: 4,
    author: "Koordinator Keamanan",
    authorRole: "Sie Keamanan RW",
    authorAvatar: "shield",
    authorColor: "text-red-600",
    tags: ["keamanan", "tips", "warga", "lingkungan"],
    content: [
      {
        type: "paragraph",
        text: "Keamanan lingkungan bukan hanya tugas petugas ronda atau pengurus RW. Setiap warga memiliki peran penting dalam menciptakan lingkungan yang aman dan nyaman untuk semua.",
      },
      { type: "heading", text: "7 Tips Praktis" },
      {
        type: "list",
        items: [
          "Kenali tetangga Anda — Saling kenal adalah fondasi keamanan lingkungan",
          "Laporkan hal mencurigakan ke grup keamanan RW segera",
          "Pastikan pintu dan jendela terkunci saat meninggalkan rumah",
          "Aktif dalam jadwal ronda malam secara bergilir",
          "Pasang lampu di depan rumah untuk area yang cukup terang",
          "Simpan nomor darurat pengurus RT/RW di ponsel Anda",
          "Gunakan RW Connect untuk laporan real-time jika ada insiden",
        ],
      },
      {
        type: "highlight",
        text: "Lingkungan yang aman dimulai dari kesadaran kolektif. Satu laporan tepat waktu bisa mencegah banyak kejadian yang tidak diinginkan.",
      },
      {
        type: "paragraph",
        text: "Dengan fitur laporan di RW Connect, Anda bisa langsung mengirim laporan keamanan kepada pengurus yang bertugas hanya dalam beberapa detik.",
      },
    ],
  },

  {
    slug: "digitalisasi-administrasi-rw",
    title: "Digitalisasi Administrasi RW: Dari Kertas ke Platform Digital",
    excerpt:
      "Bagaimana RW 05 bertransformasi dari tumpukan kertas dan buku tulis ke sistem administrasi digital yang efisien.",
    category: "Inovasi",
    date: "1 Apr 2025",
    readTime: 6,
    author: "Ibu Ratna Dewi",
    authorRole: "Sekretaris RW",
    authorAvatar: "user",
    authorColor: "text-pink-600",
    tags: ["digitalisasi", "administrasi", "inovasi", "rw"],
    content: [
      {
        type: "paragraph",
        text: "Dua tahun lalu, kantor sekretariat RW 05 masih dipenuhi tumpukan dokumen fisik: buku catatan warga, arsip surat, dan lembaran iuran yang susah ditelusuri. Hari ini, semuanya sudah berbeda.",
      },
      { type: "heading", text: "Perjalanan Transformasi" },
      {
        type: "paragraph",
        text: "Proses digitalisasi dimulai dari hal sederhana: memindahkan data warga ke spreadsheet. Kemudian berkembang ke sistem arsip digital, dan akhirnya ke platform RW Connect yang terintegrasi.",
      },
      {
        type: "list",
        items: [
          "Tahap 1 (2022): Digitalisasi data kependudukan warga",
          "Tahap 2 (2023): Sistem pembayaran iuran via transfer bank",
          "Tahap 3 (2024): Papan pengumuman digital dan grup terstruktur",
          "Tahap 4 (2025): RW Connect — platform terintegrasi penuh",
        ],
      },
      {
        type: "highlight",
        text: "Digitalisasi bukan soal mengikuti tren teknologi. Ini soal efisiensi nyata: waktu pengurus berkurang 40%, kepuasan warga meningkat, dan tidak ada lagi dokumen yang hilang.",
      },
      {
        type: "paragraph",
        text: "Ke depan, kami berencana mengintegrasikan RW Connect dengan sistem kelurahan agar pelayanan administrasi bisa semakin cepat dan bebas antrean.",
      },
    ],
  },
];
