import { EXPERIENCES } from "../data/experiences";
import { ExperienceCard } from "./ExperienceCard";

/** Detailed job history as glass cards. Separate from the project list and from the hero's short credits. */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative px-4 pt-8 sm:px-8 sm:pt-12 lg:px-16"
    >
      <div className="mx-auto max-w-328">
        <div className="microtype mb-8 flex justify-between border-b border-line pb-3 text-[11px] sm:mb-8 sm:pb-4 sm:text-xs">
          <h2 id="experience-heading" className="font-[inherit]">
            Experience
          </h2>
          <span>({EXPERIENCES.length})</span>
        </div>

        <ol className="space-y-4 sm:space-y-5">
          {EXPERIENCES.map((job, i) => (
            <li key={i}>
              <ExperienceCard job={job} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
