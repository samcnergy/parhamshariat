import type { MetadataRoute } from "next";
import { siteUrl, footerNav } from "@/lib/data/site";
import { books } from "@/lib/data/books";

/** Per-path overrides; anything not listed falls back to the defaults below. */
const priorities: Record<string, number> = {
  "/": 1,
  "/books": 0.9,
  "/about": 0.8,
  "/speaking": 0.6,
  "/media": 0.6,
  "/projects": 0.6,
  "/testimonials": 0.5,
  "/insights": 0.5,
  "/faq": 0.5,
  "/events": 0.5,
  "/contact": 0.5,
  "/social-responsibility": 0.4,
  "/privacy": 0.2,
};

const changeFrequencies: Record<
  string,
  MetadataRoute.Sitemap[number]["changeFrequency"]
> = {
  "/insights": "weekly",
  "/social-responsibility": "yearly",
  "/contact": "yearly",
  "/privacy": "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Built from the footer's route list (plus /privacy, which isn't in the
  // footer nav) so a page added to footerNav is automatically included here.
  const paths = Array.from(
    new Set([...footerNav.map((item) => item.href), "/privacy"]),
  );

  const staticRoutes: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: changeFrequencies[path] ?? "monthly",
    priority: priorities[path] ?? 0.5,
  }));

  const bookRoutes: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${siteUrl}/books/${book.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...bookRoutes];
}
