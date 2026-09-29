import Link from "next/link";

/** End-of-page link to the next page in the reading order. */
export default function NextPage({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <div className="wrap py-14 md:py-20">
      <Link
        href={href}
        className="card group flex flex-col gap-4 p-7 hover:border-slate sm:flex-row sm:items-center sm:justify-between md:p-10"
      >
        <span>
          <span className="eyebrow">Next</span>
          <span className="mt-2 block text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">{label}</span>
          <span className="mt-2 block text-muted">{note}</span>
        </span>
        <span className="btn shrink-0 self-start sm:self-center">
          Read on <span aria-hidden="true">→</span>
        </span>
      </Link>
    </div>
  );
}
