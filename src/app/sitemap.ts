import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/what-we-do", "/how-we-work", "/who-we-work-with", "/about", "/faq"];
  const servicePages = services.map((s) => `/what-we-do/${s.slug}`);

  return [...pages, ...servicePages].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/what-we-do/") ? 0.8 : 0.7,
  }));
}
