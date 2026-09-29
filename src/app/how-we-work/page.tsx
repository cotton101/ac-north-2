import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NextPage from "@/components/NextPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "How we work",
  description:
    "How AC North works: a one-week setup covering your Google Business Profile, website and citations, then weekly work and an update every Friday.",
  path: "/how-we-work",
  image: "/og/how-we-work.jpg",
});

const WEEK_ONE = [
  {
    when: "Day 1",
    title: "Access and search term",
    body: "You give us access to your Google Business Profile and your website. We agree your main search term, usually your trade and your town.",
  },
  {
    when: "Days 1–2",
    title: "Benchmark",
    body: "We record where you rank from points across your area, and compare your profile with the top 10 businesses for your search.",
  },
  {
    when: "Days 2–3",
    title: "Google Business Profile",
    body: "Categories set, every section completed, a full list of your services added with descriptions, and questions and answers added.",
  },
  {
    when: "Days 3–4",
    title: "Website",
    body: "Page title and headings rewritten to name your trade and your town. Your business details, a map and structured data added.",
  },
  {
    when: "Days 4–5",
    title: "Citations",
    body: "Your listings on Apple Maps, Bing, Yelp and Foursquare set up or corrected, so your details match everywhere.",
  },
  {
    when: "End of week",
    title: "Top 3",
    body: "You are in the top 3 for your agreed search terms. Your first Friday update sets out what was done.",
  },
];

const MONTHLY = [
  {
    title: "Google Business Profile",
    body: "Posts and photos every week, and help getting a steady flow of reviews.",
  },
  {
    title: "Service and area pages",
    body: "New pages that show Google what you do and where you do it, linked together.",
  },
  {
    title: "Citations",
    body: "New listings each week on the directories and local sites that matter for your trade.",
  },
  {
    title: "Updates",
    body: "A short update every Friday and a ranking map every month, compared with where you started.",
  },
];

export default function HowWeWork() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/how-we-work", label: "How we work" }]}
        title="How we work"
        lead="Everything needed to reach the top 3 is put in place in your first week. After that, we keep working on it every month."
      />

      <Section title="Week one: setup">
        <ol className="border-t border-slate">
          {WEEK_ONE.map((step) => (
            <li key={step.title} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <span className="font-mono text-[0.8125rem] text-accent sm:pt-1">{step.when}</span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em]">{step.title}</h3>
                <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Every month after: ongoing work" tone="stone">
        <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {MONTHLY.map((m) => (
            <li key={m.title} className="bg-stone p-6">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{m.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Why the work is ongoing">
        <div className="max-w-[65ch] space-y-5 text-[1.0625rem] leading-[1.7]">
          <p>
            Your competitors keep working on their own profiles. Google also looks for signs that a
            business is active: new reviews, posts and photos. A position that is left alone tends
            to slip.
          </p>
          <p>
            The monthly work keeps you in the top 3, and each month adds pages, listings and
            improvements that make your position more secure and extend it to more searches.
          </p>
        </div>
      </Section>

      <NextPage
        href="/who-we-work-with"
        label="Who we work with"
        note="The types of business this suits, and what we need from you."
      />
    </>
  );
}
