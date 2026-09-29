# AC North (v2)

Marketing site for AC North, a local SEO company. Layout and effects modelled on
mintobranding.com, in the blue AC North colour scheme. Next.js 16 (App Router),
Tailwind CSS 4, fully static. The original site is in the `ac-north` repo.

## Develop

```bash
npm install
npm run dev -- -p 3006
```

## Structure

- `src/app/page.tsx` — home page: hero, services timeline, platforms band, week-one pinned section, FAQ cards
- `src/components/Intro.tsx` — opening screen (once per browser session)
- `src/components/Header.tsx` — fixed header and full-screen menu
- `src/components/SpinningLogo.tsx` — the 3D logo in the hero
- `src/components/ServicesTimeline.tsx` — services list with the line that fills on scroll
- `src/components/StickyTeaser.tsx` / `StepVisual.tsx` — copy that scrolls beside a pinned picture
- `src/content/services.ts` — the six service pages (copy lives here)
- `src/content/faq.ts` — FAQ questions and answers
- `src/lib/site.ts` — site name, description and `SITE_URL`

FAQ card photos are from Unsplash (free for commercial use) and are served from
images.unsplash.com.

Set `SITE_URL` in `src/lib/site.ts` to the live domain before launch.
