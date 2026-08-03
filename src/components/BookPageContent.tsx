import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { bookSchema, faqPageSchema } from "@/lib/schema";
import { authorBios } from "@/lib/data/author";
import { seriesName, type Book } from "@/lib/data/books";

export default function BookPageContent({ book }: { book: Book }) {
  return (
    <>
      <JsonLd data={bookSchema(book)} />
      {book.faq.length > 0 && <JsonLd data={faqPageSchema(book.faq)} />}

      <section className="bg-black text-white">
        <Breadcrumbs
          items={[
            { name: "Books", path: "/books" },
            { name: book.title, path: `/books/${book.slug}` },
          ]}
          variant="dark"
        />
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-10 px-4 pb-14 pt-6 sm:flex-row sm:px-6">
          <Image
            src={book.coverImage.src}
            alt={`Book cover for ${book.title}: ${book.subtitle}`}
            width={book.coverImage.width}
            height={book.coverImage.height}
            priority
            className="h-72 w-auto flex-shrink-0 object-contain shadow-2xl sm:h-96"
          />
          <div>
            <p className="eyebrow text-white/50">
              {seriesName} · Book {book.seriesPosition}
            </p>
            <h1 className="mt-3 text-display-s sm:text-display-m">
              {book.title}
            </h1>
            <p className="mt-3 text-lg text-white/60">{book.subtitle}</p>
            <p className="mt-5 max-w-md text-base text-white/80">
              {book.shortDescription}
            </p>
            <a
              href={book.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block bg-white px-7 py-3.5 text-sm text-black transition-opacity hover:opacity-85"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {!book.isPlaceholder && (
          <>
            <Reveal as="section">
              <h2 className="text-display-xxs">Who This Book Is For</h2>
              <p className="mt-4 text-base text-foreground/80">
                {book.whoItsFor}
              </p>
            </Reveal>

            <Reveal as="section" className="mt-14">
              <h2 className="text-display-xxs">Overview</h2>
              <p className="mt-4 whitespace-pre-line text-base text-foreground/80">
                {book.mediumDescription}
              </p>
            </Reveal>

            <Reveal as="section" className="mt-14">
              <h2 className="text-display-xxs">Key Takeaways</h2>
              <ul className="mt-5 space-y-4 border-t border-border pt-5">
                {book.keyTakeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-base text-foreground/80">
                    <span aria-hidden="true" className="mt-1 text-grey-2">
                      —
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </>
        )}

        {book.isPlaceholder && (
          <section className="border border-dashed border-border p-6 text-sm text-grey-1">
            {book.whoItsFor.includes("PLACEHOLDER")
              ? "Full description and key takeaways for this title are pending final copy from Parham."
              : book.whoItsFor}
          </section>
        )}

        {book.faq.length > 0 && (
          <Reveal as="section" className="mt-14">
            <h2 className="text-display-xxs">Frequently Asked Questions</h2>
            <dl className="mt-6 space-y-6 border-t border-border pt-6">
              {book.faq.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg">{faq.question}</dt>
                  <dd className="mt-2 text-base text-foreground/75">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <section className="mt-16 border border-border bg-muted p-6">
          <div className="flex flex-col items-start gap-4">
            <p className="text-base text-foreground/80">{authorBios.short}</p>
            <Link
              href="/about"
              className="text-sm underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              More about Parham Shariat
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
