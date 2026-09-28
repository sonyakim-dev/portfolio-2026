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
    <article className="group liquid grid gap-4 rounded-3xl p-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 sm:rounded-[28px] sm:p-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10 lg:grid-cols-[440px_minmax(0,1fr)]">
      <header className="flex flex-col justify-between gap-6 rounded-2xl border border-glass-edge bg-cloud/45 p-5 md:aspect-16/10 md:self-center md:p-7">
        <div className="space-y-1.5">
          <p className="text-3xl leading-none font-semibold tracking-[-0.04em] md:text-5xl">{company}</p>
          {team && <p className="text-sm leading-snug text-muted md:text-base">{team}</p>}
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-base font-medium text-fg/70 tabular-nums md:text-lg">{period}</p>
          {location && <p className="microtype text-[10px] text-muted">{location}</p>}
        </div>
      </header>

      <div className="flex flex-col justify-between gap-4 px-1.5 pb-1.5 md:py-3 md:pr-3 md:pl-0">
        <div className="space-y-2">
          <h3 className="text-2xl leading-tight font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent md:text-4xl">
            {role}
          </h3>
          <p className={`text-sm leading-snug md:text-base ${written ? "text-fg" : "text-muted italic"}`}>
            {written || "[One-line summary — to be written]"}
          </p>
          {highlights && highlights.length > 0 && (
            <ul className="list-disc space-y-1 pt-1 pl-5 text-sm leading-snug marker:text-soft md:text-[15px]">
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
