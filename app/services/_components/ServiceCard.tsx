
import type { ServiceIconKey } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  icon: ServiceIconKey;
  color: string;
  category: string;
  title: string;
  desc: string;
  tags: readonly string[];
}

export default function ServiceCard({
  icon,
  color,
  category,
  title,
  desc,
  tags,
}: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-3xl border border-ink/10 bg-white hover:shadow-xl hover:shadow-sage-500/10 hover:-translate-y-1 transition-all duration-500">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
        <ServiceIcon name={icon} className="w-6 h-6" />
      </div>
      <div className="text-xs tracking-widest uppercase text-sage-600 font-medium mb-2">
        {category}
      </div>
      <h3
        className="text-xl font-bold mb-3 group-hover:text-sage-700 transition-colors"
        style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h3>
      <p className="text-mist text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs bg-sage-50 text-sage-700 border border-sage-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
