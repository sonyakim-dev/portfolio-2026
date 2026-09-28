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
import type { TechKey } from "./tech";

export type Project = {
  title: string;
  description?: string;
  category: string;
  tech: TechKey[];
  url: string;
  image: string;
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
    url: "https://sonyakim.webflow.io/project/targetvr",
    image: targetVr,
  },
  {
    title: "forme.Love",
    category: "Web Design",
    tech: ["shopify", "photoshop"],
    url: "https://sonyakim.webflow.io/project/formelove",
    image: formeLove,
  },
  {
    title: "Promotion Design",
    category: "Visual Design",
    tech: ["photoshop"],
    url: "https://sonyakim.webflow.io/project/dna",
    image: promotionDesign,
  },
  {
    title: "Craft Trend Fair",
    category: "Jewelry Design",
    tech: ["craft"],
    url: "https://sonyakim.webflow.io/project/crafttrendfair",
    image: craftTrendFair,
    description: "Twenty Question, Twenty Answers — I live up my life today.",
  },
  {
    title: "Cosmos",
    category: "Living Design",
    tech: ["craft"],
    url: "https://sonyakim.squarespace.com/projects/living-design",
    image: cosmos,
    description:
      "Above my head floats the universe of a girl who once looked up at the sky and dreamed of going to space.",
  },
  {
    title: "Fantasy",
    category: "Jewelry Design",
    tech: ["craft"],
    url: "https://sonyakim.squarespace.com/projects/jewelry-design",
    image: fantasy,
    description:
      "Pleasure is one of humanity's most basic and instinctive desires. And money may be the most powerful drug of all — one that promises pleasure.",
  },
];
