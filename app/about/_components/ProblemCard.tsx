"use client"
import type { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
}

export default function ProblemCard({
  icon: Icon,
  color,
  title,
  desc,
}: ProblemCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-ink/5 border border-ink/10">
      <Icon className={`w-7 h-7 mb-3 ${color}`} />
      <div className="text-sm font-semibold mb-1">{title}</div>
      <div className="text-xs text-mist">{desc}</div>
    </div>
  );
}