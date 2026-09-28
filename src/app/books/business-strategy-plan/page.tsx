import type { Metadata } from "next";
import BookPageContent from "@/components/BookPageContent";
import { getBookBySlug, getBookMetadata } from "@/lib/data/books";

const book = getBookBySlug("business-strategy-plan")!;

export const metadata: Metadata = getBookMetadata(book);

export default function Page() {
  return <BookPageContent book={book} />;
}
