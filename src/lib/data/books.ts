export type BookFaq = {
  question: string;
  answer: string;
};

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  /** Set when the book has a confirmed position within "The Business Strategy Series" per the approved media kit / cover art. */
  seriesPosition: number | null;
  /** Whether this book is one of the three core "Business Strategy Series" titles, per Parham's confirmed grouping. */
  inCoreSeries: boolean;
  buyUrl: string;
  coverImage: {
    src: string;
    width: number;
    height: number;
  };
  accentColor: string;
  isPlaceholder: boolean;
  shortDescription: string;
  mediumDescription: string;
  whoItsFor: string;
  keyTakeaways: string[];
  faq: BookFaq[];
};

export const coreSeriesName = "The Business Strategy Series";

export const books: Book[] = [
  {
    slug: "business-strategy-plan",
    title: "The Business Strategy Plan",
    subtitle: "In the Age of AI",
    seriesPosition: 1,
    inCoreSeries: true,
    buyUrl: "https://a.co/d/00qpaf4W",
    coverImage: {
      src: "/books/business-strategy-plan.jpg",
      width: 2400,
      height: 2400,
    },
    accentColor: "#6B7F3A",
    isPlaceholder: false,
    shortDescription:
      "Before you write a business plan, you need a strategy. This foundational guide provides the frameworks for designing businesses deliberately — defining strategic identity, building innovation cultures, planning for crises, and architecting for long-term value creation in an AI-driven economy. Strategy before tactics. Always.",
    mediumDescription:
      "Most founders skip the most important step. They move straight into tactics — marketing, operations, AI tools — without first defining the strategic foundation their organization will be built upon. The result is unclear positioning, fragmented execution, and costly pivots.\n\nThe Business Strategy Plan provides the core methodology for building businesses deliberately rather than reactively. Learn how to define your strategic identity through a clear, defensible brand statement. Choose names, narratives, and structures that AI systems can recognize and recommend. Build cultures of innovation that adapt to technological disruption. Plan for crises and competitive shifts. Architect your business for long-term value creation — before writing a single line of a business plan.\n\nThis is not a book about tactics. It is about strategic design — the thinking layer that determines whether execution succeeds or fails.",
    whoItsFor:
      "Founders, executives, and operators who want to design their business deliberately — defining strategic identity and structure before moving into tactical execution.",
    keyTakeaways: [
      "Strategy must come before tactics: most businesses fail not from bad execution, but from executing without a strategic foundation.",
      "A defensible brand statement is the cornerstone of strategic identity and should guide every decision from hiring to product development.",
      "In the age of AI, discoverability depends on strategic clarity — AI systems recommend businesses they can clearly understand and categorize.",
      "Innovation culture means building organizations that adapt systematically to disruption, not simply adopting the newest tools.",
      "The best time to plan for acquisition, exit, or succession is before you need to — strategic architecture anticipates endings from the beginning.",
    ],
    faq: [
      {
        question: "Why does strategy have to come before a business plan?",
        answer:
          "A business plan is a document; strategy is the thinking that should inform every line of that document. Most founders skip straight to financial projections without answering foundational questions — what's our strategic identity, how will we adapt to disruption, what's our long-term architecture — and end up with a plan built on sand.",
      },
      {
        question: "What is a defensible brand statement, and why does it matter?",
        answer:
          "A defensible brand statement is a clear, specific articulation of strategic identity that guides every decision from hiring to product development. It matters because it is also what allows AI systems to correctly understand, categorize, and recommend a business — vague positioning is invisible to both customers and AI search.",
      },
      {
        question: "How does this book connect to AI and GEO?",
        answer:
          "Strategic clarity is the foundation that AI discoverability is built on. AI systems recommend businesses they can clearly understand and categorize, so the strategic identity work in this book — a defensible brand statement, clear positioning — is the prerequisite for the tactical GEO work covered in The Complete Guide to Dominating AI Search.",
      },
      {
        question: "What does this book mean by \"innovation culture\"?",
        answer:
          "Innovation culture is not about acquiring the newest tools — it's about building an organization that adapts systematically to disruption, with processes and decision-making structures designed to respond to change rather than react to it after the fact.",
      },
      {
        question: "Who should read The Business Strategy Plan?",
        answer:
          "Founders, executives, and operators who want to design their business deliberately, defining strategic identity, innovation culture, and long-term architecture before moving into tactical execution or writing a formal business plan.",
      },
    ],
  },
  {
    slug: "rockefeller-letters",
    title: "The 38 Letters of Rockefeller to His Son",
    subtitle: "With Author's Reflections",
    seriesPosition: 2,
    inCoreSeries: true,
    buyUrl: "https://a.co/d/06Ea10X4",
    coverImage: {
      src: "/books/38-letters-rockefeller.jpg",
      width: 2400,
      height: 2400,
    },
    accentColor: "#C81E1E",
    isPlaceholder: false,
    shortDescription:
      "Thirty-eight letters. Timeless lessons. The private counsel John D. Rockefeller gave his son on discipline, judgment, responsibility, and the long view required to build something that lasts. Not advice meant to comfort — but wisdom meant to forge resilience in the next generation of leaders.",
    mediumDescription:
      "What makes these letters enduring is not their origin in the Gilded Age, but their focus on questions that confront every serious leader: How do you think clearly under pressure? How do you build something that lasts? How do you prepare the next generation not merely to inherit, but to lead?\n\nRockefeller's counsel is strategic, psychological, and unforgiving in its honesty. Each letter addresses discipline, judgment, responsibility, and the long view required to steward organizations, capital, and influence across decades.\n\nWithin The Business Strategy Series, this second volume provides the leadership and philosophical foundation that must follow strategic design. Where Book One establishes how a business should be structured, this book examines how leaders must think in order to preserve, scale, and govern what they build.\n\nFor entrepreneurs, executives, and long-term thinkers who seek not only to build organizations — but to lead them with clarity, discipline, and purpose.",
    whoItsFor:
      "Entrepreneurs, executives, and long-term thinkers who seek not only to build organizations, but to lead them with clarity, discipline, and purpose.",
    keyTakeaways: [
      "Wealth without wisdom is merely inheritance, and power without principle is only temporary.",
      "The letters weren't meant to comfort — they were designed to forge resilience, a kind of honest counsel modern leadership often lacks.",
      "Judgment and discipline are learned through deliberate practice, not inherited; the letters provide a curriculum for developing both.",
      "Long-term thinking is a competitive advantage most leaders talk about but few practice — Rockefeller measured decisions in decades, not quarters.",
      "Within The Business Strategy Series, this book provides the leadership and philosophical foundation that follows strategic design, examining how leaders must think in order to preserve, scale, and govern what they build.",
    ],
    faq: [
      {
        question: "Why did Parham Shariat write about Rockefeller's letters to his son?",
        answer:
          "Parham wrote about Rockefeller's letters because he saw a gap: business audiences are saturated with get-rich-quick tactics and unproven advice but starving for wisdom about how to think. Rockefeller's private counsel to his son isn't motivational fluff — it's unfiltered lessons on judgment, discipline, and the long view, which modern leaders need but rarely get anywhere else.",
      },
      {
        question: "What is the most valuable lesson from Rockefeller's letters for today's entrepreneurs?",
        answer:
          "Think in decades, not quarters. Rockefeller built across generations by measuring success differently, and he understood that judgment isn't inherited — it's developed through deliberate practice. His letters function as a curriculum for developing that judgment, something modern business education rarely provides.",
      },
      {
        question: "How does this book fit within The Business Strategy Series?",
        answer:
          "It's Book Two. Where Book One, The Business Strategy Plan, establishes how a business should be structured, The 38 Letters of Rockefeller to His Son examines how leaders must think in order to preserve, scale, and govern what they build — the leadership and philosophical foundation that follows strategic design.",
      },
      {
        question: "What time period do the 38 letters span?",
        answer:
          "The letters span 1855 to 1936, offering genuine historical correspondence from John D. Rockefeller to his son, presented here with the author's reflections connecting that counsel to modern business leadership.",
      },
      {
        question: "Who should read The 38 Letters of Rockefeller to His Son?",
        answer:
          "Entrepreneurs, executives, and long-term thinkers who want to lead the organizations they build with clarity, discipline, and purpose — not just build them.",
      },
    ],
  },
  {
    slug: "dominating-ai-search",
    title: "The Complete Guide to Dominating AI Search",
    subtitle: "A Proven Framework for Generative Engine Optimization",
    seriesPosition: null,
    inCoreSeries: true,
    buyUrl: "https://a.co/d/0fdNmDWU",
    coverImage: {
      src: "/books/complete-guide-dominating-ai-search.jpg",
      width: 1552,
      height: 2498,
    },
    accentColor: "#2D3B87",
    isPlaceholder: false,
    shortDescription:
      "Your prospects aren't Googling anymore — they're asking AI. This field-tested framework shows exactly how to get your business recommended by ChatGPT, Claude, Perplexity, and other AI platforms. Based on 11 months of research that increased citation visibility from 4% to 43% in 90 days.",
    mediumDescription:
      "When was the last time your company was recommended by an AI platform? If the answer is \"never,\" the cost is not hypothetical — it is lost revenue, missed opportunities, and declining market relevance.\n\nMore than 60% of professionals now use AI systems for work-related research. Yet most businesses appear in fewer than 10% of AI-generated answers — even when they rank well on Google. Why? Because traditional SEO was never designed for AI search. AI systems don't rank websites. They cite sources inside generated answers. There is no page two. You're either referenced — or invisible.\n\nAfter analyzing 50+ businesses over eleven months, this book presents the complete Generative Engine Optimization framework: foundation architecture, the Atomic Answer Block content system, a 90-day execution plan, authority signals, distribution strategy, and measurement protocols.\n\nThe window for first-mover advantage is closing. This is the exact system already producing measurable revenue through AI-driven discovery.",
    whoItsFor:
      "Business owners, marketers, and strategists who want their business cited by AI platforms like ChatGPT, Claude, and Perplexity — not just ranked on Google.",
    keyTakeaways: [
      "AI systems don't rank websites the way Google does — they cite sources inside generated answers. There is no page two: you're either referenced or invisible.",
      "More than 60% of professionals now use AI systems for work-related research, yet most businesses appear in fewer than 10% of AI-generated answers.",
      "The GEO framework increased one business's AI citation visibility from 4% to 43% in 90 days, generating more than $50,000 in directly attributable revenue.",
      "AI systems prefer 'Atomic Answer Blocks' — clear, specific, citable statements — over content structured for human browsing rather than AI synthesis.",
      "The window for first-mover advantage in AI search is roughly 12–18 months; businesses implementing GEO now build citation leads that compound for years.",
    ],
    faq: [
      {
        question: "What is Generative Engine Optimization (GEO) and why does it matter now?",
        answer:
          "GEO is the practice of optimizing a business to be cited by AI platforms like ChatGPT, Claude, and Perplexity. It matters because more than 60% of professionals now use AI for research and decisions — traditional SEO ranks websites, but AI doesn't rank, it cites. A business that isn't cited is invisible to a growing majority of its prospects.",
      },
      {
        question: "Why do most businesses appear in fewer than 10% of relevant AI answers?",
        answer:
          "Because their content wasn't structured for how AI systems work. AI looks for 'Atomic Answer Blocks' — clear, specific, citable statements. Most business content is too vague, too promotional, or structured for human browsing rather than AI synthesis, and small structural changes can dramatically improve citation rates.",
      },
      {
        question: "What's the first thing a business should do to improve AI visibility?",
        answer:
          "Audit the brand statement. If AI systems can't clearly understand what a business does, who it serves, and what makes it different, that positioning is invisible to AI the same way it's unclear to humans. Strategic clarity is the foundation everything else in the GEO framework builds on.",
      },
      {
        question: "What results has the GEO framework produced?",
        answer:
          "Applied over an 11-month research initiative analyzing 50+ businesses, the GEO framework increased AI citation visibility from 4% to 43% in 90 days for one business, generating more than $50,000 in directly attributable revenue.",
      },
      {
        question: "Who should read The Complete Guide to Dominating AI Search?",
        answer:
          "Business owners, marketers, and strategists who want their business recommended by AI platforms rather than just ranked on Google — anyone whose prospects have started asking AI instead of searching.",
      },
    ],
  },
  {
    slug: "digital-real-estate",
    title: "Digital Real Estate",
    subtitle: "How to Own More Space on the Internet",
    seriesPosition: null,
    inCoreSeries: false,
    buyUrl: "https://a.co/d/032T6v07",
    coverImage: {
      src: "/books/digital-real-estate.jpg",
      width: 807,
      height: 1235,
    },
    accentColor: "#8E1F9C",
    isPlaceholder: true,
    shortDescription: "[[PLACEHOLDER — DO NOT PUBLISH]]",
    mediumDescription: "[[PLACEHOLDER — DO NOT PUBLISH]]",
    whoItsFor: "[[PLACEHOLDER — DO NOT PUBLISH]]",
    keyTakeaways: [],
    faq: [
      {
        question: "Who wrote Digital Real Estate: How to Own More Space on the Internet?",
        answer:
          "Digital Real Estate: How to Own More Space on the Internet was written by Parham Shariat, business strategist and author of The Business Strategy Series.",
      },
      {
        question: "Where can I buy Digital Real Estate?",
        answer: "Digital Real Estate is available on Amazon.",
      },
    ],
  },
  {
    slug: "six-ways-to-make-a-seven",
    title: "Six Ways to Make a Seven",
    subtitle: "Knowing When to Walk Away",
    seriesPosition: null,
    inCoreSeries: false,
    buyUrl: "https://a.co/d/0dz0a1B2",
    coverImage: {
      src: "/books/six-ways-to-make-a-seven.jpg",
      width: 674,
      height: 1234,
    },
    accentColor: "#1A1A1A",
    isPlaceholder: true,
    shortDescription: "[[PLACEHOLDER — DO NOT PUBLISH]]",
    mediumDescription: "[[PLACEHOLDER — DO NOT PUBLISH]]",
    // Confirmed positioning from Parham (not invented): written for a distinct, younger entrepreneurial audience.
    whoItsFor:
      "Written for a distinct, younger entrepreneurial audience. [[Remaining description PLACEHOLDER — DO NOT PUBLISH]]",
    keyTakeaways: [],
    faq: [
      {
        question: "Who wrote Six Ways to Make a Seven?",
        answer:
          "Six Ways to Make a Seven: Knowing When to Walk Away was written by Parham Shariat, business strategist and author of The Business Strategy Series.",
      },
      {
        question: "Who is Six Ways to Make a Seven written for?",
        answer:
          "Six Ways to Make a Seven is written for a distinct, younger entrepreneurial audience.",
      },
      {
        question: "Where can I buy Six Ways to Make a Seven?",
        answer: "Six Ways to Make a Seven is available on Amazon.",
      },
    ],
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

/** Meta descriptions must never leak the raw [[PLACEHOLDER]] marker text. */
export function getMetaDescription(book: Book): string {
  if (book.isPlaceholder) {
    return `${book.title}: ${book.subtitle} — a book by Parham Shariat, business strategist and author.`;
  }
  return book.shortDescription;
}

export const coreSeriesBooks = books.filter((book) => book.inCoreSeries);
export const standaloneBooks = books.filter((book) => !book.inCoreSeries);

export const seriesFaq: BookFaq[] = [
  {
    question: "What's the story behind Parham Shariat's AI search research?",
    answer:
      "Parham's wife is an attorney. A potential client told her that ChatGPT had recommended her practice out of thousands of lawyers in the area. That moment launched an 11-month research initiative analyzing 50+ businesses to identify the exact signals that trigger AI citations — research that became The Complete Guide to Dominating AI Search.",
  },
  {
    question: "How do the three books in The Business Strategy Series work together?",
    answer:
      "The Business Strategy Plan provides the methodology for designing a business. The 38 Letters of Rockefeller to His Son provides the leadership wisdom for executing and scaling it. The Complete Guide to Dominating AI Search provides the tactical playbook for being discovered in the AI search landscape. Strategy, leadership, then visibility — in that order.",
  },
  {
    question: "What do these books ask readers to do differently?",
    answer:
      "Stop building reactively, stop assuming what worked five years ago still works, and stop skipping strategy to jump straight into tactics. In the age of AI, clarity of strategy is the ultimate competitive advantage — a pattern Parham has observed across every successful business he has worked with.",
  },
  {
    question: "How does Parham Shariat's international business experience shape this series?",
    answer:
      "Parham has built and advised companies across three continents, including the US, UAE, and emerging markets. That experience taught him that tactics change by context, but strategic principles are universal — which is why the series pairs timeless leadership principles with current AI-search applications rather than treating them as separate subjects.",
  },
];
