import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ResultsDiagram from "@/components/ResultsDiagram";
import NextPage from "@/components/NextPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "What we do",
  description:
    "AC North does local SEO: benchmarking, Google Business Profile, website SEO, service and area pages, citations and weekly updates.",
  path: "/what-we-do",
  image: "/og/what-we-do.jpg",
});

const PILLARS = [
  {
    title: "Your Google Business Profile",
    body: "Your listing on Google Maps. Its categories, services, reviews and photos carry the most weight.",
    href: "/what-we-do/google-business-profile",
  },
  {
    title: "Your website",
    body: "Google checks your site to confirm what you do and where. The page title, headings and business details matter most.",
    href: "/what-we-do/website-seo",
  },
  {
    title: "Citations",
    body: "Listings of your business on other trusted sites, such as Apple Maps, Bing and trade directories, with the same details everywhere.",
    href: "/what-we-do/citations",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/what-we-do", label: "What we do" }]}
        title="What we do"
        lead="We do local SEO. We get your business into the top 3 on Google when people near you search for what you offer."
      />

      <Section title="How Google ranks local businesses">
        <div className="grid gap-10 lg:grid-cols-8">
          <div className="lg:col-span-5">
            <div className="space-y-5 text-[1.0625rem] leading-[1.7]">
              <p>
                When someone searches for a service near them, Google shows a map with three
                businesses above the normal results. Those top 3 businesses get around 70% of the
                traffic.
              </p>
              <p>
                Google picks them based on how close each business is to the person searching, and on
                three things we can work on:
              </p>
            </div>
            <ol className="mt-8 border-t border-slate">
              {PILLARS.map((p, i) => (
                <li key={p.title} className="border-b border-rule">
                  <Link href={p.href} className="group grid grid-cols-[2.5rem_1fr] gap-2 py-5">
                    <span className="pt-1 font-mono text-[0.8125rem] text-accent tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold tracking-[-0.01em] group-hover:text-accent">
                        {p.title}
                      </span>
                      <span className="mt-1 block leading-relaxed text-muted">{p.body}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[1.0625rem] leading-[1.7]">
              Most local businesses leave gaps in all three. Google rewards complete, accurate
              information, so filling those gaps is what moves you up.
            </p>
          </div>
          <ResultsDiagram className="max-w-xs lg:col-span-3" />
        </div>
      </Section>

      <section className="border-b border-rule" aria-labelledby="services-title">
        <div className="wrap py-14 md:py-20">
          <h2 id="services-title" className="text-[1.375rem] font-semibold tracking-[-0.015em]">
            The work
          </h2>
          <ul className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug} className="bg-paper">
                <Link
                  href={`/what-we-do/${s.slug}`}
                  className="group flex h-full flex-col p-6 hover:bg-stone md:p-8"
                >
                  <span className="font-mono text-[0.8125rem] text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-6 text-xl font-semibold tracking-[-0.015em] group-hover:text-accent">
                    {s.name}
                  </span>
                  <span className="mt-3 leading-relaxed text-muted">{s.summary}</span>
                  <span className="mt-auto pt-6 text-[0.9375rem] text-accent">
                    Read more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NextPage
        href="/how-we-work"
        label="How we work"
        note="What happens in the first week, and every month after."
      />
    </>
  );
}
