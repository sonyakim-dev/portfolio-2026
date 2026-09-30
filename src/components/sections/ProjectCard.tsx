import { ArrowUpRight, PictureInPicture2 } from "lucide-react";
import { useState, type ComponentProps } from "react";

import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { TechList } from "@/components/ui/TechChip";
import { ProjectGalleryDialog } from "./ProjectGalleryDialog";

const ICON_CLASS = "size-3.5 md:size-4";

/**
 * One project per row: image, then category, title, outcome and stack. The whole card opens the project: its copied
 * page in the gallery dialog, or else its external page in a new tab. Cards with neither are static.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { title, description: outcome, category, tech, url, image, gallery } = project;
  const [open, setOpen] = useState(false);

  let link: Partial<ComponentProps<typeof Card>> = {};
  if (gallery) {
    link = {
      "aria-haspopup": "dialog",
      "aria-label": `${title}, ${category} (opens gallery)`,
      onClick: () => setOpen(true),
      icon: <PictureInPicture2 strokeWidth={1.6} className={ICON_CLASS} />,
    };
  } else if (url) {
    link = {
      href: url,
      target: "_blank",
      rel: "noopener",
      "aria-label": `${title}, ${category} (opens in a new tab)`,
      icon: <ArrowUpRight strokeWidth={1.6} className={ICON_CLASS} />,
    };
  }

  return (
    <>
      <Card
        {...link}
        media={
          <div className="aspect-video overflow-hidden rounded-2xl bg-line md:aspect-16/10 md:self-center">
            <img src={image} alt="" loading="lazy" className="project-image size-full object-cover" />
          </div>
        }
      >
        <span className="microtype text-[12px] text-muted">{category}</span>

        <div className="space-y-1.5">
          <h3 className="card-title">{title}</h3>
          {outcome && <p className="text-sm leading-snug">{outcome}</p>}
        </div>

        <TechList tech={tech} />
      </Card>
      {open && <ProjectGalleryDialog project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
