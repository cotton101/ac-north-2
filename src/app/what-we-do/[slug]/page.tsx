import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NumberedList from "@/components/NumberedList";
import JsonLd from "@/components/JsonLd";
import HeatmapDiagram from "@/components/HeatmapDiagram";
import { pageMeta } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/what-we-do/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/what-we-do/${service.slug}`,
    image: `/og/${service.slug}.jpg`,
  });
}

export default async function ServicePage(props: PageProps<"/what-we-do/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter((s) => s !== undefined);
  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHeader
        crumbs={[
          { href: "/what-we-do", label: "What we do" },
          { href: `/what-we-do/${service.slug}`, label: service.name },
        ]}
        title={service.name}
        lead={service.summary}
      />

      <Section title="What it is">
        <p className="max-w-[65ch] text-[1.0625rem] leading-[1.7]">{service.intro}</p>
      </Section>

      {service.diagram === "heatmap" && (
        <Section title="What a ranking map shows">
          <HeatmapDiagram />
        </Section>
      )}

      <Section title="Why it matters">
        <ul className="max-w-[65ch] space-y-4 text-[1.0625rem] leading-[1.7]">
          {service.why.map((w) => (
            <li key={w} className="relative pl-6">
              <span aria-hidden="true" className="absolute left-0 top-[0.8em] h-px w-3 bg-accent" />
              {w}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What we do">
        <NumberedList items={service.whatWeDo} />
      </Section>

      <Section title="When it happens" tone="stone">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="border-t border-slate pt-5">
            <p className="eyebrow">Week one</p>
            <ul className="mt-4 space-y-3 leading-relaxed">
              {service.firstWeek.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-slate pt-5">
            <p className="eyebrow">Every month after</p>
            <ul className="mt-4 space-y-3 leading-relaxed">
              {service.monthly.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="What you get">
        <p className="max-w-[60ch] text-xl leading-relaxed tracking-[-0.01em]">{service.outcome}</p>
      </Section>

      <section aria-labelledby="related-title" className="border-b border-rule">
        <div className="wrap py-14 md:py-20">
          <h2 id="related-title" className="eyebrow">
            Related
          </h2>
          <ul className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="bg-paper">
                <Link href={`/what-we-do/${r.slug}`} className="group block h-full p-6 hover:bg-stone">
                  <span className="text-lg font-semibold tracking-[-0.01em] group-hover:text-accent">
                    {r.name}
                  </span>
                  <span className="mt-2 block text-[0.9375rem] leading-relaxed text-muted">{r.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[0.9375rem] text-muted">
            Next service:{" "}
            <Link href={`/what-we-do/${next.slug}`} className="text-link">
              {next.name}
            </Link>
            <span className="mx-3 text-rule">|</span>
            <Link href="/how-we-work" className="text-link">
              How we work
            </Link>
          </p>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url: `${SITE_URL}/what-we-do/${service.slug}`,
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />
    </>
  );
}
