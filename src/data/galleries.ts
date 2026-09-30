import cosmos from "@/assets/projects/cosmos/cosmos.webp";
import cosmosExhibition from "@/assets/projects/cosmos/exhibition.webp";
import cosmosProcess1 from "@/assets/projects/cosmos/process-1.webp";
import cosmosProcess2 from "@/assets/projects/cosmos/process-2.webp";
import cosmosProcess3 from "@/assets/projects/cosmos/process-3.webp";
import cosmosProcess4 from "@/assets/projects/cosmos/process-4.webp";
import cosmosProcess5 from "@/assets/projects/cosmos/process-5.webp";
import cosmosProcess6 from "@/assets/projects/cosmos/process-6.webp";
import cosmosReference1 from "@/assets/projects/cosmos/reference-1.webp";
import cosmosReference2 from "@/assets/projects/cosmos/reference-2.webp";
import ctfBooth from "@/assets/projects/craft-trend-fair/booth.webp";
import ctfIndustrialJewelry from "@/assets/projects/craft-trend-fair/industrial-jewelry.webp";
import ctfPosterFair from "@/assets/projects/craft-trend-fair/poster-fair.webp";
import ctfPosterTwentyQuestions from "@/assets/projects/craft-trend-fair/poster-twenty-questions.webp";
import ctfProcess1 from "@/assets/projects/craft-trend-fair/process-1.webp";
import ctfProcess2 from "@/assets/projects/craft-trend-fair/process-2.webp";
import ctfProcess3 from "@/assets/projects/craft-trend-fair/process-3.webp";
import ctfProcess4 from "@/assets/projects/craft-trend-fair/process-4.webp";
import ctfProcess5 from "@/assets/projects/craft-trend-fair/process-5.webp";
import ctfProcess6 from "@/assets/projects/craft-trend-fair/process-6.webp";
import ctfProcess7 from "@/assets/projects/craft-trend-fair/process-7.webp";
import ctfProcess8 from "@/assets/projects/craft-trend-fair/process-8.webp";
import ctfProcess9 from "@/assets/projects/craft-trend-fair/process-9.webp";
import torporLogo from "@/assets/projects/craft-trend-fair/torpor-logo.webp";
import fantasyWorn from "@/assets/projects/fantasy/fantasy-worn.webp";
import fantasy from "@/assets/projects/fantasy/fantasy.webp";
import fantasyProcess1 from "@/assets/projects/fantasy/process-1.webp";
import fantasyProcess2 from "@/assets/projects/fantasy/process-2.webp";
import fantasyProcess3 from "@/assets/projects/fantasy/process-3.webp";
import fantasyProcess4 from "@/assets/projects/fantasy/process-4.webp";
import fantasyProcess5 from "@/assets/projects/fantasy/process-5.webp";
import fantasyProcess6 from "@/assets/projects/fantasy/process-6.webp";
import fantasyProcess7 from "@/assets/projects/fantasy/process-7.webp";
import fantasyProcess8 from "@/assets/projects/fantasy/process-8.webp";
import fantasyReferenceLasVegas from "@/assets/projects/fantasy/reference-las-vegas.webp";
import fantasyReferencePinball from "@/assets/projects/fantasy/reference-pinball.webp";
import fantasyStyled1 from "@/assets/projects/fantasy/styled-1.webp";
import fantasyStyled2 from "@/assets/projects/fantasy/styled-2.webp";
// import formeInstagram from "@/assets/projects/forme-love/instagram.webp";
import formeLogo from "@/assets/projects/forme-love/logo.webp";
import formeVideoPoster from "@/assets/projects/forme-love/video-poster.webp";
import formeVideo from "@/assets/projects/forme-love/video.mp4";
import formeWebsite1 from "@/assets/projects/forme-love/website-1.webp";
import formeWebsite2 from "@/assets/projects/forme-love/website-2.webp";
import dnaCatalogCover from "@/assets/projects/promotion-design/catalog-cover.webp";
import dnaLogo from "@/assets/projects/promotion-design/dna-logo.webp";
import dnaMotorcycleFlyer from "@/assets/projects/promotion-design/motorcycle-flyer.webp";

// Copied from the old Webflow project pages (sonyakim.webflow.io/project/…) and saved copies of the expired
// Squarespace pages (Cosmos, Fantasy); originals are in assets/projects/.

export type Media = {
  /** `embed` is a hosted player (YouTube) shown in an iframe; `alt` becomes its title. */
  type: "image" | "video" | "embed";
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Video only: still frame shown before playback. */
  poster?: string;
};

