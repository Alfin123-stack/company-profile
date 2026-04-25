import { BlogPost } from "@/types/blogPost";

function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  if (!url) {
    throw new Error("NEXT_PUBLIC_BASE_URL belum diset di environment");
  }

  return url;
}

export async function getBlogPosts(
  category: string = "Semua",
): Promise<BlogPost[]> {
  const baseUrl = getBaseUrl();

  const url =
    category && category !== "Semua"
      ? `${baseUrl}/api/blog?category=${encodeURIComponent(category)}`
      : `${baseUrl}/api/blog`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed fetch blog:", res.status);
    return [];
  }

  const json = await res.json();
  return json.data ?? [];
}

export async function fetchPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = getBaseUrl();

    const res = await fetch(`${baseUrl}/api/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json.data ?? null;
  } catch (err) {
    console.error("ERROR FETCH:", err);
    return null;
  }
}
