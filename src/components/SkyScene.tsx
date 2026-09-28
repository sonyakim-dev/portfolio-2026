import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownLeft, ArrowUpRight, ChevronDown, Sparkle } from "lucide-react";

import cloudMist from "../assets/cloud-mist.webp";
import cloudsFar from "../assets/clouds-far.webp";
import cloudsNear from "../assets/clouds-near.webp";
import sky from "../assets/sky.webp";
import { SOCIAL_LINKS } from "../data/profile";
import { BrandIcon } from "./BrandIcon";
import { ChromeName } from "./ChromeName";
import { ExperienceTicker } from "./ExperienceTicker";
import { Tagline } from "./Tagline";

gsap.registerPlugin(useGSAP, ScrollTrigger);
// Don't recalculate (and jump) when a phone's address bar shows/hides.
ScrollTrigger.config({ ignoreMobileResize: true });

const [linkedin, github] = SOCIAL_LINKS;

/**
 * Header social link: solid black, inverting to transparent on hover.
 * Desktop shows the label as a pill; phones show a round icon button. The ::after pad keeps the touch target ≥44px.
 */
function HeaderLink({ label, href, icon }: { label: string; href: string; icon: { path: string } }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="relative grid size-8 place-items-center rounded-full border border-fg bg-fg text-paper transition-colors after:absolute after:-inset-1.5 hover:bg-transparent hover:text-fg sm:flex sm:size-auto sm:px-3 sm:py-[3px] sm:text-[11px] sm:after:-inset-x-2 sm:after:-inset-y-3"
    >
      <BrandIcon icon={icon} className="size-3.5 sm:hidden" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

/**
 * Hero + cloud passage.
 *
 * Layers (back → front): paper · sky + far clouds (clipped to the frame) · panel content (serif, name,
 * tagline, cue) · near clouds, mist and a white wash (in front of the name) · header and bottom block.
 * The frame's margins are CSS variables, so the static hero is exact without JavaScript.
 *
 * Scrolling pins this section and scrubs one timeline: the frame opens → the camera approaches →
 * near clouds pass in front of the name → whiteout. The wash is the same color as the top of the
 * content below (Experience, then Projects), so the pin releases into it with no seam. Reduced motion keeps the static hero.
 */
export function SkyScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const [section] = q("[data-scene]") as HTMLElement[];
      const [panel] = q("[data-panel]") as HTMLElement[];

      // The frame opening starts from wherever the panel currently sits (re-measured on resize).
      const frameInset = () => {
        const s = section.getBoundingClientRect();
        const p = panel.getBoundingClientRect();
        return `inset(${p.top - s.top}px ${s.right - p.right}px ${s.bottom - p.bottom}px ${p.left - s.left}px)`;
      };

      const mm = gsap.matchMedia();
      mm.add(
        {
          desktop: "(min-width: 640px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 639px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const mobile = Boolean(ctx.conditions?.mobile);
          // The scene stays pinned for `screens` viewport heights. During the last screen the content below (Experience + Projects)
          // rises over it, starting at timeline time WORK_ENTERS — while the near clouds are still passing,
          // so the list emerges out of the clouds. A soft white gradient on top of Work (only shown while
          // this scene is active) keeps that edge misty instead of a hard line.
          const screens = mobile ? 1.7 : 2.2;
          const WORK_ENTERS = 5.5;
          gsap.set("[data-pin-spacer]", { height: `${(screens - 1) * 100}dvh` });
          gsap.set(document.querySelector("[data-content-fade]"), { display: "block" });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * screens}`,
              pin: true,
              pinSpacing: false,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // 01 → 02  The frame opens; poster type and chrome fade away.
          tl.fromTo("[data-sky]", { clipPath: frameInset }, { clipPath: "inset(0px 0px 0px 0px)", duration: 1.5 }, 0)
            .to("[data-sky-img]", { scale: 1.06, duration: 1.5 }, 0)
            .to(
              ["[data-header]", "[data-footer-block]", "[data-serif]", "[data-cue]"],
              { autoAlpha: 0, duration: 0.8 },
              0,
            )

            // 03  Approach: the mark grows a little; far and near clouds rise at different speeds.
            .to("[data-tagline]", { autoAlpha: 0, duration: 1 }, 1.5)
            .to("[data-name]", { scale: 1.2, yPercent: -6, duration: 3 }, 1.5)
            .to("[data-sky-img]", { scale: 1.2, duration: 3 }, 1.5)
            .fromTo(
              "[data-far]",
              { autoAlpha: 0, yPercent: 35 },
              { autoAlpha: 1, yPercent: 0, scale: 1.15, duration: 3 },
              1.5,
            )
            .fromTo("[data-near]", { yPercent: 0 }, { yPercent: mobile ? -55 : -40, duration: 3 }, 1.5)

            // 04  Through the clouds: the near layer passes in front of the mark.
            //     (yPercent stops at -100 so the layer's bottom edge never lifts off the screen; scale does the rest)
            .to("[data-near]", { yPercent: -100, scale: mobile ? 2 : 1.5, duration: 2.5 }, 4.5)
            .to("[data-far]", { yPercent: -15, scale: 1.4, duration: 2.5 }, 4.5)
            .to("[data-name]", { scale: 1.4, autoAlpha: 0.35, duration: 2.5 }, 4.5)

            // 05  Whiteout: dense mist fills the view, then the wash.
            .fromTo(
              "[data-mist]",
              { autoAlpha: 0, scale: 1.2 },
              { autoAlpha: 1, scale: mobile ? 3.2 : 2.6, duration: 1.7 },
              6.3,
            )
            .to("[data-near]", { scale: mobile ? 3.2 : 2.4, duration: 1.7 }, 6.8)
            .to("[data-name]", { autoAlpha: 0, duration: 1 }, 6.8)
            .fromTo("[data-wash]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 7)

            // 06  Pad the timeline so WORK_ENTERS lands exactly where the last screen begins:
            //     WORK_ENTERS / total = (screens - 1) / screens. The whiteout finishes behind the rising list.
            .to({}, { duration: (WORK_ENTERS * screens) / (screens - 1) - 8 }, 8);
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Intro">
      <div
        data-scene
        className="relative h-dvh min-h-155 overflow-hidden bg-paper [--frame-bottom:3.5rem] [--frame-top:3.5rem] [--frame-x:0.75rem] sm:[--frame-bottom:4rem] sm:[--frame-top:4rem] sm:[--frame-x:max(2.5rem,calc((100vw-1680px)/2))]"
      >
        {/* Sky + far clouds, clipped to the frame */}
        <div
          data-sky
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden [clip-path:inset(var(--frame-top)_var(--frame-x)_var(--frame-bottom)_var(--frame-x))]"
        >
          <img
            data-sky-img
            src={sky}
            alt=""
            className="absolute inset-x-0 bottom-0 h-[145%] w-full origin-[50%_75%] object-cover object-[22%_100%] will-change-transform sm:h-[125%] sm:object-[40%_100%]"
          />
          <img
            data-far
            src={cloudsFar}
            alt=""
            className="absolute bottom-[-4%] left-[-60%] w-[220%] max-w-none origin-bottom opacity-0 will-change-transform sm:left-[-10%] sm:w-[120%]"
          />
        </div>

        <header
          data-header
          className="microtype absolute inset-x-0 top-0 flex h-(--frame-top) items-center justify-between px-(--frame-x) text-[11px] sm:text-xs"
        >
          <span>Sonya Kim</span>
          <span className="flex items-center gap-2.5 max-sm:mr-3 max-sm:ml-auto">
            <HeaderLink {...linkedin} />
            <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="hidden size-3.5 sm:block" />
          </span>
          <span className="hidden sm:inline">Welcome to my world</span>
          <span className="flex items-center gap-2.5">
            <ArrowDownLeft aria-hidden="true" strokeWidth={1.5} className="hidden size-3.5 sm:block" />
            <HeaderLink {...github} />
          </span>
          <span className="hidden sm:inline">Portfolio</span>
        </header>

        {/* Panel content — a size container, so type and logo scale with the frame (cqw/cqh) */}
        <div
          data-panel
          className="absolute top-(--frame-top) right-(--frame-x) bottom-(--frame-bottom) left-(--frame-x) @container-size"
        >
          <p
            data-serif
            aria-hidden="true"
            className="absolute inset-x-0 top-[7%] text-center font-display text-[min(11.5cqw,20cqh)] leading-[0.92] tracking-[-0.01em] text-cloud/90 italic [text-shadow:0_2px_30px_rgb(60_85_110/0.16)] sm:top-[6%] sm:text-[min(8.8cqw,17.7cqh)]"
          >
            SOFTWARE
            <br />
            ENGINEER
            {(["left", "right"] as const).map((side) => (
              <Sparkle
                key={side}
                aria-hidden="true"
                fill="currentColor"
                strokeWidth={0}
                className={`absolute top-[22%] size-[3.8cqw] text-cloud/90 sm:size-[2.6cqw] ${
                  side === "left" ? "left-[5%] sm:left-[11%]" : "right-[5%] sm:right-[11%]"
                }`}
              />
            ))}
          </p>

          {/* Tagline hangs just under the name; the gap is larger than the letters' float. */}
          <div className="absolute inset-x-0 top-[28%] flex flex-col items-center gap-[3cqw] sm:top-[20%] sm:gap-[0.4cqw]">
            <div data-name className="flex w-full origin-[50%_60%] justify-center will-change-transform">
              <ChromeName className="w-[min(86cqw,134cqh)] sm:w-[min(64cqw,130cqh,980px)]" />
            </div>
            <div data-tagline className="relative">
              <Tagline className="px-4 text-center text-xs font-semibold tracking-wider text-soft uppercase opacity-80 sm:text-base sm:tracking-[0.08em]" />
            </div>
          </div>

          <p
            data-cue
            className="microtype absolute inset-x-0 bottom-5 flex items-center justify-center gap-1.5 text-[12px] text-cloud [text-shadow:0_1px_8px_rgb(60_85_110/0.55)] motion-safe:nudge"
          >
            <ChevronDown
              aria-hidden="true"
              strokeWidth={2}
              className="size-4 drop-shadow-[0_1px_4px_rgb(60_85_110/0.55)]"
            />
            Scroll to enter
          </p>
        </div>

        {/* In front of the name: near clouds, mist and the white wash (hidden until scrolling) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            data-near
            src={cloudsNear}
            alt=""
            className="absolute top-full left-[-70%] w-[240%] max-w-none origin-bottom will-change-transform sm:left-[-15%] sm:w-[130%]"
          />
          <img
            data-mist
            src={cloudMist}
            alt=""
            className="absolute top-1/2 left-1/2 w-[160%] max-w-none -translate-1/2 opacity-0 will-change-transform sm:w-[90%]"
          />
          <div data-wash className="absolute inset-0 bg-sky-50 opacity-0" />
        </div>

        {/* Experience ticker (height = --frame-bottom) */}
        <div data-footer-block className="absolute inset-x-0 bottom-0 flex h-(--frame-bottom) items-center">
          <ExperienceTicker className="w-full" />
        </div>
      </div>
      {/* Only sized while the scroll scene is active (0 otherwise), so Work lands right after the whiteout */}
      <div data-pin-spacer aria-hidden="true" className="h-0" />
    </section>
  );
}
