import type { Metadata } from "next";
import { faqs } from "@/content/faq";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import NextPage from "@/components/NextPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Answers to common questions about local SEO and AC North: how quickly you will rank, Google Business Profiles, where you can rank and what we need from you.",
  path: "/faq",
  image: "/og/faq.jpg",
});

export default function Faq() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/faq", label: "FAQ" }]}
        title="Frequently asked questions"
        lead="Plain answers about local SEO and how we work."
      />

      <section className="border-b border-rule">
        <div className="wrap grid py-14 md:grid-cols-12 md:gap-10 md:py-20">
          <div className="border-t border-slate md:col-span-8 md:col-start-5">
            {faqs.map((f) => (
              <details key={f.question} className="group border-b border-rule">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold tracking-[-0.01em] hover:text-accent [&::-webkit-details-marker]:hidden">
                  <span>{f.question}</span>
                  <span aria-hidden="true" className="w-4 shrink-0 text-center font-normal text-muted">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <div className="max-w-[60ch] space-y-4 pb-6 leading-relaxed text-muted">
                  {f.answer.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <NextPage href="/what-we-do" label="What we do" note="The three things Google looks at, and the work we do on each." />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") },
          })),
        }}
      />
    </>
  );
}
