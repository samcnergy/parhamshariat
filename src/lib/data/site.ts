export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://parhamshariat.com";

export const siteConfig = {
  name: "Parham Shariat",
  tagline: "Author, The Business Strategy Series",
  // Verbatim positioning statement — must match every footer, schema block, and external profile (LinkedIn, Amazon).
  positioning:
    "Parham Shariat is the author of The Business Strategy Series and Founder & Chief Strategy Officer of ReTHINK CNERGY.",
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
  { label: "Projects", href: "/projects" },
  { label: "Get Involved", href: "/social-responsibility" },
  { label: "Books", href: "/books" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Books", href: "/books" },
  { label: "Speaking & Media", href: "/speaking" },
  { label: "Events", href: "/events" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Insights", href: "/insights" },
  { label: "Get Involved", href: "/social-responsibility" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
] as const;
