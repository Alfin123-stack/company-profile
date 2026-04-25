import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { BlogPost } from "@/types/blogPost";

function getBlogData(): BlogPost[] {
  const filePath = join(process.cwd(), "data", "blog.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as BlogPost[];
}

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const posts = getBlogData();
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Artikel tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: post });
  } catch {
    return NextResponse.json(
      { success: false, error: "Gagal mengambil artikel" },
      { status: 500 },
    );
  }
}
