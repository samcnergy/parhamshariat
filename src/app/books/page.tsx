import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookCard from "@/components/BookCard";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
import { faqPageSchema } from "@/lib/schema";
import { journeyBooks, furtherReadingBooks, seriesName, seriesFaq } from "@/lib/data/books";

export const metadata: Metadata = {
  title: "Books by Parham Shariat",
  description:
    "Field notes from 25+ years building companies: The Business Strategy Plan, Digital Real Estate, The Complete Guide to Dominating AI Search, Six Ways to Make a Seven, and The 38 Letters of Rockefeller to His Son.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(seriesFaq)} />

      <section className="bg-black text-white">
        <Breadcrumbs items={[{ name: "Books", path: "/books" }]} variant="dark" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-6 sm:px-6 md:grid-cols-[1.4fr_auto]">
          <div>
            <h1 className="text-display-l sm:text-display-xl">Books</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Field notes from 25+ years building companies: {seriesName}{" "}
              covers strategy, digital presence, and AI-era visibility, plus
              two further titles for a younger audience and on leadership.
            </p>
          </div>
          <Image
            src="/images/parham-headshot-glasses.jpg"
            alt="Parham Shariat"
            width={310}
            height={310}
            className="mx-auto h-48 w-48 rounded-full object-cover sm:h-64 sm:w-64"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <p className="eyebrow text-grey-1">{seriesName}</p>
        </Reveal>
        <StaggerReveal className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeyBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </StaggerReveal>

        <Reveal>
          <p className="eyebrow mt-20 text-grey-1">Also by Parham</p>
        </Reveal>
        <StaggerReveal className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {furtherReadingBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </StaggerReveal>

        <Reveal as="section" className="mt-20">
          <h2 className="text-display-xs">Frequently Asked Questions</h2>
          <dl className="mt-6 space-y-6 border-t border-border pt-6">
            {seriesFaq.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg">{faq.question}</dt>
                <dd className="mt-2 text-base text-foreground/75">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  );
}
