import type { LucideIcon } from 'lucide-react'
import { Hammer } from 'lucide-react'
import {
  siCplusplus,
  siCss,
  siExpo,
  siFirebase,
  siHtml5,
  siJavascript,
  siMui,
  siReact,
  siShopify,
  siUnity,
} from 'simple-icons'

import { siAdobephotoshop } from '../icons/photoshop'

export type Tech = {
  label: string
  /** simple-icons glyph (24×24 path) */
  icon?: { path: string }
  /** UI glyph for non-brand entries */
  glyph?: LucideIcon
}

// One place to map a project's tech keys to label + icon.
// simple-icons removed C# and Photoshop at the brand owners' request: Photoshop's mark is kept
// locally (src/icons/photoshop.ts); C# stays label-only.
export const TECH = {
  reactNative: { label: 'React Native', icon: siReact },
  react: { label: 'React', icon: siReact },
  expo: { label: 'Expo', icon: siExpo },
  firebase: { label: 'Firebase', icon: siFirebase },
  javascript: { label: 'JavaScript', icon: siJavascript },
  mui: { label: 'MUI', icon: siMui },
  html: { label: 'HTML', icon: siHtml5 },
  css: { label: 'CSS', icon: siCss },
  cpp: { label: 'C++', icon: siCplusplus },
  unity: { label: 'Unity', icon: siUnity },
  csharp: { label: 'C#' },
  shopify: { label: 'Shopify', icon: siShopify },
  photoshop: { label: 'Photoshop', icon: siAdobephotoshop },
  craft: { label: 'Handcraft', glyph: Hammer },
} satisfies Record<string, Tech>

export type TechKey = keyof typeof TECH
