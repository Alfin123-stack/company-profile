import type { Announcement } from "@/types/announcement";
import {
  Construction,
  Calendar,
  Wallet,
  Leaf,
  HeartPulse,
  Zap,
  Megaphone,
} from "lucide-react";

const priorityStyles: Record<string, string> = {
  high: "text-red-500",
  medium: "text-amber-500",
  low: "text-sage-600",
};

const priorityLabel: Record<string, string> = {
  high: "Prioritas Tinggi",
  medium: "Penting",
  low: "Informasi",
};

export default function AnnouncementCard({
  item,
  index,
}: {
  item: Announcement;
  index: number;
}) {
  // ✅ HARD CODE ICON (NO OBJECT MAP)
  let Icon = Megaphone;
  let color = "text-sage-500";

  if (item.category === "Infrastruktur") {
    Icon = Construction;
    color = "text-orange-500";
  } else if (item.category === "Kegiatan") {
    Icon = Calendar;
    color = "text-blue-500";
  } else if (item.category === "Administrasi") {
    Icon = Wallet;
    color = "text-emerald-500";
  } else if (item.category === "Kebersihan") {
    Icon = Leaf;
    color = "text-green-500";
  } else if (item.category === "Kesehatan") {
    Icon = HeartPulse;
    color = "text-rose-500";
  } else if (item.category === "Informasi") {
    Icon = Zap;
    color = "text-yellow-500";
  }

  return (
    <div
      className="group p-6 rounded-2xl border border-ink/10 bg-white hover:shadow-xl hover:shadow-sage-500/10 hover:-translate-y-1 transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center justify-center flex-shrink-0 rounded-2xl p-4 bg-sage-100">
          <Icon className={`w-6 h-6 ${color}`} />
        </div>

        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${priorityStyles[item.priority]}`}>
          {priorityLabel[item.priority]}
        </span>
      </div>

      {/* Category */}
      <div className="text-xs text-sage-600 font-medium tracking-wide uppercase mb-2">
        {item.category}
      </div>

      {/* Title */}
      <h3
        className="font-bold mb-2 leading-snug group-hover:text-sage-700 transition-colors duration-200"
        style={{ fontFamily: "var(--font-display)" }}>
        {item.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-mist leading-relaxed mb-4">{item.excerpt}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-ink/5">
        <span className="text-xs text-mist">{item.author}</span>
        <span className="text-xs text-mist">{item.date}</span>
      </div>
    </div>
  );
}
