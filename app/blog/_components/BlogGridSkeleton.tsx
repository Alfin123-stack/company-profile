export default function BlogGridSkeleton() {
  return (
    <div className="container mx-auto px-6 lg:px-12 pb-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl border border-ink/10 bg-white overflow-hidden animate-pulse">
            {/* Visual */}
            <div className="h-40 bg-gray-200" />

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              {/* Read time */}
              <div className="h-3 w-16 bg-gray-200 rounded mb-3" />

              {/* Title */}
              <div className="h-5 bg-gray-200 rounded mb-2 w-3/4" />
              <div className="h-5 bg-gray-200 rounded mb-3 w-1/2" />

              {/* Excerpt */}
              <div className="h-3 bg-gray-200 rounded mb-2" />
              <div className="h-3 bg-gray-200 rounded mb-2 w-5/6" />
              <div className="h-3 bg-gray-200 rounded mb-5 w-2/3" />

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-ink/5">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>

                {/* Date + CTA */}
                <div className="flex items-center gap-3">
                  <div className="h-3 w-16 bg-gray-200 rounded" />
                  <div className="h-3 w-10 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
