# Changes from the SEO guides

The site was reworked to describe the service as set out in two guides:

- *BM Challenge Official Document*
- *New Local SEO Clients For ProfResults* (client workflow)

In short, the service is local SEO aimed at the top 3 map results on Google. It is built on the three things the guides say Google ranks local businesses on: the Google Business Profile, the website and citations. It also covers a weekly routine and an update every Friday.

## Services

File: `src/content/services.ts`

The seven general SEO services were replaced by six that follow the client workflow:

| Before | After |
|---|---|
| Technical SEO | — (folded into Website SEO) |
| On-page SEO | Website SEO (`/what-we-do/website-seo`) |
| Content | Service and area pages (`/what-we-do/service-and-area-pages`) |
| Local SEO | Google Business Profile (`/what-we-do/google-business-profile`) |
| Links and authority | Citations (`/what-we-do/citations`) |
| SEO audits | Benchmarking (`/what-we-do/benchmarking`) |
| Reporting | Weekly updates (`/what-we-do/weekly-updates`) |

The old service URLs no longer exist. The site has not launched, so nothing links to them.

What each service covers, from the guides:

- **Benchmarking:** agree the main search term, run a ranking map across the area, compare reviews, photos, categories and services with the top 10, check the profile and website, look for spam listings.
- **Google Business Profile:** main category plus up to three more, complete every section, a full services list (up to 99) with descriptions for the top 20, questions and answers, weekly posts and photos, consistent details, report fake listings.
- **Website SEO:** page title and main heading naming the trade and town, business name, address and phone number on every page, an embedded map, local business structured data, indexing checked.
- **Service and area pages:** a page for each main service and each area covered, linked together, and indexed.
- **Citations:** Apple Business Connect, Bing Places, Yelp and Foursquare, directories that rank for the search term, competitor listings, consistent details, social profiles matched.
- **Weekly updates:** an update every Friday, and a monthly ranking map compared with the start.

## Pages

### Home — `src/app/page.tsx`
- Label changed from "Search engine optimisation" to "Local SEO".
- Intro: "top 3 Google results" became "top 3 on Google Maps and local search". The headline "Top 3 on Google in one week." is unchanged.
- The "What we do" intro now reads: "The top 3 businesses on Google get around 70% of the traffic. Google ranks local businesses on three things: your Google Business Profile, your website and your listings on other sites. We work on all three."
- The week-one and monthly summaries describe the new process.
- The "Who we work with" list now covers trades and home services; tree surgeons, landscapers and cleaners; clinics and practices; and weddings, catering and events.

### What we do — `src/app/what-we-do/page.tsx`
- New section, "How Google ranks local businesses". It explains the map results, includes the 70% traffic figure, lists the three pillars with links, and notes that closeness to the searcher also counts.
- The services grid now shows the six new services.

### Service pages — `src/app/what-we-do/[slug]/page.tsx`
- The Benchmarking page gets a "What a ranking map shows" section with a before-and-aim ranking map (`src/components/HeatmapDiagram.tsx`).

### How we work — `src/app/how-we-work/page.tsx`
- Week one: Day 1 access and search term → Days 1–2 benchmark → Days 2–3 Google Business Profile → Days 3–4 website → Days 4–5 citations → end of week, top 3.
- Monthly: profile posts, photos and reviews; service and area pages; citations; Friday updates and a monthly ranking map.
- "Why the work is ongoing" now points to competitors and to Google looking for an active business (reviews, posts, photos). The claim that Google changes its rankings many times a year was removed, because the guides say local ranking has barely changed in a decade.

### Who we work with — `src/app/who-we-work-with/page.tsx`
- The business types now follow the trades named in the guides. Online shops were removed.
- New section, "Where you can rank": you rank around your own location, and a distant town needs a location there or ads.
- "While we work, two things help": regular Google reviews and weekly photos.

### About — `src/app/about/page.tsx`
- Now describes AC North as a local SEO company working on the three pillars.
- New principles:
  - We follow Google's rules.
  - We fix the basics first.
  - We complete what others leave out.
  - We keep you informed every Friday.

### FAQ — `src/content/faq.ts`, `src/app/faq/page.tsx`

New questions:
- What is local SEO?
- What is a Google Business Profile?
- Can you rank me in a town I'm not based in?
- Is there anything I should do while you work?
- Do you follow Google's rules?

Updated answers:
- **Which search terms will you target?** The main term is usually your trade and your town. The services list and pages widen the reach.
- **How will I know it's working?** An update every Friday and a monthly ranking map.
- **Does this help with Bing and other search engines?** It mentions Bing Places and Apple Maps.
- **What's the difference between SEO and paid ads?** It mentions the map results.

The answers written by the owner are unchanged:
- What is SEO?
- How quickly will I rank?
- Why is SEO ongoing?
- Do I need a new website?
- What do you need from me?
- Will you make changes to my website?

### Diagram — `src/components/ResultsDiagram.tsx`
- It now shows a local search: a map with three numbered businesses and the three listings, above the normal results. Caption: "For local searches, Google shows three businesses on a map above the normal results."

### Site-wide
- `src/lib/site.ts`: the site description now says local SEO and Google Maps.
- `src/app/layout.tsx`: the Organization `knowsAbout` now lists local SEO, Google Business Profile optimisation, local citations and on-page SEO.
- `src/components/Footer.tsx`, `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`: "Search engine optimisation" became "Local SEO".

## Left out on purpose

- **AI-generated photos with location tags:** this breaks Google's rules. The site only mentions photos of real work.
- **Tool names, pricing, the "BEST…" title formula and competitor exclusivity:** left out so the site does not commit to terms that have not been decided.

## Open points

- **Timeline:** the guides guarantee top 3 on Maps within 90 days and plan the work over 12 weeks. The site says top 3 in one week.
- **"Will you make changes to my website?":** the answer says nothing about how the site looks will change. The website work adds business details to every page, a map and new pages.
- **"What do you need from me?":** the answer ends "We handle the rest". The FAQ and Who we work with page also ask clients for reviews and photos.
- **The 70% traffic figure:** keep a source for it.
