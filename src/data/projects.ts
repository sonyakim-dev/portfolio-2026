import cosmos from "@/assets/projects/cosmos.webp";
import craftTrendFair from "@/assets/projects/craft-trend-fair.webp";
import fantasy from "@/assets/projects/fantasy.webp";
import formeLove from "@/assets/projects/forme-love.webp";
import iceman from "@/assets/projects/iceman.webp";
import mooTea from "@/assets/projects/moo-tea.webp";
import promotionDesign from "@/assets/projects/promotion-design.webp";
import targetVr from "@/assets/projects/target-vr.webp";
import todayIsAHoliday from "@/assets/projects/today-is-a-holiday.webp";
import youBelong from "@/assets/projects/youbelong.webp";
import {
  COSMOS_GALLERY,
  CRAFT_TREND_FAIR_GALLERY,
  FANTASY_GALLERY,
  FORME_LOVE_GALLERY,
  PROMOTION_DESIGN_GALLERY,
  TARGET_VR_GALLERY,
  type ProjectGallery,
} from "./galleries";
import type { TechKey } from "./tech";

export type Project = {
  title: string;
  description?: string;
  category: string;
  tech: TechKey[];
  image: string;
  url?: string;
  /** Copied project page, opened in a dialog instead of an external link. */
  gallery?: ProjectGallery;
};

// Stacks come from each repo's package.json / GitHub languages; Target VR = Unity + C#.
export const PROJECTS: Project[] = [
  {
    title: "YouBelong",
    category: "App Dev",
    tech: ["reactNative", "javascript", "firebase", "expo"],
    url: "https://github.com/sonyakim-dev/YouBelong",
    image: youBelong,
    description:
      "A new Snap mini prototype “YouBelong” that provides a community platform for foster youth to share their authenticity, self-expression, and happiness.",
  },
  {
    title: "Today is a Holiday",
    category: "Web Dev",
    tech: ["react", "javascript", "mui"],
    url: "https://github.com/sonyakim-dev/today-is-holiday",
    image: todayIsAHoliday,
    description: "Display today's holidays from 110 countries and the country's information.",
  },
  {
    title: "Moo Tea",
    category: "Web Dev",
    tech: ["javascript", "html", "css"],
    url: "https://github.com/sonyakim-dev/SEA2022-ProjectAssessment",
    image: mooTea,
  },
  {
    title: "Iceman Game",
    category: "Game Dev",
    tech: ["cpp"],
    url: "https://github.com/sonyakim-dev/CS30-Project4-IceMan",
    image: iceman,
  },
  {
    title: "Target VR",
    category: "Game Dev",
    tech: ["csharp", "unity"],
    gallery: TARGET_VR_GALLERY,
    image: targetVr,
  },
  {
    title: "forme.Love",
    category: "Web Design",
    tech: ["shopify", "photoshop"],
    gallery: FORME_LOVE_GALLERY,
    image: formeLove,
  },
  {
    title: "Promotion Design",
    category: "Visual Design",
    tech: ["photoshop"],
    gallery: PROMOTION_DESIGN_GALLERY,
    image: promotionDesign,
  },
  {
    title: "Craft Trend Fair",
    category: "Jewelry Design",
    tech: ["craft"],
    gallery: CRAFT_TREND_FAIR_GALLERY,
    image: craftTrendFair,
    description: "Twenty Question, Twenty Answers — I live up my life today.",
  },
  {
    title: "Cosmos",
    category: "Living Design",
    tech: ["craft"],
    image: cosmos,
    gallery: COSMOS_GALLERY,
    description:
      "Above my head floats the universe of a girl who once looked up at the sky and dreamed of going to space.",
  },
  {
    title: "Fantasy",
    category: "Jewelry Design",
    tech: ["craft"],
    image: fantasy,
    gallery: FANTASY_GALLERY,
    description:
      "Pleasure is one of humanity's most basic and instinctive desires. And money may be the most powerful drug of all — one that promises pleasure.",
  },
];
