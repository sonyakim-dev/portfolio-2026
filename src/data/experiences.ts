import type { TechKey } from "./tech";

// Two separate lists on purpose: a short credit line for the hero, and the detailed cards below it.
// Edit them independently; neither is derived from the other.

/** Hero credits ticker (top page): keep these short. */
export type HeroCredit = {
  role: string;
  company: string;
  year: string;
};

export const HERO_EXPERIENCE: HeroCredit[] = [
  { role: "Software Engineer", company: "?", year: "2026 - NOW" },
  { role: "Software Engineer", company: "Snap", year: "2025 - 2026" },
  { role: "Software Engineer Intern", company: "Snap", year: "2024" },
  { role: "Software Engineer Intern", company: "Snap", year: "2023" },
];

/** Detailed experience cards (Experience section). Optional fields are hidden until filled in. */
export type Experience = {
  role: string;
  company: string;
  period: string;
  team?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  tech?: TechKey[];
};

// Job history, newest first.
export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "?",
    period: "2026 - Current",
    location: "Remote",
    highlights: ["Ready to go. Coming soon."],
  },
  {
    role: "Software Engineer",
    company: "Snap Inc.",
    period: "Aug 2025 - Apr 2026",
    team: "Media Delivery Platform Backend",
    location: "Santa Monica, CA",
    tech: ["go", "java", "python", "aws", "gcp"],
    highlights: [
      "Developed a Video Quality Assessment (VQA) pipeline to support A/B testing for client-side Video Super-Resolution (VSR), enabling VSR model rollout that reduced video delivery costs while improving playback quality and user engagement.",
      "Contributed to monetization infrastructure by enabling revenue attribution for subsidized ad content, extending a core media API to extract embedded partner metadata and restoring end-to-end validation across systems.",
    ],
  },
  {
    role: "AI Studio Fellow",
    company: "Yardsworth",
    period: "Aug 2024 - Dec 2024",
    location: "Remote",
    tech: ["python"],
    highlights: [
      "Designed an algorithm to compute the largest buildable rectangular area within residential lots using property data and satellite imagery, enabling scalable ADU (Accessory Dwelling Unit) feasibility analysis across Los Angeles County to help reduce mortgage burdens and address the housing crisis.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Snap Inc.",
    period: "Jun 2024 - Sep 2024",
    team: "ML Inference Platform Backend",
    location: "Santa Monica, CA",
    tech: ["python", "java", "gcp"],
    highlights: [
      "Improved model search performance by optimizing filtering, sorting, and data migration on Google Cloud Datastore, significantly reducing lookup time for the latest models.",
      "Proposed a scalable deployment pipeline for PyTorch models across GCP Kubernetes and AWS using Temporal for orchestration, and contributed to improving system reliability through testing and validation improvements.",
    ],
  },
  {
    role: "Software Developer",
    company: "El Camino College",
    period: "Apr 2023 - Sep 2024",
    location: "Remote",
    tech: ["python", "html"],
    highlights: [
      "Built an automated assessment generator using Python (Matplotlib, SciPy) to create randomized problem sets, improving accessibility and reducing the cost of course materials for students.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Snap Inc.",
    period: "May 2023 - Sep 2023",
    team: "Ads Business Platform Frontend",
    location: "Santa Monica, CA",
    tech: ["react", "typescript", "graphql"],
    highlights: [
      "Integrated contextual Business Help Center content into the Ads interface via Salesforce APIs, increasing ad setup completion rates and reducing support demand.",
      "Developed a centralized platform page for codeless ad integrations and improved connected partner discovery using GraphQL-based filtering.",
    ],
  },
];
