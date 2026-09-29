# Implementation plan: metadata and social previews

Implemented. This note is what was built.

## Goal

When someone pastes an AC North URL into iMessage, WhatsApp, Slack, LinkedIn, Facebook, or X, the card should show:

- the page title
- the page description
- that page’s own URL
- a snapshot of the page itself, the top of the real site, not a designed slogan card

Search engines should get the same titles, descriptions, and canonical URLs they already have, plus a large-image hint and a logo on the organisation record.

## Why there is no preview today

`src/app/layout.tsx` sets `metadataBase`, a title template, a description, and a partial Open Graph block (`type`, `siteName`, `locale` only). Twitter is only `summary_large_image`.

Next.js does not copy the document title or description into `og:title`, `og:description`, `twitter:title`, or `twitter:description`. Those tags are omitted unless `openGraph` and `twitter` set them. `og:url` is also omitted. It was removed earlier because a single root `openGraph.url` was applied to every inner page. Platforms that build a card from Open Graph therefore have a site name and, at best, an image, and no page title, description, or URL.

The image that does exist is generated in `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx`. Both draw a paper-coloured card that says “Top 3 on Google in one week.” That is not a snapshot of the site. Those routes also have to run at request or build time. A static image file is what WhatsApp, Facebook, and LinkedIn fetch reliably.

Icons are already in place (`src/app/favicon.ico`, `icon.png`, `apple-icon.png`). Leave them.

## Snapshot images

Capture one above-the-fold screenshot per public URL, from a production build so the Next.js dev badge is not in the picture.

1. `npm run build` and `npm run start`.
2. Open each URL in headless Edge at **1200×630**, scale 1, after Inter has loaded. That frame is the social card: logo, navigation, and the page heading. A full-page capture is too tall and gets cropped into an unreadable strip.
3. Export JPEG, quality high enough to stay sharp and **under 300KB**. WhatsApp drops previews above that. 1200×630 is the size Facebook, LinkedIn, and X `summary_large_image` expect.
4. Save under `public/og/`:

| File | Page |
| --- | --- |
| `home.jpg` | `/` |
| `what-we-do.jpg` | `/what-we-do` |
| `how-we-work.jpg` | `/how-we-work` |
| `who-we-work-with.jpg` | `/who-we-work-with` |
| `about.jpg` | `/about` |
| `faq.jpg` | `/faq` |
| `benchmarking.jpg` | `/what-we-do/benchmarking` |
| `google-business-profile.jpg` | `/what-we-do/google-business-profile` |
| `website-seo.jpg` | `/what-we-do/website-seo` |
| `service-and-area-pages.jpg` | `/what-we-do/service-and-area-pages` |
| `citations.jpg` | `/what-we-do/citations` |
| `weekly-updates.jpg` | `/what-we-do/weekly-updates` |

Alt text for each image is the page title plus “AC North”, for example `About | AC North`.

Delete `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx` once the static files are wired up. If both the generator and an `openGraph.images` entry exist, Next.js keeps the metadata entry and ignores the file convention, so the generators would only add unused routes.

`metadataBase` is already `https://www.acnorth.co.uk`, so image paths such as `/og/home.jpg` resolve to absolute `https://www.acnorth.co.uk/og/home.jpg`. Crawlers need that absolute HTTPS URL.

## Tags every page must emit

Shared, from the root layout:

- `metadataBase`: `https://www.acnorth.co.uk` (already set in `src/lib/site.ts`)
- `title.template`: `%s | AC North` (already set)
- `applicationName`: `AC North`
- `robots`: `index, follow`, and `googleBot` with `max-image-preview: large` so Google can use the snapshot
- `openGraph.siteName`: `AC North`
- `openGraph.locale`: `en_GB`
- `openGraph.type`: `website`

Per page, in both the document head and the social tags:

| Tag | Value |
| --- | --- |
| `<title>` | Existing page title, passed through the template. Home stays the current absolute title: `AC North — Top 3 on Google in one week`. |
| `description` | The description that page already exports. Home uses `SITE_DESCRIPTION`. |
| `link rel="canonical"` | That page’s path, as today. |
| `og:title` / `twitter:title` | The resolved title, including `\| AC North` on inner pages. |
| `og:description` / `twitter:description` | The same description. |
| `og:url` | The absolute URL of **this** page. |
| `og:image` / `twitter:image` | This page’s snapshot. |
| `og:image:width` / `og:image:height` | `1200` and `630`. |
| `og:image:type` | `image/jpeg` |
| `og:image:alt` / `twitter:image:alt` | The alt text above. |
| `twitter:card` | `summary_large_image` |

`og:url` must be set on each page. Setting it only in the root layout makes every share point at the homepage. That was the previous bug.

Do not set `twitter:site` or `twitter:creator`. The site has no X handle in the codebase. A guessed handle would point the card at the wrong account.

