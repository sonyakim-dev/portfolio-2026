import type { Experience } from "@/data/experiences";
import { TechList } from "@/components/ui/TechChip";

/**
 * Same shell, grid and hover lift as ProjectCard, without an image or link: an inset panel takes the image's place
 * (company, team, period, location) and the text column mirrors the project card (role, summary, highlights, stack).
 */
export function ExperienceCard({ job }: { job: Experience }) {
  const { role, company, period, team, location, summary, highlights, tech } = job;
  const written = summary?.trim();
  return (
    <article className="group liquid-card card">
      <header className="flex flex-col justify-between gap-4 rounded-2xl border border-cloud/25 bg-cloud/10 p-4 md:p-5">
        <div className="space-y-1.5">
          <p className="text-xl leading-none font-semibold tracking-[-0.03em]">{company}</p>
          {team && <p className="text-sm leading-snug text-muted">{team}</p>}
        </div>
        <div className="flex flex-col items-baseline justify-between gap-1">
          {location && <p className="microtype text-xs text-muted">{location}</p>}
          <p className="microtype text-xs text-fg/80 tabular-nums">{period}</p>
        </div>
      </header>

      <div className="card-body">
        <div className="space-y-1.5">
          <h3 className="card-title">{role}</h3>
          {written && <p className="text-sm leading-snug md:text-[15px]">{written}</p>}
          {highlights && highlights?.length > 0 && (
            <ul className="list-disc space-y-1 pt-1 pl-5 text-sm leading-snug marker:text-soft">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </div>
        {tech && tech.length > 0 && <TechList tech={tech} />}
      </div>
    </article>
  );
}
