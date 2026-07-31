import { siteConfig, siteUrl } from "./data/site";
import type { Book, BookFaq } from "./data/books";
import { coreSeriesName } from "./data/books";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    url: siteUrl,
    jobTitle: "Business Strategist & Author",
    description: siteConfig.positioning,
    worksFor: {
      "@id": `${siteUrl}/#organization`,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.amazonAuthor,
      siteConfig.social.substack,
      siteConfig.external.powerfulBlueprints,
    ].filter(Boolean),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ReTHINK CNERGY",
    url: siteConfig.external.rethinkCnergy,
    founder: {
      "@id": `${siteUrl}/#person`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqPageSchema(faqs: BookFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function bookSchema(book: Book) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    alternateName: book.subtitle,
    url: `${siteUrl}/books/${book.slug}`,
    image: `${siteUrl}${book.coverImage.src}`,
    author: {
      "@id": `${siteUrl}/#person`,
    },
    ...(book.isPlaceholder
      ? {}
      : { description: book.shortDescription }),
    ...(book.inCoreSeries
      ? {
          isPartOf: {
            "@type": "BookSeries",
            name: coreSeriesName,
            ...(book.seriesPosition
              ? { position: book.seriesPosition }
              : {}),
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      url: book.buyUrl,
      availability: "https://schema.org/InStock",
    },
  };
}
