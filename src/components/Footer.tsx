import Link from "next/link";
import { services } from "@/content/services";
import Logo from "./Logo";
import ServiceIcon from "./ServiceIcon";

const COMPANY = [
  { href: "/what-we-do", label: "What we do" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/who-we-work-with", label: "Who we work with" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-paper text-ink">
      {/* Coloured light along the bottom edge, as on the reference footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(60%_100%_at_50%_100%,rgb(1_107_226/0.45),transparent_75%)]"
      />
      <div className="wrap relative grid gap-12 pb-14 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-6">
          <Logo size="lg" />
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
            Local SEO. We get your business into the top 3 on Google Maps and local search within a
            week, then keep you there every month.
          </p>
        </div>

        <nav aria-label="Services" className="md:col-span-3">
          <p className="eyebrow">Services</p>
          <ul className="mt-5 grid gap-2.5 text-[0.9375rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/what-we-do/${s.slug}`} className="inline-flex items-center gap-3 font-medium hover:text-sky">
                  <ServiceIcon slug={s.slug} size={22} />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-3">
          <p className="eyebrow">Company</p>
          <ul className="mt-5 grid gap-2.5 text-[0.9375rem]">
            {COMPANY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-medium hover:text-sky">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="wrap relative">
        <div className="flex flex-col gap-2 border-t border-rule py-7 text-[0.8125rem] text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} AC North. All rights reserved.</p>
          <p>Local SEO</p>
        </div>
      </div>
    </footer>
  );
}
