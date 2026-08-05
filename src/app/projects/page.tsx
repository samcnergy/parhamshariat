import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
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
        <Reveal>
          <h1 className="text-display-m sm:text-display-l">Projects</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            I look at a business as a product. Before I ever write a business
            plan, I&apos;m already thinking about the exit: it&apos;s a
            principle I lay out in The Business Strategy Plan.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
            I always have a few things going. Some are full companies. Some
            are just projects. A couple, if I&apos;m honest, are side
            hustles. Powerful Blueprints is a project, and building that
            community has been one of the most fun things I&apos;ve done.
          </p>
        </Reveal>

        <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2">
          {ventures.map((venture) =>
            venture.url ? (
              <div key={venture.name} className="flex h-full flex-col border border-border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground hover:shadow-xl">
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 flex-col"
                >
                  {venture.logo && (
                    <Image
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      width={1536}
                      height={1024}
                      className="h-auto w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    {!venture.logo && (
                      <p className="text-display-xxs">{venture.name}</p>
                    )}
                    <p className="mt-1 text-sm text-foreground/60">
                      {venture.description}
                    </p>
                  </div>
                </a>
                {venture.secondaryCta && (
                  <a
                    href={venture.secondaryCta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow mx-6 mb-6 -mt-3 inline-block w-fit underline decoration-border underline-offset-4 hover:decoration-foreground"
                  >
                    {venture.secondaryCta.label} →
                  </a>
                )}
              </div>
            ) : (
              <div
                key={venture.name}
                className="border border-dashed border-border p-6 text-grey-1"
              >
                <p className="text-display-xxs">{venture.name}</p>
                <p className="mt-2 text-sm">{venture.description}</p>
              </div>
            ),
          )}
        </StaggerReveal>
      </section>
    </>
  );
}
