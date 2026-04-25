
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
