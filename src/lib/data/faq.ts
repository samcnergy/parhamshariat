import type { BookFaq } from "./books";

export const siteFaq: BookFaq[] = [
  {
    question: "What does Parham Shariat do?",
    answer:
      "Parham Shariat is a strategist and author. He is Founder & Chief Strategy Officer of ReTHINK CNERGY, where he helps startups and growth-stage businesses build sustainable competitive advantages through strategic design and emerging technologies. He has spent over 25 years building and advising companies across three continents.",
  },
  {
    question: "What is ReTHINK CNERGY?",
    answer:
      "ReTHINK CNERGY is Parham Shariat's strategy firm. It helps startups and growth-stage businesses design strategic identity, build innovation cultures, and adapt to disruption, including how AI is reshaping how businesses get found online.",
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the practice of optimizing a business to be cited by AI platforms like ChatGPT, Claude, and Perplexity, rather than just ranked by Google. Parham Shariat developed the methodology after an 11-month research initiative analyzing 50+ businesses. Applied to one business, the framework increased AI citation visibility from 4% to 43% in 90 days.",
  },
  {
    question: "What books has Parham Shariat written?",
    answer:
      "Parham Shariat is the author of The Business Strategy Series: The Business Strategy Plan, Digital Real Estate, The Complete Guide to Dominating AI Search, Six Ways to Make a Seven, and The 38 Letters of Rockefeller to His Son.",
  },
  {
    question: "Is Parham Shariat available for speaking engagements or podcasts?",
    answer:
      "Yes. Parham Shariat is open to collaborating on speaking engagements, podcast appearances, and interviews, drawing on the ideas behind his books: business strategy, building companies across three continents, and how AI is reshaping how businesses get found.",
  },
  {
    question: "Where is Parham Shariat based?",
    answer:
      "Parham Shariat lives in Southern California with his family. ReTHINK CNERGY works with startups and growth-stage businesses, with experience spanning the US, UAE, and other markets.",
  },
  {
    question: "How can I contact Parham Shariat?",
    answer:
      "The fastest way to reach Parham Shariat is through the contact page, or by emailing parham@rethinkcnergy.com.",
  },
];

/** The subset featured on the homepage; kept small so the on-page FAQPage schema matches what's actually visible there. */
export const homeFaq: BookFaq[] = [
  siteFaq[0],
  siteFaq[1],
  siteFaq[2],
  siteFaq[6],
];
