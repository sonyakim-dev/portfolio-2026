import { TECH, type TechKey } from '../data/tech'
import { BrandIcon } from './BrandIcon'

export function TechChip({ tech }: { tech: TechKey }) {
  const { label, ...rest } = TECH[tech]
  const Glyph = 'glyph' in rest ? rest.glyph : undefined
  return (
    <li className="liquid flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium sm:text-[13px]">
      {'icon' in rest && rest.icon && <BrandIcon icon={rest.icon} className="size-3.5 sm:size-4" />}
      {Glyph && <Glyph aria-hidden="true" strokeWidth={1.8} className="size-3.5 sm:size-4" />}
      {label}
    </li>
  )
}
