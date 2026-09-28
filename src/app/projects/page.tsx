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
                      width={2000}
                      height={1122}
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

        <Reveal as="section" className="mx-auto mt-20 max-w-3xl border-t border-border pt-16">
          <p className="eyebrow text-grey-1">Powerful Blueprints</p>
          <h2 className="mt-4 text-display-s sm:text-display-m">
            The Most Profitable Thing I Ever Built Was Free
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              People ask me two things about Powerful Blueprints. Why did I
              start it, and how do I make money from it. They are usually
              surprised when I tell them it is free. No subscriptions, no
              paywall, no fee to be featured.
            </p>
            <p>
              But there is something more valuable than a subscription, and
              it is the reason I built this.
            </p>
            <p>
              Every business tracks the cost of acquiring a customer. It is
              one of the most important numbers you will ever calculate. So
              here is a question I started asking myself: what is the cost
              of earning a real connection? Not a follower. Not a lead. A
              genuine connection with another person. What is that actually
              worth?
            </p>
            <p>
              When someone sits down and answers our questions honestly,
              something happens that I could not manufacture any other way.
              I come to know how they think, what they got wrong, what they
              would warn you about. That is the kind of understanding you
              normally only get after many hours across a table from
              someone. On Powerful Blueprints, it happens in a single
              interview, and it lasts.
            </p>
            <p>So let me answer the other question, why I started it at all.</p>
            <p>
              I have been an entrepreneur my whole life, and I have started
              enough small businesses to know that marketing is the lifeline
              of every one of them. When AI search engines began changing
              how people find companies, I paid attention. It got personal
              when a potential client told my wife they had found her
              business by asking ChatGPT. Out of everything it could have
              named, it recommended hers. I had to understand why.
            </p>
            <p>
              That question turned into a crusade to learn everything I
              could about marketing in the age of AI. It produced two books,
              Digital Real Estate and The Complete Guide to Dominating AI
              Search. What I was teaching came down to two things: create
              genuine, high-quality content, and get it distributed where AI
              systems actually find and cite it.
            </p>
            <p>
              Powerful Blueprints is me practicing what I preach. It is a
              free publication built on exactly those principles: real
              interviews with real people, structured so both readers and AI
              systems can find them. It started as a way to prove the method
              works. It became something better, a place that gives people a
              platform they do not have to pay for.
            </p>
            <p>
              The subscriptions were never the point. The connections were.
              And those have been worth more than any fee I could have
              charged.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
