import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Parham Shariat",
  description:
    "Contact Parham Shariat for media inquiries, speaking engagements, consulting, or general questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 max-w-xl text-base text-foreground/70">
          For podcasts, interviews, speaking engagements, ReTHINK CNERGY
          consulting inquiries, or general questions, send a message below
          or reach out directly.
        </p>

        <div className="mt-6 space-y-1 text-base">
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              {siteConfig.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
