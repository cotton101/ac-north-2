# FAQ card photos

The three cards in the home page's "Plain answers to common questions" section now use candid, low-light photos that match each question. They replace the earlier photos, which had white or bright backgrounds.

File: `src/app/page.tsx` (`FAQ_PHOTOS`)

| Card | Photo | Unsplash ID |
|---|---|---|
| What is local SEO? | A woman at dusk, searching on her phone | `photo-1506377711776-dbdc2f3c20d9` |
| How quickly will I rank? | A man checking his phone in a dimly lit café | `photo-1550614806-51d8db524675` |
| Why is SEO ongoing? | A woman working late at her laptop | `photo-1758520144864-fb42371d9e60` |

- All three are from Unsplash, free for commercial use under the Unsplash licence, and are served from `images.unsplash.com` (allowed in `next.config.ts`).
- Each photo has its own crop position so the person stays in frame at every screen size.
- No colour wash sits over the photos; they show in their natural colours.
- The cards still zoom in slightly on hover.

## Other change

- `src/app/layout.tsx`: `suppressHydrationWarning` on `<body>`. Some browser extensions (such as Liner) add attributes to the body before the page loads, which made the development "1 Issue" badge appear. It does not affect the site.
