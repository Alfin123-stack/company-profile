"use client";
import { iconMap } from "@/data/blog";

interface BlogPostAuthorProps {
  author: string;
  authorRole: string;
  authorAvatar: string;
  authorColor: string;
}

export default function BlogPostAuthor({
  author,
  authorRole,
  authorAvatar,
  authorColor,
}: BlogPostAuthorProps) {
  const Icon = iconMap[authorAvatar];

  return (
    <div className="flex items-center gap-3 mb-12 pb-8 border-b border-ink/10">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #e8f5e8, #b3d0b3)" }}>
        {Icon && <Icon className={`w-5 h-5 ${authorColor}`} />}
      </div>
      <div>
        <div className="text-sm font-semibold">{author}</div>
        <div className="text-xs text-mist">{authorRole}</div>
      </div>
    </div>
  );
}
