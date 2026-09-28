import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SOCIAL_LINKS } from "../data/profile";
import { BrandIcon } from "./BrandIcon";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Floating glass pill with LinkedIn + GitHub. It slides up once the content below the hero (Experience) is on screen
 * and hides again back in the hero (where the header already has the links).
 * Icons only on phones; reduced motion shows/hides it instantly.
 */
export function SocialDock() {
  const dock = useRef<HTMLElement>(null);

  useGSAP((_, contextSafe) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.set(dock.current, { autoAlpha: 0, yPercent: 80 });

    const show = contextSafe!((visible: boolean) =>
      gsap.to(dock.current, {
        autoAlpha: visible ? 1 : 0,
        yPercent: visible ? 0 : 80,
        duration: reduce ? 0 : 0.6,
        ease: "power3.out",
        overwrite: true,
      }),
    );

    ScrollTrigger.create({
      trigger: "#experience",
      start: "top 75%",
      end: "max",
      onToggle: (self) => show(self.isActive),
    });
  });

  return (
    <nav
      ref={dock}
      aria-label="Social links"
      className="liquid invisible fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full p-1.5"
    >
      {SOCIAL_LINKS.map(({ label, href, icon }, i) => (
        <span key={label} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true" className="h-5 w-px bg-line" />}
          <a
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={label}
            className="microtype flex size-11 items-center justify-center gap-2.5 rounded-full text-[11px] transition-colors hover:bg-fg hover:text-paper sm:w-auto sm:px-5"
          >
            <BrandIcon icon={icon} className="size-4" />
            <span className="hidden sm:inline">{label}</span>
          </a>
        </span>
      ))}
    </nav>
  );
}
