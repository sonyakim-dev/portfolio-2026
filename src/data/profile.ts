import { siGithub } from "simple-icons";

import { siLinkedin } from "../icons/linkedin";

export const TAGLINE = ["Engineering", "Linguistics", "Art"] as const;

export const EXPERIENCE = [
  // { role: "Software Engineer", company: "Linktree", year: "2026" },
  { role: "Software Engineer", company: "?", year: "2026" },
  { role: "Software Engineer", company: "Snap", year: "2025 - 2026" },
  { role: "Software Engineer Intern", company: "Snap", year: "2025" },
  { role: "Software Engineer Intern", company: "Snap", year: "2024" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sonya-kim", icon: siLinkedin },
  { label: "GitHub", href: "https://github.com/sonyakim-dev", icon: siGithub },
] as const;