export type GallerySection = {
  logo?: Media;
  heading?: string;
  text?: string;
  facts?: { label: string; value: string }[];
  media?: Media[];
  /** Grid columns for `media` from the `sm` breakpoint up (phones always show one or two). */
  columns?: 1 | 2 | 3;
};

export type ProjectGallery = {
  sections: GallerySection[];
};

const image = (src: string, alt: string, width: number, height: number): Media => ({
  type: "image",
  src,
  alt,
  width,
  height,
});

export const FORME_LOVE_GALLERY: ProjectGallery = {
  sections: [
    {
      logo: image(formeLogo, "forme.Love", 600, 102),
      text: "Make a better choice for myself.",
      facts: [
        { label: "Target", value: "20–30 females who are interested in sexual and mental wellness" },
        {
          label: "Keywords",
          value:
            "women, female, wellness, pleasure, health, mental, mindfulness, self-care, self-love, therapy, sexuality, confidence",
        },
        { label: "Competitive", value: "Lovewellness, Rae, Bellesa Boutique" },
      ],
    },
    {
      media: [
        {
          type: "video",
          src: formeVideo,
          poster: formeVideoPoster,
          alt: "forme.Love homepage hero video: “Shine your mind and body”",
          width: 1280,
          height: 510,
        },
        image(
          formeWebsite1,
          "forme.Love website section “A breakthrough in intimate care” featuring Rejucream",
          1600,
          709,
        ),
        image(
          formeWebsite2,
          "forme.Love website: Rejucream product copy above For Her, For Him and For Us category tiles",
          1600,
          575,
        ),
      ],
    },
    // {
    //   heading: "Instagram & Facebook Marketing",
    //   media: [image(formeInstagram, "forme.Love Instagram feed on a phone, surrounded by product and giveaway posts", 1366, 768)],
    // },
  ],
};

export const PROMOTION_DESIGN_GALLERY: ProjectGallery = {
  sections: [
    {
      logo: image(dnaLogo, "DNA Specialty", 380, 250),
      text: "DNA Specialty is a motorcycle wheel manufacturer and provider of Harley Davidson.",
      media: [image(dnaCatalogCover, "DNA motorcycle parts catalog, front and back cover", 1600, 591)],
    },
    {
      media: [
        image(
          dnaMotorcycleFlyer,
          "DNA Specialty promotional flyer for wheels and parts, led by the Mammoth Set",
          1200,
          1943,
        ),
      ],
    },
  ],
};

export const CRAFT_TREND_FAIR_GALLERY: ProjectGallery = {
  sections: [
    {
      text: "I live up my life today.",
      logo: image(torporLogo, "torpor", 300, 300),
      media: [
        image(
          ctfIndustrialJewelry,
          "Four silver double-finger rings with miniature scenes: shredded paper in a glass dome, gears, commuters on a bench, and bowling pins",
          1600,
          1000,
        ),
      ],
    },
    {
      heading: "스무고개 · Twenty Question, Twenty Answers",
      media: [
        image(ctfBooth, "The Twenty Questions booth at Craft Trend Fair, jewelry on yellow and navy tables", 960, 720),
      ],
    },
    {
      columns: 3,
      media: [
        image(ctfProcess1, "Illustration of a person in a beanie sitting on the ground", 564, 564),
        image(ctfProcess2, "Painted miniature human figures scattered on a table", 600, 600),
        image(ctfProcess3, "Graph-paper sketch of the bowling-pin ring", 750, 749),
        image(ctfProcess4, "Graph-paper sketch of the gear ring with a miniature figure placed on it", 750, 750),
        image(ctfProcess5, "Graph-paper sketch of the glass-dome ring holding miniature figures", 750, 750),
        image(ctfProcess6, "Graph-paper sketch of the commuter ring with miniature figures on the bench", 750, 749),
        image(ctfProcess7, "Wax molds, unfinished double-finger ring bases and cast miniature figures", 750, 388),
        image(ctfProcess8, "Turning a white bowling pin on a lathe", 750, 750),
        image(ctfProcess9, "Unfinished bowling-pin ring held between fingers", 750, 750),
      ],
    },
    {
      columns: 2,
      media: [
        image(
          ctfPosterTwentyQuestions,
          "Poster for 스무고개, the 2018 Sungshin University crafts graduate exhibition",
          1000,
          1429,
        ),
        image(ctfPosterFair, "Craft Trend Fair 2018 poster, Coex Hall C", 680, 1039),
      ],
    },
  ],
};

