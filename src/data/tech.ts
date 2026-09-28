import type { LucideIcon } from 'lucide-react'
import { Hammer } from 'lucide-react'
import {
  siCplusplus,
  siCss,
  siExpo,
  siFirebase,
  siGo,
  siGooglecloud,
  siGraphql,
  siHtml5,
  siJavascript,
  siMui,
  siPython,
  siReact,
  siShopify,
  siTypescript,
  siUnity,
} from 'simple-icons'

import { siAmazonaws } from '@/icons/aws'
import { siCsharp } from '@/icons/csharp'
import { siJava } from '@/icons/java'
import { siAdobephotoshop } from '@/icons/photoshop'

export type Tech = {
  label: string
  /** simple-icons glyph (24×24 path) */
  icon?: { path: string }
  /** UI glyph for non-brand entries */
  glyph?: LucideIcon
}

// One place to map a project's tech keys to label + icon.
// simple-icons removed the C#, Photoshop, AWS and Java (coffee cup) marks at the brand owners' request; they are
// kept locally in src/icons/.
export const TECH = {
  reactNative: { label: 'React Native', icon: siReact },
  react: { label: 'React', icon: siReact },
  expo: { label: 'Expo', icon: siExpo },
  firebase: { label: 'Firebase', icon: siFirebase },
  javascript: { label: 'JavaScript', icon: siJavascript },
  typescript: { label: 'TypeScript', icon: siTypescript },
  python: { label: 'Python', icon: siPython },
  mui: { label: 'MUI', icon: siMui },
  html: { label: 'HTML', icon: siHtml5 },
  css: { label: 'CSS', icon: siCss },
  cpp: { label: 'C++', icon: siCplusplus },
  unity: { label: 'Unity', icon: siUnity },
  csharp: { label: 'C#', icon: siCsharp },
  shopify: { label: 'Shopify', icon: siShopify },
  photoshop: { label: 'Photoshop', icon: siAdobephotoshop },
  go: { label: 'Go', icon: siGo },
  java: { label: 'Java', icon: siJava },
  aws: { label: 'AWS', icon: siAmazonaws },
  gcp: { label: 'Google Cloud', icon: siGooglecloud },
  graphql: { label: 'GraphQL', icon: siGraphql },
  craft: { label: 'Handcraft', glyph: Hammer },
} satisfies Record<string, Tech>

export type TechKey = keyof typeof TECH
