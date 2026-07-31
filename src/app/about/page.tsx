import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { authorBios, credentials, factSheet } from "@/lib/data/author";

export const metadata: Metadata = {
  title: "About Parham Shariat",
  description: authorBios.medium.split("\n\n")[0],
  alternates: { canonical: "/about" },
};

const timeline = [
  "Held C-level and senior leadership positions at multinational firms, leading operations from Dubai to South Carolina.",
  "Structured investment vehicles, including a $56M investment prospectus for hotel redevelopment.",
  "Negotiated international franchise agreements, including securing exclusive franchise rights for Porsche Design in Mongolia.",
  "Launched digital platforms serving thousands of users and led U.S. market entry, scaling supply chain operations by 50%.",
  "Completed the Wharton AI Certification Series and Google AI Certification, and developed the Generative Engine Optimization (GEO) methodology.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-invert-bg text-invert-fg">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} variant="dark" />
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-14 pt-6 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <Image
            src="/images/parham-headshot-primary.jpg"
            alt="Portrait of Parham Shariat"
            width={400}
            height={600}
            className="h-72 w-auto object-cover grayscale sm:h-96"
          />
          <div>
            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter sm:text-6xl">
              About
              <br />
              Parham
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="whitespace-pre-line text-lg leading-relaxed text-foreground/80">
          {authorBios.medium}
        </p>

        <h2 className="mt-16 font-display text-2xl font-black uppercase tracking-tight">
          Career Highlights
        </h2>
        <ul className="mt-5 space-y-3 border-t border-border pt-5">
          {timeline.map((item) => (
            <li key={item} className="flex gap-3 text-base text-foreground/80">
              <span aria-hidden="true" className="mt-1 text-foreground/40">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-2xl font-black uppercase tracking-tight">
          Credentials
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {credentials.map((credential) => (
            <li
              key={credential}
              className="border border-border px-4 py-1.5 text-sm font-medium"
            >
              {credential}
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-2xl font-black uppercase tracking-tight">
          Fact Sheet
        </h2>
        <ul className="mt-5 space-y-2 border-t border-border pt-5">
          {factSheet.proofPoints.map((point) => (
            <li key={point} className="flex gap-3 text-base text-foreground/80">
              <span aria-hidden="true" className="mt-1 text-foreground/40">
                —
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 border border-border bg-muted p-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-base text-foreground/80">
            Outside of work, Parham lives in Southern California with his
            wife, Shirin Salamat — an attorney and his biggest supporter —
            and can usually be found on the water, paddleboarding or
            kayaking.
          </p>
          <Image
            src="/images/Parham-kayaking.jpg"
            alt="Parham Shariat paddleboarding near Newport Beach, California"
            width={1536}
            height={2048}
            className="h-48 w-auto object-cover"
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/books"
            className="bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-85"
          >
            View the Books
          </Link>
          <Link
            href="/contact"
            className="border border-border px-7 py-3.5 text-sm font-bold uppercase tracking-wide hover:border-foreground"
          >
            Contact for Speaking or Consulting
          </Link>
        </div>
      </section>
    </>
  );
}
