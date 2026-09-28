import cloudsFar from "../assets/clouds-far.webp";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

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
        className="pointer-events-none absolute top-[22%] -left-1/3 w-[110%] max-w-none opacity-40 select-none sm:w-[70%]"
      />
      <img
        src={cloudsFar}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[62%] -right-1/3 w-[110%] max-w-none -scale-x-100 opacity-35 select-none sm:w-[70%]"
      />

      <div className="relative mx-auto max-w-328">
        <div className="microtype mb-8 flex justify-between border-b border-line pb-3 text-[11px] sm:mb-8 sm:pb-4 sm:text-xs">
          <h2 id="projects-heading" className="font-[inherit]">
            Projects
          </h2>
          <span>({PROJECTS.length})</span>
        </div>

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
