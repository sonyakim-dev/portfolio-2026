import { ArrowUpRight } from "lucide-react";

import type { Project } from "../data/projects";
import { TechChip } from "./TechChip";

/** One project per row: image, then category, title, outcome and stack. The whole card is the link. */
export function ProjectCard({ project }: { project: Project }) {
  const { title, description: outcome, category, tech, url, image } = project;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={`${title}, ${category} (opens in a new tab)`}
      className="group liquid grid gap-4 rounded-3xl p-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 focus-visible:outline-offset-4 sm:rounded-[28px] sm:p-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10 lg:grid-cols-[440px_minmax(0,1fr)]"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-line md:aspect-[16/10] md:self-center">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="size-full object-cover grayscale transition duration-700 group-hover:scale-[1.015] group-hover:grayscale-0"
        />
      </div>

      <div className="flex flex-col justify-between gap-4 px-1.5 pb-1.5 md:py-3 md:pr-3 md:pl-0">
        <div className="flex items-center justify-between">
          <span className="microtype text-[11px] text-muted">{category}</span>
          <span className="liquid grid size-8 place-items-center rounded-full md:size-10">
            <ArrowUpRight aria-hidden="true" strokeWidth={1.6} className="size-3.5 md:size-4" />
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl leading-tight font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent md:text-4xl">
            {title}
          </h3>
          <p className={`text-sm leading-snug md:text-base ${outcome ? "text-fg" : "text-muted italic"}`}>
            {outcome ?? ""}
          </p>
        </div>

        <ul aria-label="Tech stack" className="flex flex-wrap gap-1.5 sm:gap-2">
          {tech.map((key) => (
            <TechChip key={key} tech={key} />
          ))}
        </ul>
      </div>
    </a>
  );
}
