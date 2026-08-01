import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { authorBios, credentials } from "@/lib/data/author";
import { ventures } from "@/lib/data/ventures";

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
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-invert-bg text-invert-fg">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} variant="dark" />
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-14 pt-6 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <Image
            src="/images/parham-headshot-glasses-bw.png"
            alt="Portrait of Parham Shariat"
            width={500}
            height={750}
            className="h-72 w-auto object-cover sm:h-96"
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
          Ventures
        </h2>
        <p className="mt-4 text-base text-foreground/70">
          Companies and projects Parham has built under ReTHINK CNERGY.
        </p>
        <ul className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
          {ventures.map((venture) =>
            venture.url ? (
              <li key={venture.name}>
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-border p-4 transition-colors hover:border-foreground"
                >
                  <p className="font-display text-base font-black uppercase tracking-tight">
                    {venture.name}
                  </p>
                  <p className="mt-1 text-sm text-foreground/60">
                    {venture.description}
                  </p>
                </a>
              </li>
            ) : (
              <li
                key={venture.name}
                className="border border-dashed border-border p-4 text-foreground/50"
              >
                <p className="font-display text-base font-black uppercase tracking-tight">
                  {venture.name}
                </p>
                <p className="mt-1 text-sm">{venture.description}</p>
              </li>
            ),
          )}
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

        <div className="mt-16 grid gap-6 border border-border bg-muted p-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-base text-foreground/80">
            Outside of work, Parham enjoys learning, writing, and getting out
            on the water — paddleboarding or kayaking whenever he can. He
            lives in Southern California with his wife, Shirin Salamat, an
            attorney and his biggest supporter.
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
            href="/speaking"
            className="border border-border px-7 py-3.5 text-sm font-bold uppercase tracking-wide hover:border-foreground"
          >
            Open to Speaking &amp; Media
          </Link>
        </div>
      </section>
    </>
  );
}
