import type { Metadata } from "next";
import BookPageContent from "@/components/BookPageContent";
import { getBookBySlug, getMetaDescription } from "@/lib/data/books";

const book = getBookBySlug("business-strategy-plan")!;

export const metadata: Metadata = {
  title: `${book.title}: ${book.subtitle}`,
  description: getMetaDescription(book),
  alternates: { canonical: `/books/${book.slug}` },
};

export default function Page() {
  return <BookPageContent book={book} />;
}
