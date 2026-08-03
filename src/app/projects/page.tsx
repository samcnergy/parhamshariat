import Image from "next/image";
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
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
          I look at a business as a product — I think about the exit before I
          write a business plan, an idea I get into in The Business Strategy
          Plan. I always have a few things going; some are full companies,
          some are just projects, and you could call a few of them side
          hustles.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {ventures.map((venture) =>
            venture.url ? (
              <li key={venture.name}>
                <div className="flex h-full flex-col border border-border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground hover:shadow-xl">
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 flex-col"
                  >
                    {venture.logo ? (
                      <Image
                        src={venture.logo}
                        alt={`${venture.name} logo`}
                        width={400}
                        height={200}
                        className="h-16 w-auto object-contain object-left"
                      />
                    ) : (
                      <p className="font-display text-lg font-black uppercase tracking-tight">
                        {venture.name}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-foreground/60">
                      {venture.description}
                    </p>
                  </a>
                  {venture.secondaryCta && (
                    <a
                      href={venture.secondaryCta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block w-fit text-xs font-semibold uppercase tracking-widest underline decoration-border underline-offset-4 hover:decoration-foreground"
                    >
                      {venture.secondaryCta.label} →
                    </a>
                  )}
                </div>
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
