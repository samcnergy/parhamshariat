import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { faqPageSchema } from "@/lib/schema";
import { siteFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Parham Shariat, ReTHINK CNERGY, Generative Engine Optimization, and his books.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(siteFaq)} />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />

      <Reveal as="section" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-display-m sm:text-display-l">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl text-base text-foreground/80">
          Quick answers about Parham Shariat, ReTHINK CNERGY, and Generative
          Engine Optimization.
        </p>

        <dl className="mt-10 space-y-8 border-t border-border pt-8">
          {siteFaq.map((faq) => (
            <div key={faq.question}>
              <dt className="text-display-xxs">{faq.question}</dt>
              <dd className="mt-3 text-base leading-relaxed text-foreground/80">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </>
  );
}
