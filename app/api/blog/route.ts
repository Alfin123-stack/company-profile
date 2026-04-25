import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { BlogPost } from "@/types/blogPost";

// Baca langsung dari file JSON di public/data/blog.json
function getBlogData(): BlogPost[] {
  const filePath = join(process.cwd(), "data", "blog.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as BlogPost[];
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = searchParams.get("limit");

    let posts = getBlogData().map(({ content, ...rest }) => rest);

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
