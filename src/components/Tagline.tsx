import { Fragment } from "react";

import { TAGLINE } from "../data/profile";

/** "Software Engineering + Linguistics + Art" with accent-colored plus signs. */
export function Tagline({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      {TAGLINE.map((part, i) => (
        <Fragment key={part}>
          {i > 0 && <span className="mx-[0.5em] text-accent">+</span>}
          {part}
        </Fragment>
      ))}
    </p>
  );
}
