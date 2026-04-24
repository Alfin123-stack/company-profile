import type { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  color: string;
  label: string;
  value: string;
}

export default function ContactInfoCard({
  icon: Icon,
  color,
  label,
  value,
}: ContactInfoCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-ink/10">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-sage-50">
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <div className="text-xs text-mist mb-0.5">{label}</div>
        <div className="font-medium text-sm">{value}</div>
      </div>
    </div>
  );
}
