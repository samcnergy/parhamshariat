import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Speaking & Consulting",
  description:
    "Book Parham Shariat for speaking engagements or consulting on business strategy and Generative Engine Optimization (GEO), through ReTHINK CNERGY.",
  alternates: { canonical: "/speaking" },
};

export default function SpeakingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Speaking & Consulting", path: "/speaking" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Speaking &amp; Consulting
        </h1>
        <p className="mt-4 text-base text-foreground/80">
          As Senior Director of Strategy &amp; Growth at{" "}
          <a
            href={siteConfig.external.rethinkCnergy}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            ReTHINK CNERGY
          </a>
          , Parham advises startups and growth-stage businesses on strategic
          design, market entry, and building sustainable competitive
          advantages in an AI-driven economy. He speaks on business strategy,
          leadership, and Generative Engine Optimization (GEO).
        </p>
        <div className="mt-6 border border-dashed border-border p-6 text-base text-foreground/60">
          [[PLACEHOLDER — DO NOT PUBLISH]] Topics, past engagements, and
          booking details pending from Parham.
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-85"
        >
          Inquire About Speaking or Consulting
        </Link>
      </section>
    </>
  );
}
