import { dummyBlogPosts } from "@/data/blog";
import { NextResponse } from "next/server";

// GET /api/blog/[slug] — ambil satu artikel lengkap dengan content
export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const post = dummyBlogPosts.find((p) => p.slug === params.slug);

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
