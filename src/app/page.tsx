import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { authorBios, writingJourney } from "@/lib/data/author";
import { books, getBookBySlug } from "@/lib/data/books";
import { pressFeatures } from "@/lib/data/media";
import BookCard from "@/components/BookCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.positioning,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredBook = getBookBySlug("digital-real-estate")!;
  const otherBooks = books.filter((book) => book.slug !== featuredBook.slug);

  return (
    <>
      {/* Hero — photo + featured book, side by side */}
      <section className="overflow-hidden bg-invert-bg text-invert-fg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="sr-only">Parham Shariat</h1>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-invert-fg/50">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 grid items-start justify-center gap-10 sm:grid-cols-[auto_auto] sm:justify-start">
            <Image
              src="/images/parham-headshot-glasses-bw.png"
              alt="Portrait of Parham Shariat"
              width={500}
              height={750}
              priority
              className="h-[28rem] w-auto justify-self-center object-cover object-top sm:h-[28rem] sm:justify-self-start"
            />
            <div className="flex flex-col items-center gap-10 sm:items-start">
              <p className="max-w-md text-center font-display text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-left sm:text-6xl">
                Empower
                <br />
                The Next
                <br />
                Generation
              </p>
              <div className="flex flex-col items-center gap-5 sm:items-start">
                <Image
                  src={featuredBook.coverImage.src}
                  alt={`Book cover for ${featuredBook.title}: ${featuredBook.subtitle}`}
                  width={featuredBook.coverImage.width}
                  height={featuredBook.coverImage.height}
                  className="h-56 w-auto object-contain object-top shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-2"
                />
                <div className="text-center sm:text-left">
                  <p className="font-display text-xl font-black uppercase tracking-tight">
                    {featuredBook.title}
                  </p>
                  <p className="mt-1 text-sm text-invert-fg/60">
                    {featuredBook.subtitle}
                  </p>
                </div>
                <a
                  href={featuredBook.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-invert-fg px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-invert-bg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85 active:translate-y-0"
                >
                  Buy the Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Write */}
      <Reveal className="mx-auto max-w-3xl px-4 py-20 sm:px-6" as="section">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
          {writingJourney.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          {writingJourney.intro}
        </p>
        <div className="mt-10 space-y-8 border-t border-border pt-8">
          {writingJourney.stories.map((story) => (
            <div key={story.bookSlug}>
              <Link
                href={`/books/${story.bookSlug}`}
                className="text-xs font-semibold uppercase tracking-widest text-foreground/50 transition-colors hover:text-foreground"
              >
                On {story.bookTitle}
              </Link>
              <p className="mt-3 text-lg leading-relaxed text-foreground/80">
                {story.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Other titles */}
      <section className="border-t border-border bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Other Titles by Parham
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherBooks.map((book, index) => (
              <Reveal key={book.slug} delay={index * 80}>
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking, podcasts, interviews */}
      <Reveal className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6" as="section">
        <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
          Speaking, Podcasts &amp; Interviews
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70">
          Parham is open to collaborating on speaking engagements, podcast
          appearances, and interviews.
        </p>
        <Link
          href="/speaking"
          className="mt-7 inline-block bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85 active:translate-y-0"
        >
          Get in Touch
        </Link>
      </Reveal>

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
                className="font-display text-xl font-black uppercase tracking-tight text-foreground/60 transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground sm:text-2xl"
              >
                {feature.outlet}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bio teaser */}
      <Reveal className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6" as="section">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
          About Parham
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
          {authorBios.short}
        </p>
        <Link
          href="/about"
          className="mt-7 inline-block border-b-2 border-foreground pb-1 text-sm font-bold uppercase tracking-wide transition-opacity hover:opacity-70"
        >
          Read the Full Bio
        </Link>
      </Reveal>

      {/* Newsletter */}
      <section className="bg-invert-bg text-invert-fg">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
            AI Search Insider
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-invert-fg/70">
            Get Parham&apos;s ongoing writing on business strategy and AI-era
            visibility, straight from the source.
          </p>
          <a
            href={siteConfig.social.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-invert-fg px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-invert-bg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85 active:translate-y-0"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </>
  );
}
