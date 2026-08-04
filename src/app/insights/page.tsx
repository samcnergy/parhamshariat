import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
import { insights } from "@/lib/data/insights";
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

      <Reveal
        as="section"
        className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1.4fr]"
      >
        <Image
          src="/images/parhamshariat9.png"
          alt="Parham Shariat"
          width={1058}
          height={1582}
          className="mx-auto w-full max-w-xs rotate-[-2deg] object-cover shadow-xl"
        />
        <div>
          <h1 className="text-display-m sm:text-display-l">Insights</h1>
          <p className="mt-4 max-w-2xl text-base text-foreground/80">
            Writing on business strategy, AI search, and building digital
            assets that last — originally published on LinkedIn and Medium.
          </p>
        </div>
      </Reveal>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <StaggerReveal className="grid gap-px border-t border-l border-border sm:grid-cols-2">
          {insights.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-r border-b border-border bg-background p-6 transition-colors hover:bg-muted"
            >
              <p className="eyebrow text-grey-1">{article.date}</p>
              <h2 className="mt-2 text-display-xxs">{article.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">
                {article.summary}
              </p>
              <p className="eyebrow mt-4 text-grey-2">
                Read on {article.source} ↗
              </p>
            </a>
          ))}
        </StaggerReveal>
      </section>

      <Reveal
        as="section"
        className="border-t border-border px-4 py-16 text-center sm:px-6"
      >
        <p className="mx-auto max-w-xl text-base text-foreground/80">
          Subscribe to AI Search Insider for Parham&apos;s ongoing research on
          GEO and AI-era business strategy.
        </p>
        <a
          href={siteConfig.social.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow mt-6 inline-block bg-foreground px-7 py-3.5 text-background transition-opacity hover:opacity-85"
        >
          Subscribe on Substack
        </a>
      </Reveal>
    </>
  );
}
