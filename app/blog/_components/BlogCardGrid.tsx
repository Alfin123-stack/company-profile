import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/types/blogPost";
import BlogEmptyState from "./BlogEmptyState";

interface BlogCardGridProps {
  posts: BlogPost[];
}

export default function BlogCardGrid({ posts }: BlogCardGridProps) {
  return (
    <AnimatedSection className="pb-6">
      <div className="container mx-auto px-6 lg:px-12">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        ) : (
          <BlogEmptyState />
        )}
      </div>
    </AnimatedSection>
  );
}
