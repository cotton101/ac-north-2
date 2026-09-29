import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Page not found",
    description: "The page you were looking for does not exist or has moved.",
    image: "/og/home.jpg",
  }),
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="wrap pb-24 pt-36 md:pb-32 md:pt-48">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Page not found</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        The page you were looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
        <Link href="/" className="text-link">Home</Link>
        <Link href="/what-we-do" className="text-link">What we do</Link>
      </div>
    </div>
  );
}
