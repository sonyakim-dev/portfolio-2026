import { TECH, type TechKey } from '../data/tech'
import { BrandIcon } from './BrandIcon'

export function TechChip({ tech }: { tech: TechKey }) {
  const { label, ...rest } = TECH[tech]
  const Glyph = 'glyph' in rest ? rest.glyph : undefined
  return (
    <li className="liquid flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium sm:text-xs">
      {'icon' in rest && rest.icon && <BrandIcon icon={rest.icon} className="size-3" />}
      {Glyph && <Glyph aria-hidden="true" strokeWidth={1.8} className="size-3" />}
      {label}
    </li>
  )
}
