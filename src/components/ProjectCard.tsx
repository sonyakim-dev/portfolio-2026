import { ArrowUpRight } from "lucide-react";

import type { Project } from "../data/projects";
import { TechList } from "./TechChip";

/** One project per row: image, then category, title, outcome and stack. The whole card is the link. */
export function ProjectCard({ project }: { project: Project }) {
  const { title, description: outcome, category, tech, url, image } = project;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={`${title}, ${category} (opens in a new tab)`}
      className="group liquid-card card"
    >
      <div className="aspect-video overflow-hidden rounded-2xl bg-line md:aspect-16/10 md:self-center">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="project-image size-full object-cover"
        />
      </div>

      <div className="card-body">
        <div className="flex items-center justify-between">
          <span className="microtype text-[11px] text-muted">{category}</span>
          <span className="liquid-card grid size-8 place-items-center rounded-full md:size-9">
            <ArrowUpRight aria-hidden="true" strokeWidth={1.6} className="size-3.5 md:size-4" />
          </span>
        </div>

        <div className="space-y-1.5">
          <h3 className="card-title">{title}</h3>
          {outcome && <p className="text-sm leading-snug">{outcome}</p>}
        </div>

        <TechList tech={tech} />
      </div>
    </a>
  );
}
