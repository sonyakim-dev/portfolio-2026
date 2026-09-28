import { EXPERIENCES } from "@/data/experiences";
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeader } from "./SectionHeader";

/** Detailed job history as glass cards. Separate from the project list and from the hero's short credits. */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative px-4 pt-8 sm:px-8 sm:pt-12 lg:px-16"
    >
      <div className="mx-auto max-w-328">
        <SectionHeader id="experience-heading" title="Experience" count={EXPERIENCES.length} />

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
