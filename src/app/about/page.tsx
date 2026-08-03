import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
import { authorBios } from "@/lib/data/author";
import { books } from "@/lib/data/books";

export const metadata: Metadata = {
  title: "About Parham Shariat",
  description: authorBios.medium.split("\n\n")[0],
  alternates: { canonical: "/about" },
};

const theWork = [
  "Founder and chief strategy officer, ReTHINK CNERGY",
  "Founder, Powerful Blueprints",
  "30 years, several countries, C-level roles across multinational companies",
];

const offTheClock = [
  "Learning, writing, paddleboarding and kayaking",
  "I live in Southern California with my wife, Shirin Salamat, an attorney and my biggest supporter.",
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1.2fr] md:py-24">
        <Image
          src="/images/Parham-kayaking.jpg"
          alt="Parham Shariat paddleboarding near Newport Beach, California"
          width={1536}
          height={2048}
          priority
          className="mx-auto w-full max-w-sm rotate-[-2deg] object-cover shadow-xl"
        />
        <div>
          <h1 className="text-display-m sm:text-display-l">
            Hi, I&apos;m Parham.
          </h1>
          <p className="mt-6 max-w-lg text-xl leading-relaxed text-foreground/80">
            Strategist, author, kayaker. I spent three decades learning what
            works in business — and what doesn&apos;t — so you don&apos;t
            have to learn it the hard way.
          </p>
        </div>
      </section>

      {/* Pull-quote — the emotional core of the page */}
      <Reveal as="section" className="border-y border-border bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <blockquote
            className="font-serif-quote border-l-4 border-foreground pl-6 text-2xl italic leading-relaxed text-foreground sm:pl-8 sm:text-3xl"
            style={{ textIndent: "2.5rem" }}
          >
            I wrote these books because I&apos;ve been lucky enough to learn
            from the best — and unlucky enough to make plenty of mistakes
            along the way. My travels and the businesses I&apos;ve built
            taught me how to pivot quickly when something goes wrong, before
            it turns into a disaster. That&apos;s where my strategic
            thinking comes from — not a textbook, but years of being in the
            room when things worked and when they didn&apos;t. My hope is
            that young entrepreneurs can pick up what took me thirty years
            to learn, and use it to build something of their own — a little
            faster, and with a few less bruises than I got along the way.
          </blockquote>
        </div>
      </Reveal>

      {/* Bio */}
      <Reveal as="section" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-16 md:grid-cols-[1fr_1.2fr]">
          <div className="relative mx-auto h-64 w-full max-w-sm sm:h-72">
            <Image
              src="/images/parham 1981.jpg"
              alt="Parham Shariat as a child"
              width={927}
              height={634}
              className="absolute left-0 top-4 w-2/3 rotate-[-4deg] object-cover shadow-xl"
            />
            <Image
              src="/images/Parham and shirin (wife) 2023.jpg"
              alt="Parham Shariat with his wife, Shirin Salamat"
              width={1200}
              height={1600}
              className="absolute right-0 top-0 w-2/5 rotate-[3deg] object-cover shadow-xl"
            />
          </div>
          <div className="text-lg leading-relaxed text-foreground/80">
            <p>
              Parham Shariat was born in Iran and moved to the United States
              at the age of 10. He moved back to the Middle East in 2007 and
              spent the next 11 years working for a real estate development
              company and a multinational corporation. He is a serial
              entrepreneur and author whose career spans over three decades
              of building and advising companies across three continents.
              As Founder &amp; Chief Strategy Officer of ReTHINK CNERGY, he
              helps startups and growth-stage businesses build sustainable
              competitive advantages through strategic design and emerging
              technologies.
            </p>
            <p className="mt-4">
              He earned his AI Strategist for Corporations certification
              from the Wharton School of Business.
            </p>
            <p className="mt-4">
              Parham lives in Southern California with his family.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Books */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <StaggerReveal className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group flex flex-col items-center gap-4 text-center"
            >
              <div className="flex h-48 w-32 items-center justify-center">
                <Image
                  src={book.coverImage.src}
                  alt={`Book cover for ${book.title}: ${book.subtitle}`}
                  width={book.coverImage.width}
                  height={book.coverImage.height}
                  className="max-h-full max-w-full object-contain shadow-lg transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                />
              </div>
              <p className="text-sm leading-snug">{book.title}</p>
            </Link>
          ))}
        </StaggerReveal>
      </section>

      {/* The work / Off the clock */}
      <Reveal as="section" className="border-t border-border">
        <div className="mx-auto grid max-w-4xl gap-12 px-4 py-20 sm:grid-cols-2 sm:px-6">
          <div>
            <h2 className="text-display-xxs">The Work</h2>
            <ul className="mt-5 space-y-3 border-t border-border pt-5">
              {theWork.map((item) => (
                <li key={item} className="flex gap-3 text-base text-foreground/80">
                  <span aria-hidden="true" className="mt-1 text-grey-2">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-display-xxs">Off the Clock</h2>
            <ul className="mt-5 space-y-3 border-t border-border pt-5">
              {offTheClock.map((item) => (
                <li key={item} className="flex gap-3 text-base text-foreground/80">
                  <span aria-hidden="true" className="mt-1 text-grey-2">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Closing CTA */}
      <section className="border-t border-border py-20 text-center">
        <Link
          href="/books"
          className="inline-block bg-foreground px-8 py-4 text-sm text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85 active:translate-y-0"
        >
          See the Books
        </Link>
      </section>
    </>
  );
}
