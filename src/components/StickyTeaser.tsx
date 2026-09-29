"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type TeaserItem = {
  tags: string[];
  title: string;
  body: string;
  href: string;
  visual: ReactNode;
};

/**
 * Copy scrolls on the left while the picture on the right stays pinned and changes
 * to match, after the reference site's case-study section. On small screens each
 * picture sits above its copy instead.
 */
export default function StickyTeaser({ items }: { items: TeaserItem[] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid lg:grid-cols-2">
      <div>
        {items.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="flex flex-col justify-center border-b border-rule last:border-b-0 lg:min-h-screen lg:border-b-0"
          >
            <div className="aspect-[4/3] overflow-hidden lg:hidden">{item.visual}</div>
            <div
              className={`px-5 py-12 transition-opacity duration-500 sm:px-8 lg:py-0 lg:pl-12 lg:pr-16 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] ${
                active === i ? "lg:opacity-100" : "lg:opacity-40"
              }`}
            >
              <ul className="flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <li key={t} className="rounded-full border border-ink/40 px-3 py-1 text-[0.6875rem] font-medium">
                    {t}
                  </li>
                ))}
              </ul>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.01em] sm:text-4xl">{item.title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted">{item.body}</p>
              <Link href={item.href} className="more mt-6 text-sky hover:text-accent-deep">
                Read more <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pinned picture */}
      <div className="hidden lg:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.title}
              aria-hidden={active !== i}
              className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
                active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            >
              {item.visual}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
