import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { books, getBookBySlug } from "@/lib/data/books";
import { pressFeatures } from "@/lib/data/media";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
import ImageWipeReveal from "@/components/ImageWipeReveal";
import SpinningMark from "@/components/SpinningMark";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.positioning,
  alternates: { canonical: "/" },
};

const heroSlides = [
  { src: "/images/parham-headshot-glasses-2.png", alt: "Portrait of Parham Shariat", focus: "50% 20%" },
  { src: "/images/parham shariat 6.JPG", alt: "Parham Shariat overlooking the caldera in Santorini", focus: "50% 60%" },
  { src: "/images/parham-headshot-newport.jpg", alt: "Parham Shariat at the harbor in Newport Beach", focus: "35% 18%", zoom: 1.5 },
];

const stats = [
  { number: "30", caption: "Years — several countries, C-level roles in multinational companies" },
  { number: "5", caption: "Books published" },
  { number: "2", caption: "Companies founded — ReTHINK CNERGY and Powerful Blueprints" },
];

export default function HomePage() {
  const featuredBook = getBookBySlug("digital-real-estate")!;
  const otherBooks = books.filter((book) => book.slug !== featuredBook.slug);

  return (
    <>
      {/* Hero — full-bleed photo carousel, nav floats transparent over it */}
      <section className="relative flex h-screen min-h-[36rem] items-end overflow-hidden bg-black text-white">
        <HeroCarousel slides={heroSlides} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
          <h1 className="font-display text-display-xl uppercase leading-[0.85] sm:text-display-super">
            25 Years of Experience.
            <br />
            3 Continents.
            <br />
            5 Books.
          </h1>
          <p className="eyebrow mt-6 text-white/80">{siteConfig.tagline}</p>
        </div>
      </section>

      <Marquee text="Twenty-Five Years of Strategy" />

      {/* Why I wrote these books — Fraunces serif pull-quote */}
      <Reveal as="section" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="eyebrow flex items-center gap-3 text-grey-1">
          <SpinningMark className="text-black" />
          Why I Write
        </div>
        <blockquote
          className="font-serif-quote mt-6 text-display-xs italic leading-tight sm:text-display-s"
          style={{ textIndent: "3rem" }}
        >
          I&apos;ve been lucky enough to learn from the best — and unlucky
          enough to make plenty of mistakes along the way. My travels and the
          businesses I&apos;ve built taught me how to pivot quickly when
          something goes wrong, before it turns into a disaster. That&apos;s
          where my strategic thinking comes from — not a textbook, but years
          of being in the room when things worked and when they didn&apos;t.
        </blockquote>
      </Reveal>

      <Marquee text="None of It From a Textbook" variant="dark" reverse />

      {/* Stats — full-width "super" scale moments, alternating bg */}
      {stats.map((stat, i) => (
        <Reveal
          as="section"
          key={stat.number}
          className={`border-b border-grey-4 px-4 py-20 text-center sm:px-6 ${
            i % 2 === 1 ? "bg-black text-white" : ""
          }`}
        >
          <p className="font-display text-display-super uppercase">{stat.number}</p>
          <p className="eyebrow mx-auto mt-2 max-w-md text-current/70">{stat.caption}</p>
        </Reveal>
      ))}

      {/* Books — black bg, large covers */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="eyebrow text-white/50">The Business Strategy Series</p>
          <div className="mt-8 grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
            <Image
              src={featuredBook.coverImage.src}
              alt={`Book cover for ${featuredBook.title}: ${featuredBook.subtitle}`}
              width={featuredBook.coverImage.width}
              height={featuredBook.coverImage.height}
              className="h-[26rem] w-auto object-contain shadow-2xl"
            />
            <div>
              <h2 className="font-display text-display-m uppercase leading-[0.85] sm:text-display-l">
                {featuredBook.title}
              </h2>
              <p className="mt-4 text-white/60">{featuredBook.subtitle}</p>
              <a
                href={featuredBook.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-white px-7 py-3.5 text-sm text-black transition-opacity hover:opacity-85"
              >
                Buy the Book
              </a>
            </div>
          </div>

          <StaggerReveal className="mt-20 grid grid-cols-2 border-t border-l border-white/20 sm:grid-cols-4">
            {otherBooks.map((book) => (
              <Link
                key={book.slug}
                href={`/books/${book.slug}`}
                className="group flex flex-col items-center gap-4 border-r border-b border-white/20 p-8 text-center transition-colors hover:bg-white/5"
              >
                <div className="flex h-40 w-28 items-center justify-center">
                  <Image
                    src={book.coverImage.src}
                    alt={`Book cover for ${book.title}: ${book.subtitle}`}
                    width={book.coverImage.width}
                    height={book.coverImage.height}
                    className="max-h-full max-w-full object-contain shadow-lg transition-transform duration-300 group-hover:-translate-y-1.5"
                  />
                </div>
                <p className="text-xs text-white/70">{book.title}</p>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* About / personal — rotated photo, image-wipe reveal */}
      <Reveal as="section" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <ImageWipeReveal
            src="/images/Parham and Shirin 2024.jpeg"
            alt="Parham Shariat with his wife, Shirin Salamat"
            width={2316}
            height={3088}
            containerClassName="mx-auto w-fit rotate-[-3deg] shadow-xl"
            imageClassName="h-[26rem] w-auto object-cover"
          />
          <div>
            <p className="eyebrow text-grey-1">Off the Clock</p>
            <p className="mt-4 text-lg leading-relaxed">
              Outside of work, I enjoy learning, writing, and getting out on
              the water — paddleboarding or kayaking whenever I can. I live
              in Southern California with my wife, Shirin Salamat, an
              attorney and my biggest supporter.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block border-b border-black pb-1 text-sm transition-opacity hover:opacity-60"
            >
              Read the Full Story
            </Link>
          </div>
        </div>
      </Reveal>

      {/* As seen in — hairline grid */}
      <section className="border-t border-grey-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="eyebrow px-2 py-6 text-grey-1">As Seen In</p>
          <div className="grid grid-cols-2 border-t border-l border-grey-4 sm:grid-cols-4">
            {pressFeatures.map((feature) => (
              <Link
                key={feature.outlet}
                href="/media"
                className="flex items-center justify-center border-r border-b border-grey-4 px-6 py-12 font-display text-display-xxs uppercase text-grey-2 transition-colors hover:text-black sm:text-display-xs"
              >
                {feature.outlet}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking / podcasts — the one accent-blue CTA band */}
      <Reveal
        as="section"
        className="bg-accent-blue px-4 py-24 text-center sm:px-6"
      >
        <h2 className="font-display text-display-m uppercase leading-[0.85] sm:text-display-l">
          Speaking, Podcasts
          <br />
          &amp; Interviews
        </h2>
        <p className="mx-auto mt-6 max-w-xl">
          I&apos;m open to collaborating on speaking engagements, podcast
          appearances, and interviews.
        </p>
        <Link
          href="/speaking"
          className="mt-8 inline-block bg-black px-7 py-3.5 text-sm text-white transition-opacity hover:opacity-85"
        >
          Get in Touch
        </Link>
      </Reveal>
    </>
  );
}