export const TARGET_VR_GALLERY: ProjectGallery = {
  sections: [
    {
      text: "Grab a tool and hit the target in the given time. When you hit a target, a new target will be initiated.",
      media: [
        {
          type: "embed",
          src: "https://www.youtube-nocookie.com/embed/MZOsNSwsS9g?rel=0",
          alt: "Target VR gameplay video",
          width: 16,
          height: 9,
        },
      ],
    },
  ],
};

export const COSMOS_GALLERY: ProjectGallery = {
  sections: [
    {
      text: "A girl's universe who looked up into the sky and imagined going into space is right above my head.",
      facts: [
        { label: "Materials", value: "copper, silver leaf" },
        { label: "Size", value: "1100×250×230mm" },
      ],
      media: [
        image(
          cosmos,
          "Cosmos: a dark copper pendant light shaped like a flowing wave, lit gold from beneath",
          1600,
          1128,
        ),
      ],
    },
    {
      columns: 2,
      media: [
        image(cosmosReference1, "Angular dark folded-metal sculpture on black", 564, 904),
        image(cosmosReference2, "White folded sculpture against a deep green background", 389, 564),
      ],
    },
    {
      columns: 3,
      media: [
        image(cosmosProcess1, "Pencil sketches of the wave form", 720, 960),
        image(cosmosProcess2, "Full-size pattern drawings of the form on paper", 720, 755),
        image(cosmosProcess3, "White plaster model of the form next to a hammered copper sheet", 960, 720),
        image(cosmosProcess4, "Raising a copper sheet with a hammer on a workbench", 720, 960),
        image(cosmosProcess5, "Annealing a curved copper sheet on firebricks", 960, 720),
        image(cosmosProcess6, "The formed copper body laid out on newspaper", 960, 720),
      ],
    },
    {
      media: [
        image(cosmosExhibition, "Cosmos hanging in a gallery exhibition, visitors standing beneath it", 960, 720),
      ],
    },
  ],
};

export const FANTASY_GALLERY: ProjectGallery = {
  sections: [
    {
      text: "Pleasure is the basic and instinctive desire of man. And money is the most powerful drug that gives you pleasure.",
      facts: [
        { label: "Materials", value: "brass, steel, aluminium, acrylic" },
        { label: "Size", value: "165×310×21mm" },
      ],
      media: [
        image(
          fantasyWorn,
          "Fantasy worn over a black turtleneck: a clear acrylic bib necklace with a roulette wheel, slot reels and pinball flippers",
          1600,
          996,
        ),
      ],
    },
    {
      columns: 2,
      media: [
        image(fantasyReferenceLasVegas, "Reference: the Welcome to Fabulous Las Vegas sign at dusk", 564, 846),
        image(fantasyReferencePinball, "Reference: wire ramps over a lit pinball playfield", 564, 1128),
      ],
    },
    {
      heading: "Concept",
      text: "The fantasy of the money gained without any cost is represented by a pinball game. Assuming a bib-style necklace as a casino pinball game, the wearer becomes a game ball. After the ball pops up and enters the colorful casino game board, the wearer feels human desire and pleasure through various games.",
    },
    {
      columns: 3,
      media: [
        image(
          fantasyProcess1,
          "Pen sketches of game parts: roulette wheel, slot reels, flippers, dice and a money chip",
          947,
          960,
        ),
        image(fantasyProcess2, "Layout sketch of the game board inside the bib shape", 751, 764),
        image(fantasyProcess3, "Turning a brass ring on a lathe", 720, 960),
        image(fantasyProcess4, "Cutting a brass part on a milling machine with a dividing head", 960, 540),
        image(fantasyProcess5, "Soldered brass frame of the roulette wheel", 960, 960),
        image(fantasyProcess6, "Roulette wheel and slot panel fitted on the aluminium base plate", 960, 960),
        image(fantasyProcess7, "Test-fitting the unfinished necklace", 960, 960),
        image(fantasyProcess8, "Finished brass roulette wheel with a pearl on the center spindle", 960, 720),
      ],
    },
    {
      columns: 2,
      media: [
        image(fantasyStyled1, "Fantasy on green velvet among black playing cards, dice and casino chips", 720, 720),
        image(fantasyStyled2, "Fantasy displayed on a black table with playing cards, dice and chips", 720, 720),
      ],
    },
    {
      media: [image(fantasy, "Fantasy, the full necklace with its wire neck ramp, on a grey background", 1600, 1709)],
    },
  ],
};
