import AnimatedSection from "@/components/AnimatedSection";
import {
  Megaphone,
  Calendar,
  MessageSquare,
  Bell,
  Globe,
  BarChart3,
} from "lucide-react";

export default function FeaturesGrid() {
  return (
    <AnimatedSection className="py-24 bg-ink text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1 */}
          <Card
            icon={<Megaphone className="w-10 h-10 text-rose-500" />}
            title="Pengumuman Real-time"
            desc="Informasi penting langsung sampai ke tangan warga."
          />

          {/* 2 */}
          <Card
            icon={<Calendar className="w-10 h-10 text-blue-500" />}
            title="Kalender Kegiatan"
            desc="Semua jadwal kegiatan dalam satu tampilan."
          />

          {/* 3 */}
          <Card
            icon={<MessageSquare className="w-10 h-10 text-purple-500" />}
            title="Aspirasi & Laporan"
            desc="Wadah resmi untuk menyampaikan aspirasi."
          />

          {/* 4 */}
          <Card
            icon={<Bell className="w-10 h-10 text-amber-500" />}
            title="Notifikasi Otomatis"
            desc="Warga mendapat info tepat waktu."
          />

          {/* 5 */}
          <Card
            icon={<Globe className="w-10 h-10 text-green-500" />}
            title="Akses Setara"
            desc="Semua warga punya akses informasi."
          />

          {/* 6 */}
          <Card
            icon={<BarChart3 className="w-10 h-10 text-sky-500" />}
            title="Laporan Terstruktur"
            desc="Data tercatat rapi dan mudah dikelola."
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 rounded-2xl border border-white/10">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/50 text-sm">{desc}</p>
    </div>
  );
}
