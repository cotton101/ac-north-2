import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NumberedList from "@/components/NumberedList";
import NextPage from "@/components/NextPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Who we work with",
  description:
    "AC North works with local businesses: trades and home services, tree surgeons, landscapers and cleaners, clinics and practices, and wedding and event businesses.",
  path: "/who-we-work-with",
  image: "/og/who-we-work-with.jpg",
});

const TYPES = [
  {
    title: "Trades and home services",
    body: "Builders, renovation firms, roofers, gas and heating engineers, locksmiths, and paving and fencing contractors.",
  },
  {
    title: "Outdoor and cleaning services",
    body: "Tree surgeons, landscapers, gardeners, and pressure washing and cleaning companies.",
  },
  {
    title: "Clinics and practices",
    body: "Physiotherapists, chiropractors, skincare clinics and similar practices, where people search for someone they can trust nearby.",
  },
  {
    title: "Weddings, catering and events",
    body: "Bridal businesses, caterers and private dining, where customers compare several local options before choosing.",
  },
  {
    title: "Professional services",
    body: "Surveyors, accountants and other firms that serve clients in a local area.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/who-we-work-with", label: "Who we work with" }]}
        title="Who we work with"
        lead="Local businesses whose customers search for them on Google. If people type your trade and your town into Google, this work is for you."
      />

      <Section title="Types of business">
        <ul className="border-t border-slate">
          {TYPES.map((t) => (
            <li key={t.title} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{t.title}</h3>
              <p className="max-w-[55ch] leading-relaxed text-muted">{t.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Where you can rank">
        <div className="max-w-[65ch] space-y-5 text-[1.0625rem] leading-[1.7]">
          <p>
            Google takes into account how close a business is to the person searching. Local SEO
            ranks you across the area around your location: your town and the places near it.
          </p>
          <p>
            A town some distance from your address is much harder to win against businesses based
            there. If you need customers further away, a location there or paid ads is usually the
            better option.
          </p>
        </div>
      </Section>

      <Section title="What we need from you" tone="stone">
        <NumberedList
          items={[
            "Access to your website, or to whoever manages it.",
            "Access to your Google Business Profile. We can set one up if you do not have one.",
            "A short conversation about your services and customers.",
          ]}
        />
        <h3 className="mt-10 text-lg font-semibold tracking-[-0.01em]">While we work, two things help</h3>
        <ul className="mt-4 max-w-[60ch] space-y-3 leading-relaxed text-muted">
          <li>Ask your customers for Google reviews regularly. A steady flow matters.</li>
          <li>Send us photos of your work each week so we can add them to your profile.</li>
        </ul>
      </Section>

      <NextPage href="/about" label="About AC North" note="How we approach local SEO." />
    </>
  );
}
