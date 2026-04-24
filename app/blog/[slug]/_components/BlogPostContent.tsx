type ContentBlock = {
  type: "paragraph" | "heading" | "list" | "highlight";
  text?: string;
  items?: string[];
};

export default function BlogPostContent({
  blocks,
}: {
  blocks: ContentBlock[];
}) {
  return (
    <div className="prose prose-lg max-w-none">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-ink/80 leading-relaxed mb-6">
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="text-3xl font-bold mt-10 mb-4"
              style={{ fontFamily: "var(--font-display)" }}>
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2 mb-6">
              {block.items?.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-ink/80">
                  <span className="text-sage-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "highlight") {
          return (
            <div
              key={i}
              className="my-8 p-6 rounded-2xl bg-sage-50 border border-sage-200">
              <p className="text-sage-800 font-medium">{block.text}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
