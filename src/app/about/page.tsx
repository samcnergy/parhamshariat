import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { authorBios } from "@/lib/data/author";

export const metadata: Metadata = {
  title: "About Parham Shariat",
  description: authorBios.medium.split("\n\n")[0],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-invert-bg text-invert-fg">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} variant="dark" />
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-14 pt-6 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <Image
            src="/images/parham-headshot-primary.jpg"
            alt="Portrait of Parham Shariat"
            width={1600}
            height={2400}
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
