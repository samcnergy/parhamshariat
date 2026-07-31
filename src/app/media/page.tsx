import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
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
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Media &amp; Press
        </h1>
        <p className="mt-4 max-w-2xl text-base text-foreground/70">
          Parham Shariat in the press. Note: two of these features credit the
          byline &quot;Parham Shariatzadeh&quot; — the same person, an
          earlier legal-name usage — and are linked here as originally
          published.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {pressFeatures.map((feature) =>
            feature.url ? (
              <a
                key={feature.title + feature.outlet}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border p-6 transition-colors hover:border-foreground"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                  {feature.outlet}
                </p>
                <h2 className="mt-2 font-display text-lg font-black uppercase leading-snug tracking-tight">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm text-foreground/70">
                  {feature.description}
                </p>
              </a>
            ) : (
              <div
                key={feature.title + feature.outlet}
                className="border border-dashed border-border p-6 text-foreground/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wide">
                  {feature.outlet}
                </p>
                <h2 className="mt-2 text-lg font-semibold leading-snug">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm">Link coming soon.</p>
              </div>
            ),
          )}
        </div>

        <h2 className="mt-16 font-display text-2xl font-black uppercase tracking-tight">
          Press Kit
        </h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70">
          For interview requests, headshots, bios, or the fact sheet, contact{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <li className="border border-border p-4 text-sm">
            Professional headshots (color) — available on request
          </li>
          <li className="border border-border p-4 text-sm">
            Short, medium, and long author bios — available on request
          </li>
          <li className="border border-border p-4 text-sm">
            Fact sheet &amp; key statistics — available on request
          </li>
          <li className="border border-border p-4 text-sm">
            Book cover art (all five titles) — available on request
          </li>
        </ul>
      </section>
    </>
  );
}
