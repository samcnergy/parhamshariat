export type BookFaq = {
  question: string;
  answer: string;
};

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  /** "Book N" label shown on the site — renumbered to match the narrative journey order (strategy → footprint → execution → younger-audience → companion), per Parham's confirmed decision, even where it diverges from the physical cover print. */
  seriesPosition: number;
  /** Short label for this book's role in the journey narrative (hub page + home page strip). */
  journeyRole: string;
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

export const seriesName = "The Business Strategy Series";

export const books: Book[] = [
  {
    slug: "business-strategy-plan",
    title: "The Business Strategy Plan",
    subtitle: "In the Age of AI",
    seriesPosition: 1,
    journeyRole: "The Foundation",
    buyUrl: "https://a.co/d/00qpaf4W",
    coverImage: {
      src: "/books/business-strategy-plan.jpg",
      width: 2000,
      height: 3070,
    },
    accentColor: "#6B7F3A",
    isPlaceholder: false,
    shortDescription:
      "Before you write a business plan, you need a strategy. This foundational guide provides the frameworks for designing businesses deliberately: defining strategic identity, building innovation cultures, planning for crises, and architecting for long-term value creation in an AI-driven economy. Strategy before tactics. Always.",
    mediumDescription:
      "Most founders write a business plan before they've answered a single strategic question, and pay for it later. A rushed positioning, a name that doesn't hold up, a structure that can't survive its first real pivot. Multiply that by the hours spent rebuilding and the money spent finding out the hard way, and it's not a rounding error. It's hundreds of hours and hundreds of thousands of dollars. And it's avoidable.\n\nThe Business Strategy Plan is the step before the business plan. It gives you the methodology to define your strategic identity through a clear, defensible brand statement, before you name the company, before you write the deck, before you spend a dollar on execution. Learn how to choose names, narratives, and structures that AI systems can recognize and recommend, how to build a culture that adapts to disruption instead of getting blindsided by it, and how to plan for crises and competitive shifts before they happen instead of after.\n\nThis is not a book about tactics. It's about the thinking layer that determines whether your tactics ever get a chance to work. Read it before you write your business plan, not after you've already spent the money finding out what's missing from it. It's the first book in The Business Strategy Series, distilled from two decades of Parham Shariat's work building and advising companies across three continents.",
    whoItsFor:
      "Young entrepreneurs and first-time founders about to write a business plan. Read this first: the decisions in these pages are the ones that decide whether the next few years build something durable, or cost you hundreds of hours and hundreds of thousands of dollars finding out the hard way.",
    keyTakeaways: [
      "Strategy must come before tactics: most businesses fail not from bad execution, but from executing without a strategic foundation.",
      "A defensible brand statement is the cornerstone of strategic identity and should guide every decision from hiring to product development.",
      "In the age of AI, discoverability depends on strategic clarity. AI systems recommend businesses they can clearly understand and categorize.",
      "Innovation culture means building organizations that adapt systematically to disruption, not simply adopting the newest tools.",
      "The best time to plan for acquisition, exit, or succession is before you need to. Strategic architecture anticipates endings from the beginning.",
    ],
    faq: [
      {
        question: "Why does strategy have to come before a business plan?",
        answer:
          "A business plan is a document; strategy is the thinking that should inform every line of that document. Most founders skip straight to financial projections without answering foundational questions (what's our strategic identity, how will we adapt to disruption, what's our long-term architecture) and end up with a plan built on sand.",
      },
      {
        question: "What is a defensible brand statement, and why does it matter?",
        answer:
          "A defensible brand statement is a clear, specific articulation of strategic identity that guides every decision from hiring to product development. It matters because it is also what allows AI systems to correctly understand, categorize, and recommend a business. Vague positioning is invisible to both customers and AI search.",
      },
      {
        question: "Is this a book about AI, or about strategy?",
        answer:
          "It's a strategy book first. The Business Strategy Plan lays out the frameworks for designing a business deliberately: strategic identity, innovation culture, crisis planning, long-term architecture. AI-era discoverability is one consideration inside that larger strategic picture, not the subject of the book.",
      },
      {
        question: "What does this book mean by \"innovation culture\"?",
        answer:
          "Innovation culture is not about acquiring the newest tools. It's about building an organization that adapts systematically to disruption, with processes and decision-making structures designed to respond to change rather than react to it after the fact.",
      },
      {
        question: "Who should read The Business Strategy Plan?",
        answer:
          "Founders, executives, and operators who want to design their business deliberately, defining strategic identity, innovation culture, and long-term architecture before moving into tactical execution or writing a formal business plan.",
      },
    ],
  },
  {
    slug: "digital-real-estate",
    title: "Digital Real Estate",
    subtitle: "How to Own More Space on the Internet",
    seriesPosition: 2,
    journeyRole: "The Shift",
    buyUrl: "https://a.co/d/032T6v07",
    coverImage: {
      src: "/books/digital-real-estate.jpg",
      width: 2148,
      height: 3300,
    },
    accentColor: "#8E1F9C",
    isPlaceholder: false,
    shortDescription:
      "If people had to pay to see your posts, would they? Digital Real Estate shows you how to stop filling someone else's platform and start building digital assets: online property that appreciates instead of disappearing by morning.",
    mediumDescription:
      "Ask yourself one question and answer it honestly. If people had to pay to see your posts on social media, would they pay?\n\nIf the answer is no, your digital assets are worthless. You are not building a digital real estate portfolio. You are filling someone else's platform with work that disappears by morning.\n\nMost people never have a strategy for building a digital footprint worth owning. They pour hours into posting stuff that has no value beyond three seconds. It gets a glance, maybe a like, and then it's gone. Years of effort, nothing to show for it.\n\nWhen you want to build a house, you first hire an architect. Once the vision is on paper, a contractor builds it. Digital Real Estate works the same way. You have to design what you're trying to build, then execute it, and do it consistently.\n\nAlmost nobody teaches this. Endless advice on going viral, almost none on owning ground. This book is the missing piece.",
    whoItsFor:
      "Anyone with real expertise and nothing online to show for it. If you're sitting on undeveloped land (pouring hours into content that disappears by morning instead of building something you actually own), this book hands you the blueprint.",
    keyTakeaways: [
      "Why a digital footprint built the right way becomes an asset that lasts, not content that disappears by morning.",
      "How to tell prime online property from an empty lot.",
      "How to build digital assets that AI search engines find, trust, and recommend.",
      "The framework for turning content into property that appreciates instead of disappearing.",
    ],
    faq: [
      {
        question: "Who wrote Digital Real Estate: How to Own More Space on the Internet?",
        answer:
          "Digital Real Estate: How to Own More Space on the Internet was written by Parham Shariat, author of The Business Strategy Series and Founder & Chief Strategy Officer of ReTHINK CNERGY.",
      },
      {
        question: "Where does Digital Real Estate fit in The Business Strategy Series?",
        answer:
          "It's Book Two: the shift from strategic foundation (Book One, The Business Strategy Plan) to recognizing content and online presence as the new competitive battleground, ahead of the tactical execution playbook in Book Three, The Complete Guide to Dominating AI Search.",
      },
      {
        question: "Where can I buy Digital Real Estate?",
        answer: "Digital Real Estate is available on Amazon.",
      },
    ],
  },
  {
    slug: "dominating-ai-search",
    title: "The Complete Guide to Dominating AI Search",
    subtitle: "A Proven Framework for Generative Engine Optimization",
    seriesPosition: 3,
    journeyRole: "The Execution Playbook",
    buyUrl: "https://a.co/d/0fdNmDWU",
    coverImage: {
      src: "/books/complete-guide-dominating-ai-search.jpg",
      width: 1552,
      height: 2498,
    },
    accentColor: "#2D3B87",
    isPlaceholder: false,
    shortDescription:
      "Your prospects aren't Googling anymore. They're asking AI. This field-tested framework shows exactly how to get your business recommended by ChatGPT, Claude, Perplexity, and other AI platforms. Based on 11 months of research that increased citation visibility from 4% to 43% in 90 days.",
    mediumDescription:
      "When was the last time your company was recommended by an AI platform? If the answer is \"never,\" the cost is not hypothetical. It is lost revenue, missed opportunities, and declining market relevance.\n\nMore than 60% of professionals now use AI systems for work-related research. Yet most businesses appear in fewer than 10% of AI-generated answers, even when they rank well on Google. Why? Because traditional SEO was never designed for AI search. AI systems don't rank websites. They cite sources inside generated answers. There is no page two. You're either referenced or invisible.\n\nAfter analyzing 50+ businesses over eleven months, this book presents the complete Generative Engine Optimization framework: foundation architecture, the Atomic Answer Block content system, a 90-day execution plan, authority signals, distribution strategy, and measurement protocols.\n\nIt's the third book in The Business Strategy Series: the execution playbook that follows two decades of strategic groundwork, not a standalone trend.",
    whoItsFor:
      "Business owners, marketers, and strategists who want their business cited by AI platforms like ChatGPT, Claude, and Perplexity, not just ranked on Google.",
    keyTakeaways: [
      "AI systems don't rank websites the way Google does. They cite sources inside generated answers. There is no page two: you're either referenced or invisible.",
      "More than 60% of professionals now use AI systems for work-related research, yet most businesses appear in fewer than 10% of AI-generated answers.",
      "The GEO framework increased one business's AI citation visibility from 4% to 43% in 90 days, generating more than $50,000 in directly attributable revenue.",
      "AI systems prefer 'Atomic Answer Blocks' (clear, specific, citable statements) over content structured for human browsing rather than AI synthesis.",
      "The window for first-mover advantage in AI search is roughly 12–18 months; businesses implementing GEO now build citation leads that compound for years.",
    ],
    faq: [
      {
        question: "What is Generative Engine Optimization (GEO) and why does it matter now?",
        answer:
          "GEO is the practice of optimizing a business to be cited by AI platforms like ChatGPT, Claude, and Perplexity. It matters because more than 60% of professionals now use AI for research and decisions. Traditional SEO ranks websites, but AI doesn't rank, it cites. A business that isn't cited is invisible to a growing majority of its prospects.",
      },
      {
        question: "Why do most businesses appear in fewer than 10% of relevant AI answers?",
        answer:
          "Because their content wasn't structured for how AI systems work. AI looks for 'Atomic Answer Blocks': clear, specific, citable statements. Most business content is too vague, too promotional, or structured for human browsing rather than AI synthesis, and small structural changes can dramatically improve citation rates.",
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
        question: "How does this book relate to Parham Shariat's other books?",
        answer:
          "It's the third book in The Business Strategy Series, and the execution playbook: The Business Strategy Plan establishes strategic identity, Digital Real Estate identifies the shift toward owning your digital footprint, and this book supplies the step-by-step system for getting cited by AI once that foundation is in place.",
      },
    ],
  },
  {
    slug: "six-ways-to-make-a-seven",
    title: "Six Ways to Make a Seven",
    subtitle: "Knowing When to Walk Away",
    seriesPosition: 4,
    journeyRole: "For a Younger Audience",
    buyUrl: "https://a.co/d/0dz0a1B2",
    coverImage: {
      src: "/books/six-ways-to-make-a-seven.jpg",
      width: 1886,
      height: 3300,
    },
    accentColor: "#1A1A1A",
    isPlaceholder: true,
    shortDescription: "[[PLACEHOLDER: DO NOT PUBLISH]]",
    mediumDescription: "[[PLACEHOLDER: DO NOT PUBLISH]]",
    // Confirmed positioning from Parham (not invented): written for a distinct, younger entrepreneurial audience.
    whoItsFor:
      "Written for a distinct, younger entrepreneurial audience. [[Remaining description PLACEHOLDER: DO NOT PUBLISH]]",
    keyTakeaways: [],
    faq: [
      {
        question: "Who wrote Six Ways to Make a Seven?",
        answer:
          "Six Ways to Make a Seven: Knowing When to Walk Away was written by Parham Shariat, author of The Business Strategy Series and Founder & Chief Strategy Officer of ReTHINK CNERGY.",
      },
      {
        question: "Who is Six Ways to Make a Seven written for?",
        answer:
          "Six Ways to Make a Seven is written for a distinct, younger entrepreneurial audience, set apart from the core three-book strategy series.",
      },
      {
        question: "Where can I buy Six Ways to Make a Seven?",
        answer: "Six Ways to Make a Seven is available on Amazon.",
      },
    ],
  },
  {
    slug: "rockefeller-letters",
    title: "The 38 Letters of Rockefeller to His Son",
    subtitle: "With Author's Reflections",
    seriesPosition: 5,
    journeyRole: "Companion Read",
    buyUrl: "https://a.co/d/06Ea10X4",
    coverImage: {
      src: "/books/38-letters-rockefeller.jpg",
      width: 2000,
      height: 3108,
    },
    accentColor: "#C81E1E",
    isPlaceholder: false,
    shortDescription:
      "Thirty-eight letters. Timeless lessons. The private counsel John D. Rockefeller gave his son on discipline, judgment, responsibility, and the long view required to build something that lasts. Not advice meant to comfort, but wisdom meant to forge resilience in the next generation of leaders.",
    mediumDescription:
      "What makes these letters enduring is not their origin in the Gilded Age, but their focus on questions that confront every serious leader: How do you think clearly under pressure? How do you build something that lasts? How do you prepare the next generation not merely to inherit, but to lead?\n\nRockefeller's counsel is strategic, psychological, and unforgiving in its honesty. Each letter addresses discipline, judgment, responsibility, and the long view required to steward organizations, capital, and influence across decades.\n\nThis is a companion volume within The Business Strategy Series: the leadership and philosophical reading that complements the strategic and tactical frameworks in the other three books, presented with Parham Shariat's own reflections connecting Rockefeller's counsel to modern business leadership.\n\nFor entrepreneurs, executives, and long-term thinkers who seek not only to build organizations, but to lead them with clarity, discipline, and purpose.",
    whoItsFor:
      "Entrepreneurs, executives, and long-term thinkers who seek not only to build organizations, but to lead them with clarity, discipline, and purpose.",
    keyTakeaways: [
      "Wealth without wisdom is merely inheritance, and power without principle is only temporary.",
      "The letters weren't meant to comfort. They were designed to forge resilience, a kind of honest counsel modern leadership often lacks.",
      "Judgment and discipline are learned through deliberate practice, not inherited; the letters provide a curriculum for developing both.",
      "Long-term thinking is a competitive advantage most leaders talk about but few practice. Rockefeller measured decisions in decades, not quarters.",
      "As a companion volume within The Business Strategy Series, this book provides the leadership and philosophical reading that complements the series' strategic and tactical frameworks.",
    ],
    faq: [
      {
        question: "Why did Parham Shariat write about Rockefeller's letters to his son?",
        answer:
          "Parham wrote about Rockefeller's letters because he saw a gap: business audiences are saturated with get-rich-quick tactics and unproven advice but starving for wisdom about how to think. Rockefeller's private counsel to his son isn't motivational fluff. It's unfiltered lessons on judgment, discipline, and the long view, which modern leaders need but rarely get anywhere else.",
      },
      {
        question: "What is the most valuable lesson from Rockefeller's letters for today's entrepreneurs?",
        answer:
          "Think in decades, not quarters. Rockefeller built across generations by measuring success differently, and he understood that judgment isn't inherited. It's developed through deliberate practice. His letters function as a curriculum for developing that judgment, something modern business education rarely provides.",
      },
      {
        question: "How does this book fit within The Business Strategy Series?",
        answer:
          "It's a companion volume, not a sequential step. Where the other three books cover strategic design, digital footprint, and AI-search execution, The 38 Letters of Rockefeller to His Son provides the leadership and philosophical foundation underneath all of it: how leaders must think in order to preserve, scale, and govern what they build.",
      },
      {
        question: "What time period do the 38 letters span?",
        answer:
          "The letters span 1855 to 1936, offering genuine historical correspondence from John D. Rockefeller to his son, presented here with the author's reflections connecting that counsel to modern business leadership.",
      },
      {
        question: "Who should read The 38 Letters of Rockefeller to His Son?",
        answer:
          "Entrepreneurs, executives, and long-term thinkers who want to lead the organizations they build with clarity, discipline, and purpose, not just build them.",
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
    return `${book.title}: ${book.subtitle}, a book by Parham Shariat, author and Founder & Chief Strategy Officer of ReTHINK CNERGY.`;
  }
  return book.shortDescription;
}

/** The three-book core journey, in narrative order: strategy → footprint → execution. */
export const journeyBooks = books.filter((book) => book.seriesPosition <= 3);
/** Set apart from the core journey: a younger-audience title and a companion/bonus read. */
export const furtherReadingBooks = books.filter((book) => book.seriesPosition > 3);

export const seriesFaq: BookFaq[] = [
  {
    question: "What's the story behind Parham Shariat's AI search research?",
    answer:
      "Parham's wife is an attorney. A potential client told her that ChatGPT had recommended her practice out of thousands of lawyers in the area. That moment launched an 11-month research initiative analyzing 50+ businesses to identify the exact signals that trigger AI citations: research that became The Complete Guide to Dominating AI Search, the third book in a series built on two decades of strategy work.",
  },
  {
    question: "How do the books in The Business Strategy Series work together?",
    answer:
      "They follow a journey: The Business Strategy Plan lays the strategic foundation, Digital Real Estate identifies the shift toward owning your digital footprint as AI reshaped discovery, and The Complete Guide to Dominating AI Search supplies the execution playbook for getting cited by AI. Six Ways to Make a Seven is written separately for a younger entrepreneurial audience, and The 38 Letters of Rockefeller to His Son is a companion volume on leadership and judgment.",
  },
  {
    question: "What do these books ask readers to do differently?",
    answer:
      "Stop building reactively, stop assuming what worked five years ago still works, and stop skipping strategy to jump straight into tactics. Clarity of strategy, applied consistently as the landscape changes, is the pattern Parham Shariat has observed across two decades and every successful business he has worked with.",
  },
  {
    question: "How does Parham Shariat's 20-year business background shape this series?",
    answer:
      "Parham has spent over twenty years building and advising companies across three continents, including large corporations and startups. That experience is what led him to identify strategy and execution as the pattern separating success from failure (the premise of The Business Strategy Plan) and later to apply that same strategic lens to how businesses get found online.",
  },
];
