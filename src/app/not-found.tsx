import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-display-m sm:text-display-l">Page Not Found</h1>
      <p className="mt-4 text-base text-foreground/80">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="eyebrow mt-8 inline-block bg-foreground px-7 py-3.5 text-background transition-opacity hover:opacity-85"
      >
        Back to Home
      </Link>
    </section>
  );
}
