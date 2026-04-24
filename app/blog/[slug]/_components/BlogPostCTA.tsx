import Link from "next/link";

export default function BlogPostCTA() {
  return (
    <div className="mt-16 text-center">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sage-600 text-white text-sm font-medium hover:bg-sage-700 transition-all">
        Kirim Aspirasi <span>→</span>
      </Link>
    </div>
  );
}
