import { categoryColors } from "@/data/blog";

interface BlogCategoryBadgeProps {
  category: string;
  variant?: "featured" | "default";
}

export default function BlogCategoryBadge({
  category,
  variant = "default",
}: BlogCategoryBadgeProps) {
  if (variant === "featured") {
    return (
      <span className="px-3 py-1 rounded-full text-xs font-medium border bg-sage-50 text-sage-700 border-sage-100">
        Artikel Pilihan
      </span>
    );
  }


  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium border ${
        categoryColors[category] ?? "bg-gray-50 text-gray-600 border-gray-100"
      }`}>
      {category}
    </span>
  );
}
