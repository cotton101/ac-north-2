import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

/**
 * Full document and social metadata for one page.
 * openGraph and twitter are returned complete: Next.js replaces those objects
 * rather than merging them, so a partial object would drop the site name and locale.
 */
export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  /** A short title, run through the `%s | AC North` template, or an absolute title for the home page. */
  title: string | { absolute: string };
  description: string;
  /** Canonical path, such as `/about`. Omit on the 404 page. */
  path?: string;
  /** Snapshot in `public`, such as `/og/about.jpg`. */
  image: string;
}): Metadata {
  const resolvedTitle = typeof title === "string" ? `${title} | ${SITE_NAME}` : title.absolute;
  const url = path === undefined ? undefined : path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const images = [
    {
      url: image,
      width: OG_WIDTH,
      height: OG_HEIGHT,
      alt: resolvedTitle,
      type: "image/jpeg",
    },
  ];

  return {
    title,
    description,
    ...(path !== undefined ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      ...(url ? { url } : {}),
      title: resolvedTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [{ url: image, alt: resolvedTitle }],
    },
  };
}
