import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { faqs } from "@/content/faq";
import ServicesTimeline from "@/components/ServicesTimeline";
import SpinningLogo from "@/components/SpinningLogo";
import StepVisual from "@/components/StepVisual";
import StickyTeaser, { type TeaserItem } from "@/components/StickyTeaser";
import { pageMeta } from "@/lib/metadata";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: { absolute: "AC North — Top 3 on Google in one week" },
  description: SITE_DESCRIPTION,
  path: "/",
  image: "/og/home.jpg",
});

const PLATFORMS = [
  "Google Search",
  "Google Maps",
  "Google Business Profile",
  "Apple Maps",
  "Bing Places",
  "Yelp",
  "Foursquare",
];

const WEEK_ONE: TeaserItem[] = [
  {
    tags: ["Day 1"],
    title: "Access and search term",
    body: "You give us access to your Google Business Profile and your website. We agree your main search term, usually your trade and your town.",
    href: "/how-we-work",
    visual: <StepVisual kind="search" />,
  },
  {
    tags: ["Days 1–2", "Benchmarking"],
    title: "Benchmark",
    body: "We record where you rank from points across your area, and compare your profile with the top 10 businesses for your search.",
    href: "/what-we-do/benchmarking",
    visual: <StepVisual kind="benchmark" />,
  },
  {
    tags: ["Days 2–3", "Profile"],
    title: "Google Business Profile",
    body: "Categories set, every section completed, a full list of your services added with descriptions, and questions and answers added.",
    href: "/what-we-do/google-business-profile",
    visual: <StepVisual kind="profile" />,
  },
  {
    tags: ["Days 3–4", "Website"],
    title: "Website",
    body: "Page title and headings rewritten to name your trade and your town. Your business details, a map and structured data added.",
    href: "/what-we-do/website-seo",
    visual: <StepVisual kind="website" />,
  },
  {
    tags: ["Days 4–5", "Citations"],
    title: "Citations",
    body: "Your listings on Apple Maps, Bing, Yelp and Foursquare set up or corrected, so your details match everywhere.",
    href: "/what-we-do/citations",
    visual: <StepVisual kind="citations" />,
  },
  {
    tags: ["End of week"],
    title: "Top 3",
    body: "You are in the top 3 for your agreed search terms. Your first Friday update sets out what was done.",
    href: "/how-we-work",
    visual: <StepVisual kind="top3" />,
  },
];

const FAQ_PICKS = ["What is local SEO?", "How quickly will I rank?", "Why is SEO ongoing?"];

// Unsplash photos (free for commercial use under the Unsplash licence), served from Unsplash.
const FAQ_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1753351052363-53ce102830eb?w=1200&q=75",
    alt: "A café owner in an apron standing in her shop",
  },
  {
    src: "https://images.unsplash.com/photo-1719937206140-c4b208c78aa7?w=1200&q=75",
    alt: "A man working on a laptop in a bright café",
  },
  {
    src: "https://images.unsplash.com/photo-1624775054619-bf29a387fecc?w=1200&q=75",
    alt: "A smiling woman in a white shirt",
  },
];

