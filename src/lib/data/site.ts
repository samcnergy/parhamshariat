export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://parhamshariat.com";

export const siteConfig = {
  name: "Parham Shariat",
  tagline: "Teaching Businesses How to Get Found by AI",
  // Verbatim positioning statement — must match every footer, schema block, and external profile (LinkedIn, Amazon).
  positioning:
    "Parham Shariat is a business strategist and author who developed the Generative Engine Optimization (GEO) methodology that helps businesses get recommended by AI platforms like ChatGPT, Claude, and Perplexity.",
  email: "parham@rethinkcnergy.com",
  contactEmail: "parhamshariat@gmail.com",
  phone: "+1-619-626-7545",
  phoneDisplay: "+1 619 626 7545",
  social: {
    linkedin: "https://www.linkedin.com/in/parhamshariat",
    instagram: "https://www.instagram.com/parhamshariat/",
    amazonAuthor:
      "https://www.amazon.com/stores/author/B0GCJJCQBL?ccs_id=d3a0c709-41d4-4ddd-97be-be95ff1aa97b",
    substack: "https://substack.com/@parhamshariat1",
  },
  external: {
    rethinkCnergy: "https://www.rethinkcnergy.com",
    powerfulBlueprints: "https://www.powerfulblueprints.com",
    siteMarketing: "https://www.sitemarketing.com",
  },
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Speaking", href: "/speaking" },
  { label: "Social Responsibility", href: "/social-responsibility" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Speaking & Consulting", href: "/speaking" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Insights", href: "/insights" },
  { label: "Social Responsibility", href: "/social-responsibility" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
] as const;
