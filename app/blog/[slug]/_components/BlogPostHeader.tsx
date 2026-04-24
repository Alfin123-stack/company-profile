interface BlogPostHeaderProps {
  category: string;
  date: string;
  readTime: number;
  title: string;
  excerpt: string;
}

export default function BlogPostHeader({
  category,
  date,
  readTime,
  title,
  excerpt,
}: BlogPostHeaderProps) {
  return (
    <>
      {/* Meta */}
      <div className="flex items-center gap-4 mb-6">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-700">
          {category}
        </span>
        <span className="text-xs text-mist">{date}</span>
        <span className="text-xs text-mist">·</span>
        <span className="text-xs text-mist">{readTime} menit baca</span>
      </div>

      {/* Title */}
      <h1
        className="text-5xl font-bold mb-6 leading-tight"
        style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h1>

      {/* Excerpt */}
      <p className="text-xl text-mist mb-8 leading-relaxed border-l-4 border-sage-400 pl-6">
        {excerpt}
      </p>
    </>
  );
}
