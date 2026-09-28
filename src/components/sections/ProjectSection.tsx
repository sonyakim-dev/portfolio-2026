import cloudsFar from "@/assets/clouds-far.webp";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function ProjectSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative px-4 pt-8 pb-24 sm:px-8 sm:pt-12 lg:px-16"
    >
      {/* a few distant clouds drifting behind the cards */}
      <img
        src={cloudsFar}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[22%] -left-1/3 w-[110%] max-w-none opacity-40 blur-[3px] select-none sm:w-[70%]"
      />
      <img
        src={cloudsFar}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[62%] -right-1/3 w-[110%] max-w-none -scale-x-100 opacity-35 blur-[3px] select-none sm:w-[70%]"
      />

      <div className="relative mx-auto max-w-328">
        <SectionHeader id="projects-heading" title="Projects" count={PROJECTS.length} />

        <ul className="space-y-4 sm:space-y-5">
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
