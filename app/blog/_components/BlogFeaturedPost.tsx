import Link from "next/link";
import { Newspaper } from "lucide-react";
import BlogAuthorAvatar from "./BlogAuthorAvatar";
import BlogCategoryBadge from "./BlogCategoryBadge";
import { BlogPost } from "@/types/blogPost";


export default function BlogFeaturedPost({ post }: { post: BlogPost }) {
  return (
    <section className="pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <Link href={`/blog/${post.slug}`} className="group block">
          <div className="rounded-3xl border border-ink/10 bg-white overflow-hidden hover:shadow-2xl hover:shadow-sage-500/10 hover:-translate-y-1 transition-all duration-500">
            <div className="grid lg:grid-cols-2">
              {/* Visual */}
              <div
                className="h-64 lg:h-auto flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #e8f5e8 0%, #b3d0b3 50%, #7fb87f 100%)",
                }}>
                <Newspaper className="w-20 h-20" />
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <BlogCategoryBadge
                    category={post.category}
                    variant="featured"
                  />
                  <BlogCategoryBadge category={post.category} />
                </div>

                <h2
                  className="text-3xl lg:text-4xl font-bold mb-4 leading-snug group-hover:text-sage-700 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {post.title}
                </h2>

                <p className="text-mist leading-relaxed mb-8">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BlogAuthorAvatar
                      avatarKey={post.authorAvatar}
                      colorClass={post.authorColor}
                      size="md"
                    />
                    <div>
                      <div className="text-sm font-semibold">{post.author}</div>
                      <div className="text-xs text-mist">
                        {post.date} · {post.readTime} menit baca
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-sage-600 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    Baca →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
