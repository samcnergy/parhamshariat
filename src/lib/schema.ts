import { siteConfig, siteUrl } from "./data/site";
import type { Book, BookFaq } from "./data/books";
import { seriesName } from "./data/books";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    url: siteUrl,
    jobTitle: "Founder & Chief Strategy Officer, ReTHINK CNERGY",
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
    address: {
      "@type": "PostalAddress",
      addressRegion: "California",
      addressCountry: "US",
    },
  };
}

export function serviceSchemas() {
  const services = [
    {
      name: "Business Strategy Consulting",
      description:
        "Strategic identity, innovation culture, and long-term architecture for startups and growth-stage businesses, as outlined in The Business Strategy Plan.",
    },
    {
      name: "Generative Engine Optimization (GEO)",
      description:
        "Structuring a business's digital presence and content so AI platforms like ChatGPT, Claude, and Perplexity can find, trust, and recommend it, based on the GEO framework in The Complete Guide to Dominating AI Search.",
    },
  ];
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: "Worldwide",
  }));
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
    ...(book.isPlaceholder ? {} : { description: book.shortDescription }),
    isPartOf: {
      "@type": "BookSeries",
      name: seriesName,
      position: book.seriesPosition,
    },
    offers: {
      "@type": "Offer",
      url: book.buyUrl,
      availability: "https://schema.org/InStock",
    },
  };
}
