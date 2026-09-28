import type { TechKey } from "./tech";

// Two separate lists on purpose: a short credit line for the hero, and the detailed cards below it.
// Edit them independently; neither is derived from the other.

/** Hero credits ticker (top page): keep these short. */
export type HeroCredit = {
  role: string;
  company: string;
  /** Short, e.g. "2024" or "2025 – 2026" */
  year: string;
};

export const HERO_EXPERIENCE: HeroCredit[] = [
  { role: "Software Engineer", company: "?", year: "2026" },
  { role: "Software Engineer", company: "Snap", year: "2025 - 2026" },
  { role: "Software Engineer Intern", company: "Snap", year: "2024" },
  { role: "Software Engineer Intern", company: "Snap", year: "2023" },
];

/** Detailed experience cards (Experience section). Optional fields are hidden until filled in. */
export type Experience = {
  role: string;
  company: string;
  /** e.g. "Aug 2025 – Apr 2026" */
  period: string;
  /** Team or product area, e.g. "Media Delivery Platform backend" */
  team?: string;
  location?: string;
  /** One-line summary written by Sonya. Leave empty until then: the card shows a visible placeholder. */
  summary?: string;
  /** A few bullet points: what you built, shipped or improved */
  highlights?: string[];
  tech?: TechKey[];
};

// Job history, newest first.
export const EXPERIENCES: Experience[] = [
  // { role: "Software Engineer", company: "Linktree", period: "2026" },
  { role: "Software Engineer", company: "?", period: "2026" },
  {
    role: "Software Engineer",
    company: "Snap Inc.",
    period: "Aug 2025 – Apr 2026",
    team: "Media Delivery Platform Backend",
    tech: ["go", "java", "python", "aws", "gcp"],
    summary: "",
  },
  {
    role: "AI Studio Fellow",
    company: "Yardsworth",
    period: "Aug 2024 – Dec 2024",
    tech: ["python"],
  },
  {
    role: "Software Engineer Intern",
    company: "Snap Inc.",
    period: "Jun 2024 - Sep 2024",
    team: "ML Inference Platform Backend",
    tech: ["python", "gcp"],
  },
  {
    role: "Software Developer",
    company: "El Camino College",
    period: "Apr 2023 - Sep 2024",
    tech: ["python"],
  },
  {
    role: "Software Engineer Intern",
    company: "Snap Inc.",
    period: "May 2023 - Sep 2023",
    team: "Ads Business Platform Frontend",
    tech: ["react", "typescript"],
    summary: "",
  },
];
