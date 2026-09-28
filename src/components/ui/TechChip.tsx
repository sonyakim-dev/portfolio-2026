import { TECH, type TechKey } from "@/data/tech";
import { BrandIcon } from "./BrandIcon";

export function TechChip({ tech }: { tech: TechKey }) {
  const { label, ...rest } = TECH[tech];
  const Glyph = "glyph" in rest ? rest.glyph : undefined;
  return (
    <li className="liquid-card flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium hover:transform-none sm:text-xs">
      {"icon" in rest && rest.icon && <BrandIcon icon={rest.icon} className="size-3" />}
      {Glyph && <Glyph aria-hidden="true" strokeWidth={1.8} className="size-3" />}
      {label}
    </li>
  );
}

export function TechList({ tech }: { tech: TechKey[] }) {
  return (
    <ul aria-label="Tech stack" className="flex flex-wrap gap-1.5 sm:gap-2">
      {tech.map((key) => (
        <TechChip key={key} tech={key} />
      ))}
    </ul>
  );
}
