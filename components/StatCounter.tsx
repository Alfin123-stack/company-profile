"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  label: string;
  suffix: string;
}

export default function StatCounter({ end, label, suffix }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    // ✅ guard untuk browser API
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(end);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          const duration = 1500;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;

            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl lg:text-5xl font-bold mb-2">
        {/* hindari locale mismatch */}
        {count}
        {suffix}
      </div>

      <div className="text-sm text-mist">{label}</div>
    </div>
  );
}