export default function Home() {
  const picks = FAQ_PICKS.map((q) => faqs.find((f) => f.question === q)).filter((f) => f !== undefined);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-svh flex-col overflow-hidden">
        {/* Drifting colour behind the hero, after the reference site's gradient */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-[15%] -top-[25%] h-[75vh] w-[60vw] animate-drift rounded-full bg-blue/55 blur-[120px]" />
          <div className="absolute left-[25%] -top-[30%] h-[60vh] w-[45vw] animate-drift rounded-full bg-sky/30 blur-[120px] [animation-delay:-6s]" />
          <div className="absolute -left-[10%] top-[35%] h-[55vh] w-[40vw] animate-drift rounded-full bg-navy/80 blur-[120px] [animation-delay:-12s]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-paper" />
        </div>

        <div className="wrap grid flex-1 items-center gap-10 pb-10 pt-28 md:grid-cols-12 md:pt-32">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 text-[0.8125rem] font-medium">
              <svg width="16" height="16" viewBox="0 0 40 40" aria-hidden="true">
                <path fill="#47b1fb" d="M20 4a12 12 0 0 0-12 12c0 9 12 22 12 22s12-13 12-22A12 12 0 0 0 20 4Zm0 16a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z" />
              </svg>
              Local SEO
            </p>
            <h1 className="mt-5 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-[4.75rem]">
              Top 3 on Google in one week.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/85 sm:text-lg">
              We get your business into the top 3 on Google Maps and local search for your agreed
              search terms within a week. After that, we keep you there with ongoing monthly work.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/what-we-do" className="btn">
                What we do
              </Link>
              <Link href="/how-we-work" className="btn btn-outline">
                How we work
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <SpinningLogo className="mx-auto w-[70%] max-w-[26rem] md:w-full" />
          </div>
        </div>

        <div className="wrap flex items-center justify-between pb-8">
          <p className="text-[0.8125rem] text-muted">Google Maps · Local search · Top 3</p>
          <a href="#services" aria-label="Scroll to services" className="flex h-10 w-6 justify-center rounded-full border-2 border-ink/60 pt-2">
            <span className="h-2 w-1 animate-wheel rounded-full bg-ink" />
          </a>
        </div>
      </section>

      {/* Services: pinned heading, timeline that fills as you scroll */}
      <section id="services" className="scroll-mt-16 py-24 md:py-32" aria-labelledby="services-title">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <p className="eyebrow">Services</p>
              <h2 id="services-title" className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-[2.5rem]">
                Everything Google ranks you on, handled in one place
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                The top 3 businesses on Google get around 70% of the traffic. Google ranks local
                businesses on your Google Business Profile, your website and your listings on other
                sites. We work on all three.
              </p>
              <Link href="/what-we-do" className="btn mt-8">
                What we do
              </Link>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-6">
            <ServicesTimeline items={services.map((s) => ({ slug: s.slug, name: s.name, text: s.intro }))} />
          </div>
        </div>
      </section>

      {/* Where we list you: scrolling band */}
      <section className="overflow-hidden bg-light py-14 text-night" aria-labelledby="platforms-title">
        <p id="platforms-title" className="text-center text-[0.75rem] font-semibold uppercase tracking-[0.14em]">
          Where we get your business seen
        </p>
        <div className="relative mt-8 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <ul className="flex w-max animate-marquee gap-16 pr-16">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <li
                key={i}
                aria-hidden={i >= PLATFORMS.length}
                className="whitespace-nowrap text-2xl font-semibold tracking-[-0.01em] text-[#5b6b82] sm:text-3xl"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Week one: copy scrolls, picture stays */}
      <section aria-labelledby="week-title">
        <div className="wrap pb-4 pt-24 md:pt-32">
          <p className="eyebrow">How we work</p>
          <h2 id="week-title" className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-[2.5rem]">
            Your first week, day by day
          </h2>
        </div>
        <StickyTeaser items={WEEK_ONE} />
      </section>

      {/* FAQ: the light section, like the reference site's blog */}
      <section className="bg-light py-24 text-night md:py-32" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="text-center">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-blue">FAQ</p>
            <h2 id="faq-title" className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-[2.5rem]">
              Plain answers to common questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#4f5d73]">What local SEO is, how quickly it works, and why it carries on.</p>
          </div>

          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {picks.map((f, i) => (
              <li key={f.question}>
                <Link href="/faq" className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#dde6f1]">
                    <Image
                      src={FAQ_PHOTOS[i].src}
                      alt={FAQ_PHOTOS[i].alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold group-hover:text-blue">{f.question}</h3>
                  <p className="mt-2.5 line-clamp-3 text-[0.9375rem] leading-relaxed text-[#4f5d73]">{f.answer[0]}</p>
                  <span className="more mt-4 text-blue">
                    Read more <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 text-center">
            <Link href="/faq" className="btn btn-outline text-night">
              View all questions
            </Link>
          </div>
        </div>
      </section>

      {/* Closing section, in place of the reference site's contact form */}
      <section className="relative isolate overflow-hidden py-24 md:py-32" aria-labelledby="close-title">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -right-[10%] top-[10%] h-[60%] w-[50%] rounded-full bg-blue/40 blur-[120px]" />
          <div className="absolute left-[5%] bottom-0 h-[50%] w-[35%] rounded-full bg-navy/70 blur-[120px]" />
        </div>
        <div className="wrap grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <p className="eyebrow">Next</p>
            <h2 id="close-title" className="mt-4 text-4xl font-semibold uppercase leading-[1.05] sm:text-5xl">
              Top 3 on Google in one week
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Then kept there every month, with an update every Friday and a ranking map every month.
            </p>
          </div>
          <ul className="grid gap-3 md:col-span-6">
            {[
              { href: "/what-we-do", label: "What we do", note: "The six parts of local SEO we handle." },
              { href: "/who-we-work-with", label: "Who we work with", note: "The kinds of business this suits." },
              { href: "/about", label: "About", note: "Who AC North is." },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="card group flex items-center justify-between gap-6 bg-stone/70 p-6 backdrop-blur hover:border-blue"
                >
                  <span>
                    <span className="block text-lg font-semibold">{l.label}</span>
                    <span className="mt-1 block text-[0.9375rem] text-muted">{l.note}</span>
                  </span>
                  <span aria-hidden="true" className="text-xl text-sky transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
