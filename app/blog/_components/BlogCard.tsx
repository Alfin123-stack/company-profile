"use client";

import Link from "next/link";
import BlogAuthorAvatar from "./BlogAuthorAvatar";
import { BlogPost } from "@/types/blogPost";

import { Lightbulb, Shield, Settings, Leaf } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const cardGradients = [
  "linear-gradient(135deg, #fde8d8, #f4b896)",
  "linear-gradient(135deg, #d8e8fd, #96b4f4)",
  "linear-gradient(135deg, #e8fde8, #96f496)",
  "linear-gradient(135deg, #fdfde8, #f4f496)",
];

const cardIcons = [
  { icon: Lightbulb, color: "text-orange-500" },
  { icon: Shield, color: "text-blue-500" },
  { icon: Settings, color: "text-gray-500" },
  { icon: Leaf, color: "text-green-500" },
];

export default function BlogCard({ post, index }: BlogCardProps) {
  const gradient = cardGradients[index % cardGradients.length];

  const item = cardIcons[index % cardIcons.length];

  const Icon = item.icon;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-white overflow-hidden hover:shadow-xl hover:shadow-sage-500/10 hover:-translate-y-1 transition-all duration-500">
      {/* Visual */}
      <div
        className="h-40 flex items-center justify-center"
        style={{ background: gradient }}>
        <Icon className={`${item.color}`} size={40} />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-mist">{post.readTime} menit</span>
        </div>

        <h3
          className="font-bold leading-snug mb-3 group-hover:text-sage-700 transition-colors duration-200 flex-1"
          style={{ fontFamily: "var(--font-display)" }}>
          {post.title}
        </h3>

        <p className="text-sm text-mist leading-relaxed mb-5 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-ink/5">
          <div className="flex items-center gap-2">
            <BlogAuthorAvatar
              avatarKey={post.authorAvatar}
              colorClass={post.authorColor}
              size="sm"
            />
            <span className="text-xs text-mist">{post.author}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-mist">{post.date}</span>
            <span className="text-xs font-medium text-sage-600 group-hover:translate-x-1 transition-transform duration-300 inline-block">
              Baca →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
