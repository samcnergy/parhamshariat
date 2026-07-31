import type { Metadata } from "next";
import BookPageContent from "@/components/BookPageContent";
import { getBookBySlug, getMetaDescription } from "@/lib/data/books";

const book = getBookBySlug("dominating-ai-search")!;

export const metadata: Metadata = {
  title: book.title,
  description: getMetaDescription(book),
  alternates: { canonical: `/books/${book.slug}` },
};

export default function Page() {
  return <BookPageContent book={book} />;
}
