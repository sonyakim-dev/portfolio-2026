import type { Experience } from "../data/experiences";
import { TechChip } from "./TechChip";

/**
 * Same shell, grid and hover lift as ProjectCard, without an image or link: an inset panel takes the image's place
 * (company, team, period, location) and the text column mirrors the project card (role, summary, highlights, stack).
 */
export function ExperienceCard({ job }: { job: Experience }) {
  const { role, company, period, team, location, summary, highlights, tech } = job;
  const written = summary?.trim();
  return (
    <article className="group liquid grid gap-4 rounded-3xl p-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-7 lg:grid-cols-[320px_minmax(0,1fr)]">
      <header className="flex flex-col justify-between gap-4 rounded-2xl border border-glass-edge bg-cloud/45 p-4 md:p-5">
        <div className="space-y-1.5">
          <p className="text-xl leading-none font-semibold tracking-[-0.03em]">{company}</p>
          {team && <p className="text-sm leading-snug text-muted">{team}</p>}
        </div>
        <div className="flex flex-col items-baseline justify-between gap-1">
          {location && <p className="microtype text-xs text-muted">{location}</p>}
          <p className="microtype text-xs text-fg/80 tabular-nums">{period}</p>
        </div>
      </header>

      <div className="flex flex-col justify-between gap-3 px-1.5 pb-1.5 md:py-1.5 md:pr-2 md:pl-0">
        <div className="space-y-1.5">
          <h3 className="text-xl leading-tight font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent md:text-2xl">
            {role}
          </h3>
          {written && <p className="text-sm leading-snug md:text-[15px] text-fg">{written}</p>}
          {highlights && highlights.length > 0 && (
            <ul className="list-disc space-y-1 pt-1 pl-5 text-sm leading-snug marker:text-soft">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </div>
        {tech && tech.length > 0 && (
          <ul aria-label="Tech stack" className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.map((key) => (
              <TechChip key={key} tech={key} />
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
