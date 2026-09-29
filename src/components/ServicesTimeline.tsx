"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ServiceIcon from "./ServiceIcon";

type Item = { slug: string; name: string; text: string };

/**
 * Vertical list of services joined by a line that fills in as the section scrolls
 * past, after the reference site's services timeline.
 */
export default function ServicesTimeline({ items }: { items: Item[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      setProgress(Math.min(1, Math.max(0, (mid - r.top) / r.height)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={ref} className="relative">
      {/* Track and fill, running through the centre of the icons */}
      <span aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 w-[2px] bg-rule" />
      <span
        aria-hidden="true"
        className="absolute left-[23px] top-6 w-[2px] bg-gradient-to-b from-sky via-blue to-navy"
        style={{ height: `calc((100% - 3rem) * ${progress})` }}
      />
      {items.map((s) => (
        <li key={s.slug} className="relative grid grid-cols-[48px_1fr] gap-6 pb-14 last:pb-0 sm:gap-8">
          <Link href={`/what-we-do/${s.slug}`} aria-hidden="true" tabIndex={-1} className="relative bg-paper py-1">
            <ServiceIcon slug={s.slug} size={48} />
          </Link>
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.01em]">
              <Link href={`/what-we-do/${s.slug}`} className="hover:text-sky">
                {s.name}
              </Link>
            </h3>
            <p className="mt-2.5 max-w-lg text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
            <Link href={`/what-we-do/${s.slug}`} className="more mt-4 text-ink hover:text-sky">
              Read more <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
