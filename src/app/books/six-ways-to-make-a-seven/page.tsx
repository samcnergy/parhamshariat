import type { Metadata } from "next";
import BookPageContent from "@/components/BookPageContent";
import { getBookBySlug, getBookMetadata } from "@/lib/data/books";

const book = getBookBySlug("six-ways-to-make-a-seven")!;

export const metadata: Metadata = getBookMetadata(book);

export default function Page() {
  return <BookPageContent book={book} />;
}
