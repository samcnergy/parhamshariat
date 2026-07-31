import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookCard from "@/components/BookCard";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { coreSeriesBooks, standaloneBooks, coreSeriesName, seriesFaq } from "@/lib/data/books";

export const metadata: Metadata = {
  title: "Books by Parham Shariat",
  description:
    "Explore The Business Strategy Series by Parham Shariat — The Business Strategy Plan, The 38 Letters of Rockefeller to His Son, and The Complete Guide to Dominating AI Search — plus his standalone titles.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(seriesFaq)} />

      <section className="bg-invert-bg text-invert-fg">
        <Breadcrumbs items={[{ name: "Books", path: "/books" }]} variant="dark" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tighter sm:text-6xl">
            Books
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-invert-fg/70">
            Parham&apos;s core work is {coreSeriesName}, a three-book series
            moving from strategic design, to leadership, to AI-era
            visibility. His two standalone titles address more specific
            audiences and topics.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
          {coreSeriesName}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreSeriesBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>

        <h2 className="mt-20 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
          Standalone Titles
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standaloneBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>

        <h2 className="mt-20 font-display text-2xl font-black uppercase tracking-tight">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6 border-t border-border pt-6">
          {seriesFaq.map((faq) => (
            <div key={faq.question}>
              <dt className="text-base font-semibold">{faq.question}</dt>
              <dd className="mt-2 text-base text-foreground/75">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
