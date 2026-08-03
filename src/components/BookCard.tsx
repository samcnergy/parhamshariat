import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/data/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col overflow-hidden border border-border bg-background transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-foreground hover:shadow-xl"
    >
      <div className="flex items-center justify-center bg-muted p-8">
        <Image
          src={book.coverImage.src}
          alt={`Book cover for ${book.title}: ${book.subtitle}`}
          width={book.coverImage.width}
          height={book.coverImage.height}
          className="h-60 w-auto object-contain shadow-xl transition-transform duration-200 group-hover:-translate-y-1"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        {book.seriesPosition && (
          <p className="eyebrow text-grey-1">Book {book.seriesPosition}</p>
        )}
        <h3 className="text-display-xs">{book.title}</h3>
        <p className="text-sm text-grey-1">{book.subtitle}</p>
        <span className="eyebrow mt-auto flex items-center gap-2 pt-4">
          Learn More
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
