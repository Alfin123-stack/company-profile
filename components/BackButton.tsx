"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm text-mist hover:text-ink transition-colors duration-200 mb-12">
      ← Kembali ke Blog
    </button>
  );
}
