import { siGithub } from "simple-icons";

import { siLinkedin } from "../icons/linkedin";

export const TAGLINE = ["Engineering", "Linguistics", "Art"] as const;


export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sonya-kim", icon: siLinkedin },
  { label: "GitHub", href: "https://github.com/sonyakim-dev", icon: siGithub },
] as const;
