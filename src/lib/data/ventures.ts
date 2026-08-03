export type Venture = {
  name: string;
  /** [[PLACEHOLDER — DO NOT PUBLISH]] until Parham confirms the live URL. */
  url: string;
  description: string;
  /** Optional path under /public for a venture's own logo, shown instead of the text wordmark. */
  logo?: string;
  secondaryCta?: { label: string; url: string };
};

export const ventures: Venture[] = [
  {
    name: "Powerful Blueprints",
    url: "https://www.powerfulblueprints.com",
    description:
      "An online publication where CEOs, authors, and artists sit for a structured interview, and we write a professional article about their story. I started it because I'd rather read someone's real journey than what they post on social media.",
    secondaryCta: {
      label: "Nominate someone",
      url: "https://www.powerfulblueprints.com/nominate",
    },
  },
];
