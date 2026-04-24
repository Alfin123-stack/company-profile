import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import BlogHero from "./_components/BlogHero";
import BlogFeaturedPost from "./_components/BlogFeaturedPost";
import BlogCardGrid from "./_components/BlogCardGrid";
import BlogCTA from "./_components/BlogCTA";

export const metadata: Metadata = {
  title: "Blog & Artikel – RW Connect",
  description:
    "Baca artikel, panduan, dan informasi seputar kehidupan lingkungan dari RW Connect.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured = posts[0];
  const rest = posts.slice(1);
  const categories = [
    "Semua",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];

  console.log("posts", posts);
  console.log("categories", categories);

  return (
    <div className="pt-24 overflow-x-hidden">
      <BlogHero />
      {/* {featured && <BlogFeaturedPost post={featured} />} */}
      <BlogCardGrid posts={rest} categories={categories} />
      <BlogCTA />
    </div>
  );
}