Do not add a `keywords` meta tag. Google does not use it.

Do not add Facebook or Search Console verification tags. There are no verification codes in the project.

## How to set it without wiping the parent tags

Next.js shallow-merges metadata. A page that sets `openGraph: { url }` **replaces** the whole root `openGraph` object, including `siteName`, `locale`, and images.

Add `src/lib/metadata.ts` with one helper, used by every page:

```ts
pageMeta({
  title,        // string, or { absolute } for the home page
  description,
  path,         // canonical path, e.g. "/about"
  image,        // "/og/about.jpg"
  imageAlt,
})
```

The helper returns `title`, `description`, `alternates.canonical`, and a **complete** `openGraph` and `twitter` object (site name, locale, type, url, title, description, image width, height, type, and alt). Pages spread nothing else into `openGraph`.

`src/app/what-we-do/[slug]/page.tsx` already builds metadata in `generateMetadata`. It should call the same helper with `service.metaTitle`, `service.metaDescription`, `/what-we-do/${service.slug}`, and `/og/${service.slug}.jpg`.

`src/app/not-found.tsx` gets a title and description, `robots: { index: false, follow: false }`, and the home snapshot. A missing URL should not be offered as a normal share card.

## Pages

Descriptions stay as they are. This work attaches social fields. It does not rewrite the copy.

| Route | Title source | Image |
| --- | --- | --- |
| `/` | Absolute: current default title | `home.jpg` |
| `/what-we-do` | `What we do` | `what-we-do.jpg` |
| `/how-we-work` | `How we work` | `how-we-work.jpg` |
| `/who-we-work-with` | `Who we work with` | `who-we-work-with.jpg` |
| `/about` | `About` | `about.jpg` |
| `/faq` | `FAQ` | `faq.jpg` |
| `/what-we-do/[slug]` | `service.metaTitle` | `public/og/{slug}.jpg` |

## Structured data

Keep the existing JSON-LD.

- Root `Organization` and `WebSite` in `src/app/layout.tsx`.
- `BreadcrumbList` from `PageHeader`.
- `Service` on each service page.
- `FAQPage` on `/faq`.

Add only fields we can point at a real asset:

- `Organization.logo`: `https://www.acnorth.co.uk/ac-north-logo.png` (`public/ac-north-logo.png` already exists).
- `Organization.image`: the home snapshot URL.

Leave out `sameAs`, telephone, email, and postal address. None of those are on the site. Inventing social profile URLs would publish false structured data.

## Files

| File | Change |
| --- | --- |
| `public/og/*.jpg` | New snapshots. |
| `src/lib/metadata.ts` | New `pageMeta` helper. |
| `src/lib/site.ts` | No URL or description change. |
| `src/app/layout.tsx` | Robots, `applicationName`, organisation logo and image. Root `openGraph` / `twitter` stay as the defaults the helper repeats, so a page that forgets the helper still has a card type and locale. |
| `src/app/page.tsx` | Home calls `pageMeta`. |
| `src/app/about/page.tsx`, `faq/page.tsx`, `how-we-work/page.tsx`, `what-we-do/page.tsx`, `who-we-work-with/page.tsx` | Replace the local `metadata` export with `pageMeta`. |
| `src/app/what-we-do/[slug]/page.tsx` | `generateMetadata` returns `pageMeta`. |
| `src/app/not-found.tsx` | Title, description, noindex, home image. |
| `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx` | Delete. |

`robots.ts` and `sitemap.ts` stay as they are.

## Order of work

1. Production build, then capture and compress the twelve JPEGs.
2. Add `pageMeta` and switch the home page first. Check the home `<head>` before touching the rest.
3. Switch the five static pages and the service `generateMetadata`.
4. Add the 404 metadata and the organisation logo.
5. Delete the two `ImageResponse` files.
6. Verify, then stop. Do not deploy unless asked.

## Verification

Against `next start`, for `/`, one inner page, one service page, and `/this-page-does-not-exist`:

- View source, not the React tree. Crawlers do not run the app.
- Confirm `og:title`, `og:description`, `og:url`, `og:image`, width, height, type, and alt.
- Confirm `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, and `twitter:image:alt`.
- Confirm `og:url` and the canonical link are that page’s URL, and that an inner page is not `https://www.acnorth.co.uk/`.
- `curl` the image URL and confirm `200`, `Content-Type: image/jpeg`, and a body under 300KB.
- Open the home snapshot and one inner snapshot and confirm they show that page’s heading, with no dev overlay.
- Title, description, and canonical copy match the current page metadata.

Live cards update only after this is deployed. Facebook, LinkedIn, and WhatsApp cache the first fetch. After deploy, refresh with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/), and by re-pasting the URL in WhatsApp. X uses the same card tags; its card validator requires the site to be live.
