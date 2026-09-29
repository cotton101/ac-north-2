"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { services } from "@/content/services";
import Logo from "./Logo";
import ServiceIcon, { SERVICE_COLOURS } from "./ServiceIcon";

const PAGES = [
  { href: "/what-we-do", label: "What we do", note: "The six parts of local SEO we handle, and why each one matters." },
  { href: "/how-we-work", label: "How we work", note: "One week of setup, then ongoing work every month." },
  { href: "/who-we-work-with", label: "Who we work with", note: "Local businesses whose customers search for them on Google." },
  { href: "/about", label: "About", note: "Who AC North is and how we think about local SEO." },
  { href: "/faq", label: "FAQ", note: "Plain answers to the questions we are asked most." },
];

type Preview = { title: string; note: string; slug?: string };

const DEFAULT_PREVIEW: Preview = {
  title: "Top 3 on Google in one week.",
  note: "Local SEO for businesses whose customers search for them on Google.",
};

export default function Header() {
  const pathname = usePathname();
  // The menu is open only on the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);
  const [preview, setPreview] = useState<Preview>(DEFAULT_PREVIEW);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page scrolling behind the menu, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpenOn(null);
    setPreview(DEFAULT_PREVIEW);
  };

  const previewColour = preview.slug ? SERVICE_COLOURS[preview.slug] : "#016be2";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open ? "bg-paper/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between md:h-[5.5rem]">
          <Logo onClick={close} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => (open ? close() : setOpenOn(pathname))}
            className="relative -mr-2 flex h-11 w-11 items-center justify-center"
          >
            <span
              className={`absolute h-[2px] w-7 rounded bg-ink transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-7 rounded bg-ink transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-40 bg-night transition-[opacity,visibility] duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="wrap grid h-full content-start gap-10 overflow-y-auto overscroll-contain pb-10 pt-[6.5rem] md:grid-cols-12 md:content-center md:pt-[5.5rem]">
          {/* Preview panel: changes with the link under the pointer, like the reference menu's pictures */}
          <div className="hidden md:col-span-6 md:block">
            <div className="relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 transition-[background] duration-500"
                style={{
                  background: `radial-gradient(90% 90% at 20% 10%, ${previewColour}cc, #012d6e 55%, #070e1a 100%)`,
                }}
              />
              <div className="relative">
                {preview.slug && <ServiceIcon slug={preview.slug} size={64} />}
                <p className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em]">{preview.title}</p>
                <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink/80">{preview.note}</p>
              </div>
            </div>
          </div>

          <nav aria-label="Main" className="md:col-span-6 md:pl-8">
            <p className="eyebrow">Services</p>
            <ul className="mt-4 grid gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/what-we-do/${s.slug}`}
                    onClick={close}
                    onMouseEnter={() => setPreview({ title: s.name, note: s.summary, slug: s.slug })}
                    onFocus={() => setPreview({ title: s.name, note: s.summary, slug: s.slug })}
                    aria-current={pathname === `/what-we-do/${s.slug}` ? "page" : undefined}
                    style={{ "--c": SERVICE_COLOURS[s.slug] } as CSSProperties}
                    className="flex items-center gap-4 py-1.5 text-2xl font-semibold tracking-[-0.01em] transition-colors hover:text-[var(--c)] aria-[current=page]:text-[var(--c)] sm:text-[1.75rem]"
                  >
                    <ServiceIcon slug={s.slug} size={34} />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-10">Company</p>
            <ul className="mt-4 grid gap-1">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    onClick={close}
                    onMouseEnter={() => setPreview({ title: p.label, note: p.note })}
                    onFocus={() => setPreview({ title: p.label, note: p.note })}
                    aria-current={pathname === p.href ? "page" : undefined}
                    className="block py-1 text-lg font-medium text-ink/85 transition-colors hover:text-sky aria-[current=page]:text-sky"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
