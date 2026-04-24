
import { dummyBlogPosts } from "@/data/blog";
import { NextResponse } from "next/server";

// GET /api/blog — ambil semua artikel
// Query params: ?category=Panduan | ?limit=3
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = searchParams.get("limit");

    let posts = dummyBlogPosts.map(({ content, ...rest }) => rest);

    if (category && category !== "semua") {
      posts = posts.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (limit) {
      const n = parseInt(limit);
      if (!isNaN(n)) posts = posts.slice(0, n);
    }

    return NextResponse.json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data artikel" },
      { status: 500 },
    );
  }
}
