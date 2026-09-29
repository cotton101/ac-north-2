import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NextPage from "@/components/NextPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "About AC North: a local SEO company that follows Google's rules, fixes the basics first, completes what others leave out and sends an update every Friday.",
  path: "/about",
  image: "/og/about.jpg",
});

const PRINCIPLES = [
  {
    title: "We follow Google's rules",
    body: "No fake reviews, keyword-stuffed business names or fake listings. They can get a profile suspended, and a suspended profile does not appear at all.",
  },
  {
    title: "We fix the basics first",
    body: "Most local businesses are held back by the same things: an incomplete profile, a website that does not say what they do or where, and missing or inconsistent listings. These are dealt with first.",
  },
  {
    title: "We complete what others leave out",
    body: "Google rewards complete, accurate information. Most businesses fill in part of their profile and stop. We complete all of it.",
  },
  {
    title: "We keep you informed",
    body: "An update every Friday, so you always know what has been done and what comes next.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/about", label: "About" }]}
        title="About AC North"
        lead="AC North is a local SEO company. We get local businesses into the top 3 on Google and keep them there."
      />

      <Section title="What we focus on">
        <div className="max-w-[65ch] space-y-5 text-[1.0625rem] leading-[1.7]">
          <p>
            We work on the three things Google uses to rank local businesses: your Google Business
            Profile, your website and your listings on other sites. Keeping to these means every
            hour goes into the work that affects where you appear.
          </p>
          <p>
            Each client has an agreed main search term, a one-week setup and ongoing monthly work,
            measured by where they rank across their area.
          </p>
        </div>
      </Section>

      <Section title="How we approach local SEO" tone="stone">
        <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="bg-stone p-6">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <NextPage href="/faq" label="Questions" note="Answers to common questions about local SEO and how we work." />
    </>
  );
}
