interface BlogCategoryFilterProps {
  categories: string[];
}

export default function BlogCategoryFilter({
  categories,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => (
        <span
          key={cat}
          className={`px-4 py-2 rounded-full text-sm font-medium border cursor-default transition-all ${
            cat === "Semua"
              ? "bg-ink text-white border-ink"
              : "bg-white border-ink/15 text-mist hover:border-sage-300 hover:text-ink"
          }`}>
          {cat}
        </span>
      ))}
    </div>
  );
}
