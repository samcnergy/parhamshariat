import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ventures } from "@/lib/data/ventures";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Companies and projects Parham Shariat has built under ReTHINK CNERGY: SiteMarketing.ai, Powerful Blueprints, ReclaimData.ai, and AloHelp.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Projects", path: "/projects" }]} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base text-foreground/70">
          Companies and projects Parham has built under ReTHINK CNERGY.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {ventures.map((venture) =>
            venture.url ? (
              <li key={venture.name}>
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground hover:shadow-xl"
                >
                  <p className="font-display text-lg font-black uppercase tracking-tight">
                    {venture.name}
                  </p>
                  <p className="mt-2 text-sm text-foreground/60">
                    {venture.description}
                  </p>
                </a>
              </li>
            ) : (
              <li
                key={venture.name}
                className="border border-dashed border-border p-6 text-foreground/50"
              >
                <p className="font-display text-lg font-black uppercase tracking-tight">
                  {venture.name}
                </p>
                <p className="mt-2 text-sm">{venture.description}</p>
              </li>
            ),
          )}
        </ul>
      </section>
    </>
  );
}
