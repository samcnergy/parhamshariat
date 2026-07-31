import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles from Parham Shariat on business strategy and Generative Engine Optimization (GEO).",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Insights
        </h1>
        <p className="mt-4 text-base text-foreground/80">
          Articles are on the way. In the meantime, subscribe to{" "}
          <strong>AI Search Insider</strong> for Parham&apos;s ongoing
          research on GEO and AI-era business strategy.
        </p>
        <a
          href={siteConfig.social.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-85"
        >
          Subscribe on Substack
        </a>
      </section>
    </>
  );
}
