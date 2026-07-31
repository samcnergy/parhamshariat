import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data/site";
import { books } from "@/lib/data/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/books`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/speaking`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/testimonials`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/insights`, changeFrequency: "weekly", priority: 0.5 },
    {
      url: `${siteUrl}/social-responsibility`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    { url: `${siteUrl}/media`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const bookRoutes: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${siteUrl}/books/${book.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...bookRoutes];
}
