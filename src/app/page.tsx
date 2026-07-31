import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { authorBios, proofPoints } from "@/lib/data/author";
import { getBookBySlug } from "@/lib/data/books";
import { pressFeatures } from "@/lib/data/media";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.positioning,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredBook = getBookBySlug("dominating-ai-search")!;

  return (
    <>
      {/* Hero — full-bleed black, poster-scale type */}
      <section className="bg-invert-bg text-invert-fg">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-invert-fg/50">
              Business Strategist &amp; Author
            </p>
            <h1 className="mt-4 font-display text-6xl font-black uppercase leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl">
              Parham
              <br />
              Shariat
            </h1>
            <p className="mt-6 max-w-md text-xl font-semibold leading-snug text-invert-fg/90 sm:text-2xl">
              {siteConfig.tagline}.
            </p>
            <p className="mt-5 max-w-md text-base text-invert-fg/60">
              {siteConfig.positioning}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/books"
                className="bg-invert-fg px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-invert-bg transition-opacity hover:opacity-85"
              >
                Explore the Books
              </Link>
              <Link
                href="/about"
                className="border border-invert-fg/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-invert-fg transition-colors hover:border-invert-fg"
              >
                About Parham
              </Link>
            </div>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <Image
              src="/images/parham-headshot-primary.jpg"
              alt="Portrait of Parham Shariat, business strategist and author"
              width={480}
              height={720}
              priority
              className="h-[26rem] w-auto object-cover grayscale sm:h-[32rem]"
            />
          </div>
        </div>
      </section>

      {/* Proof points — stat billboard */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border border-l border-t border-border sm:grid-cols-4 sm:divide-y-0">
          {proofPoints.map((point) => (
            <div key={point.label} className="border-r border-border px-6 py-10">
              <p className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {point.stat}
              </p>
              <p className="mt-3 text-xs uppercase leading-snug tracking-wide text-foreground/60">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured book */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
          Featured Book
        </p>
        <div className="mt-8 grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="flex justify-center bg-muted py-14">
            <Image
              src={featuredBook.coverImage.src}
              alt={`Book cover for ${featuredBook.title}: ${featuredBook.subtitle}`}
              width={featuredBook.coverImage.width}
              height={featuredBook.coverImage.height}
              className="h-80 w-auto object-contain shadow-2xl sm:h-96"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {featuredBook.title}
            </h2>
            <p className="mt-3 text-base font-semibold text-foreground/60">
              {featuredBook.subtitle}
            </p>
            <p className="mt-6 max-w-lg text-base text-foreground/80">
              {featuredBook.shortDescription}
            </p>
            <Link
              href={`/books/${featuredBook.slug}`}
              className="mt-8 inline-block bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-85"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* As seen in */}
      <section className="border-y border-border bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
            As Seen In
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {pressFeatures.map((feature) => (
              <Link
                key={feature.outlet}
                href="/media"
                className="font-display text-xl font-black uppercase tracking-tight text-foreground/60 transition-colors hover:text-foreground sm:text-2xl"
              >
                {feature.outlet}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bio teaser */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
          About Parham
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
          {authorBios.short}
        </p>
        <Link
          href="/about"
          className="mt-7 inline-block border-b-2 border-foreground pb-1 text-sm font-bold uppercase tracking-wide hover:opacity-70"
        >
          Read the Full Bio
        </Link>
      </section>

      {/* Newsletter */}
      <section className="bg-invert-bg text-invert-fg">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
            AI Search Insider
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-invert-fg/70">
            Get Parham&apos;s ongoing research on Generative Engine
            Optimization and AI-era business strategy, straight from the
            source.
          </p>
          <a
            href={siteConfig.social.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-invert-fg px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-invert-bg transition-opacity hover:opacity-85"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </>
  );
}
