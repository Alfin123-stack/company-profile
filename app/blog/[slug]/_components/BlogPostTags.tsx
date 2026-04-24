interface BlogPostTagsProps {
  tags: string[];
}

export default function BlogPostTags({ tags }: BlogPostTagsProps) {
  return (
    <div className="mt-12 pt-8 border-t border-ink/10">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-sm bg-white border border-ink/15 text-mist">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
