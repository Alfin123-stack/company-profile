"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface BlogCategoryFilterProps {
  categories: string[];
}

export default function BlogCategoryFilter({
  categories,
}: BlogCategoryFilterProps) {
  const searchParams = useSearchParams();
  const current = searchParams.get("category") || "Semua";

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => {
        const isActive = current === cat;

        const href =
          cat === "Semua"
            ? "/blog"
            : `/blog?category=${encodeURIComponent(cat)}`;

        return (
          <Link
            key={cat}
            href={href}
            scroll={false}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              isActive
                ? "bg-ink text-white border-ink"
                : "bg-white border-ink/15 text-mist hover:border-sage-300 hover:text-ink"
            }`}>
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
