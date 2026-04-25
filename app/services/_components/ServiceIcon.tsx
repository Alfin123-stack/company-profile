import {
  Megaphone,
  Calendar,
  FileText,
  Bell,
  BarChart3,
  Map,
} from "lucide-react";
import type { ServiceIconKey } from "@/constants/services";

const iconMap: Record<
  ServiceIconKey,
  React.ComponentType<{ className?: string }>
> = {
  megaphone: Megaphone,
  calendar: Calendar,
  "file-text": FileText,
  bell: Bell,
  "bar-chart": BarChart3,
  map: Map,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconKey;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
