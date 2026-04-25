import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import BlogHero from "./_components/BlogHero";
import BlogCTA from "./_components/BlogCTA";
import BlogFeaturedPost from "./_components/BlogFeaturedPost";
import BlogCategoryFilter from "./_components/BlogCategoryFilter";

import { Suspense } from "react";
import BlogCardGridServer from "./_components/BlogCardGridServer";
import BlogGridSkeleton from "./_components/BlogGridSkeleton";

export const metadata: Metadata = {
  title: "Blog & Artikel – RW Connect",
  description:
    "Baca artikel, panduan, dan informasi seputar kehidupan lingkungan dari RW Connect.",
};

export const dynamic = "force-dynamic";
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  // 🔥 ambil semua posts untuk kategori & featured
  const allPosts = await getBlogPosts();

  const featured = allPosts[0];

  // 🔥 kategori tetap DINAMIS (INI PUNYA KAMU SUDAH BENAR)
  const categories = [
    "Semua",
    ...Array.from(new Set(allPosts.map((p) => p.category))),
  ];

  const category = searchParams.category || "Semua";

  return (
    <div className="pt-24 overflow-x-hidden">
      <BlogHero />

      {featured && <BlogFeaturedPost post={featured} />}

      <div className="container mx-auto px-6 lg:px-12">
        <BlogCategoryFilter categories={categories} />
      </div>

      <Suspense key={category} fallback={<BlogGridSkeleton />}>
        <BlogCardGridServer category={category} />
      </Suspense>

      <BlogCTA />
    </div>
  );
}
