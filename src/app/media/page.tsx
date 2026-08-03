import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
import { pressFeatures } from "@/lib/data/media";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Media & Press",
  description:
    "Press features and interviews with Parham Shariat, plus downloadable press kit assets: bios, headshots, and fact sheet.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Media", path: "/media" }]} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <h1 className="text-display-m sm:text-display-l">Media &amp; Press</h1>
          <p className="mt-4 max-w-2xl text-base text-foreground/70">
            Parham Shariat in the press. Note: two of these features credit
            the byline &quot;Parham Shariatzadeh&quot; — the same person, an
            earlier legal-name usage — and are linked here as originally
            published.
          </p>
        </Reveal>

        <StaggerReveal className="mt-8 grid gap-px border-t border-l border-border sm:grid-cols-2">
          {pressFeatures.map((feature) =>
            feature.url ? (
              <a
                key={feature.title + feature.outlet}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-r border-b border-border bg-background p-6 transition-colors hover:bg-muted"
              >
                <p className="eyebrow text-grey-1">{feature.outlet}</p>
                <h2 className="mt-2 text-display-xxs">{feature.title}</h2>
                <p className="mt-2 text-sm text-foreground/70">
                  {feature.description}
                </p>
              </a>
            ) : (
              <div
                key={feature.title + feature.outlet}
                className="border-r border-b border-dashed border-border bg-background p-6 text-grey-1"
              >
                <p className="eyebrow">{feature.outlet}</p>
                <h2 className="mt-2 text-display-xxs">{feature.title}</h2>
                <p className="mt-2 text-sm">Link coming soon.</p>
              </div>
            ),
          )}
        </StaggerReveal>

        <Reveal as="section" className="mt-20">
          <h2 className="text-display-xs">Press Kit</h2>
          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start">
            <Image
              src="/images/parham-headshot-primary.jpg"
              alt="Professional headshot of Parham Shariat"
              width={400}
              height={600}
              className="h-56 w-auto object-cover grayscale"
            />
            <div>
              <p className="max-w-2xl text-base text-foreground/70">
                For interview requests, headshots, bios, or the fact sheet,
                contact{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-px border-t border-l border-border sm:grid-cols-2">
            {[
              "Professional headshots (color) — available on request",
              "Short, medium, and long author bios — available on request",
              "Fact sheet & key statistics — available on request",
              "Book cover art (all five titles) — available on request",
            ].map((item) => (
              <div
                key={item}
                className="border-r border-b border-border bg-background p-4 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
