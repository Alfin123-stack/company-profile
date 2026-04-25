import { getBlogPosts } from "@/lib/blog";
import BlogCardGrid from "./BlogCardGrid";

export default async function BlogCardGridServer({
  category,
}: {
  category: string;
}) {
  const posts = await getBlogPosts(category);
  console.log("SERVER CATEGORY:", category);

  return <BlogCardGrid posts={posts} />;
}
