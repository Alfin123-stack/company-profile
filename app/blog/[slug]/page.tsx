import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchPost } from "@/lib/blog";
import BackButton from "@/components/BackButton";
import BlogPostHeader from "./_components/BlogPostHeader";
import BlogPostAuthor from "./_components/BlogPostAuthor";
import BlogPostContent from "./_components/BlogPostContent";
import BlogPostTags from "./_components/BlogPostTags";
import BlogPostCTA from "./_components/BlogPostCTA";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  if (!post) return { title: "Artikel tidak ditemukan" };
  return {
    title: `${post.title} – RW Connect`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchPost(params.slug);
  if (!post) notFound();

  return (
    <div className="pt-24 overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <BackButton />

        <article className="max-w-3xl mx-auto">
          <BlogPostHeader
            category={post.category}
            date={post.date}
            readTime={post.readTime}
            title={post.title}
            excerpt={post.excerpt}
          />
          <BlogPostAuthor
            author={post.author}
            authorRole={post.authorRole}
            authorAvatar={post.authorAvatar}
            authorColor={post.authorColor}
          />
          <BlogPostContent blocks={post.content} />
          <BlogPostTags tags={post.tags} />
          <BlogPostCTA />
        </article>
      </div>
    </div>
  );
}
