export type PressFeature = {
  outlet: string;
  title: string;
  description: string;
  url: string;
  logo?: { src: string; width: number; height: number };
};

export const pressFeatures: PressFeature[] = [
  {
    outlet: "CanvasRebel",
    title: "Meet Parham Shariat",
    description:
      "A profile on Parham's path into business strategy and building companies across multiple continents.",
    url: "https://canvasrebel.com/meet-parham-shariat/",
    logo: { src: "/images/canvasrebel.png", width: 674, height: 170 },
  },
  {
    outlet: "VoyageLA",
    title: "Hidden Gems: Meet Parham Shariat of ReTHINK CNERGY, LLC",
    description:
      "An interview covering Parham's career, entrepreneurial ventures, and approach to strategy.",
    url: "https://voyagela.com/interview/hidden-gems-meet-parham-shariat-of-rethink-cnergy-llc/",
    logo: { src: "/images/voyagela.png", width: 2108, height: 656 },
  },
  {
    outlet: "Bold Journey",
    title: "Meet Parham Shariat",
    description:
      "A profile on Parham's career, entrepreneurial ventures, and approach to strategy.",
    url: "https://boldjourney.com/meet-parham-shariat/",
    logo: { src: "/images/boldjourney.png", width: 544, height: 272 },
  },
  {
    outlet: "Office Optima Pro",
    title: "Parham Shariatzadeh on Rebuilding Business Strategy for the AI Age",
    description:
      "A syndicated feature on Parham's work developing the Generative Engine Optimization methodology.",
    url: "https://officeoptimapro.com/parham-shariatzadeh-on-rebuilding-business-strategy-for-the-ai-age.html?amp=1",
  },
];
