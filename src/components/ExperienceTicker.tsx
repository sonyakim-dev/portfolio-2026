import { Fragment } from "react";
import { Sparkle } from "lucide-react";

import { HERO_EXPERIENCE } from "../data/experiences";

// Enough copies that one half of the track is wider than any screen, so the loop never shows a gap.
const COPIES = Math.max(2, Math.ceil(8 / HERO_EXPERIENCE.length));
const RUN = Array.from({ length: COPIES }, () => HERO_EXPERIENCE).flat();

function Run() {
  return (
    <div className="flex shrink-0 items-center">
      {RUN.map((job, i) => (
        <Fragment key={i}>
          <span className="flex items-baseline gap-2.5 px-6 whitespace-nowrap sm:gap-3 sm:px-10">
            <span className="font-bold">{job.role}</span>
            <span>@ {job.company}</span>
            <span className="font-display text-[1.25em] tracking-normal normal-case italic">{job.year}</span>
          </span>
          <Sparkle aria-hidden="true" fill="currentColor" strokeWidth={0} className="size-2.5 shrink-0 text-soft" />
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Experience as a single credits-style line drifting right → left forever.
 * The track holds two identical runs and slides by exactly one run, so the loop is seamless.
 * Screen readers get a plain list; the moving copy is decorative. Reduced motion: it stays still.
 */
export function ExperienceTicker({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="sr-only">
        {HERO_EXPERIENCE.map((job, i) => (
          <li key={i}>
            {job.role} at {job.company}, {job.year}
          </li>
        ))}
      </ul>
      <div
        aria-hidden="true"
        className="microtype overflow-hidden text-xs mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:text-[13px]"
      >
        <div className="flex w-max motion-safe:marquee">
          <Run />
          <Run />
        </div>
      </div>
    </div>
  );
}
