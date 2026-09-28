import { useRef, type CSSProperties } from "react";
import { Sparkle } from "lucide-react";

import a from "../assets/sonya/a.webp";
import n from "../assets/sonya/n.webp";
import o from "../assets/sonya/o.webp";
import S from "../assets/sonya/S.webp";
import y from "../assets/sonya/y.webp";
import { LETTERS, WORD_HEIGHT, WORD_WIDTH } from "../data/chromeLetters";
import { gsap, useGSAP } from "../lib/gsap";

type Char = (typeof LETTERS)[number]["char"];

const SRC: Record<Char, string> = { S, o, n, y, a };

// Per-letter float: bob/sway periods (s), shared delay (s), bob amplitude (cqw), tilt (deg).
// Different, non-matching periods keep the letters drifting independently.
// depth: how strongly the letter is pushed away by a nearby cursor (desktop), so each letter reacts a little differently.
const MOTION: Record<Char, { bob: number; sway: number; delay: number; amp: number; rot: number; depth: number }> = {
  S: { bob: 6.4, sway: 8.2, delay: -1.1, amp: 1.2, rot: 1.6, depth: 1 },
  o: { bob: 5.3, sway: 7.1, delay: -3.0, amp: 1.6, rot: 2.6, depth: 0.55 },
  n: { bob: 5.9, sway: 6.6, delay: -0.4, amp: 1.4, rot: 2.2, depth: 0.8 },
  y: { bob: 6.8, sway: 7.7, delay: -2.2, amp: 1.8, rot: 2.0, depth: 1.2 },
  a: { bob: 5.6, sway: 6.9, delay: -4.1, amp: 1.5, rot: 2.8, depth: 0.7 },
};

// Cursor push (desktop): letters within REACH of the cursor move directly away from it, up to PUSH.
// Both are fractions of the logo width (≈17px push, ≈390px reach at ~870px wide).
const PUSH = 0.02;
const REACH = 0.45;

// Each letter's center as a fraction of the word box (from the layout data, so it never depends on current motion).
const CENTER = Object.fromEntries(
  LETTERS.map((l) => [l.char, { fx: (l.x + l.w / 2) / WORD_WIDTH, fy: (l.y + l.h / 2) / WORD_HEIGHT }]),
) as Record<Char, { fx: number; fy: number }>;

// Twinkling glints near the letters' highlights: position as a fraction of the letter box, size in cqw
// (each is slightly blurred with a soft glow, both proportional to its size).
const GLINTS: { char: Char; fx: number; fy: number; size: number; delay: number }[] = [
  { char: "S", fx: 0.02, fy: 0.03, size: 6, delay: 0 },
  { char: "o", fx: 0.6, fy: 0.4, size: 1.4, delay: 1.3 },
  { char: "a", fx: 0.9, fy: 0.04, size: 2, delay: 2.6 },
];

const pctX = (px: number) => `${(px / WORD_WIDTH) * 100}%`;
const pctY = (px: number) => `${(px / WORD_HEIGHT) * 100}%`;

type Props = { className?: string };

/**
 * The chrome "Sonya" wordmark, built from 5 separately floating letter images. Width comes from className.
 * On desktop (real pointer, motion allowed) a letter near the cursor is gently pushed away from it (its sparkle
 * moves with it); GSAP quickTo eases the push (no bounce) and letters settle back as the cursor moves off.
 */
export function ChromeName({ className = "" }: Props) {
  const root = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const h1 = root.current!;
        // letters and their sparkles (both tagged data-char) move together
        const movers = gsap.utils.toArray<HTMLElement>("[data-char]", h1).map((el) => ({
          char: el.dataset.char as Char,
          x: gsap.quickTo(el, "x", { duration: 1.1, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 1.1, ease: "power3.out" }),
        }));

        const onMove = (e: PointerEvent) => {
          const r = h1.getBoundingClientRect();
          const reach = r.width * REACH;
          const push = r.width * PUSH;
          for (const m of movers) {
            const c = CENTER[m.char];
            const dx = r.left + c.fx * r.width - e.clientX; // vector cursor → letter
            const dy = r.top + c.fy * r.height - e.clientY;
            const d = Math.hypot(dx, dy) || 1;
            const t = Math.max(0, 1 - d / reach);
            const f = t * t * (3 - 2 * t) * MOTION[m.char].depth; // smoothstep falloff: strongest right at the letter
            m.x((dx / d) * push * f);
            m.y((dy / d) * push * f);
          }
        };
        const onLeave = () => movers.forEach((m) => (m.x(0), m.y(0)));

        window.addEventListener("pointermove", onMove);
        document.documentElement.addEventListener("pointerleave", onLeave);
        return () => {
          window.removeEventListener("pointermove", onMove);
          document.documentElement.removeEventListener("pointerleave", onLeave);
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <h1
      ref={root}
      aria-label="Sonya Kim"
      className={`@container relative ${className}`}
      style={{ aspectRatio: `${WORD_WIDTH} / ${WORD_HEIGHT}` }}
    >
      {LETTERS.map((letter) => {
        const m = MOTION[letter.char];
        return (
          <img
            key={letter.char}
            data-char={letter.char}
            src={SRC[letter.char]}
            alt=""
            draggable={false}
            className="absolute max-w-none drop-shadow-[0_16px_20px_rgb(70_90_120/0.22)] motion-safe:float-letter"
            style={
              {
                left: pctX(letter.x),
                top: pctY(letter.y),
                width: pctX(letter.w),
                "--bob-t": `${m.bob}s`,
                "--sway-t": `${m.sway}s`,
                "--delay": `${m.delay}s`,
                "--amp": m.amp,
                "--rot": m.rot,
              } as CSSProperties
            }
          />
        );
      })}
      {GLINTS.map((g) => {
        const letter = LETTERS.find((l) => l.char === g.char)!;
        return (
          <Sparkle
            key={g.char}
            data-char={g.char}
            aria-hidden="true"
            fill="currentColor"
            strokeWidth={0}
            className="absolute -translate-1/2 text-cloud motion-safe:twinkle"
            style={{
              left: pctX(letter.x + letter.w * g.fx),
              top: pctY(letter.y + letter.h * g.fy),
              width: `${g.size}cqw`,
              height: `${g.size}cqw`,
              animationDelay: `${g.delay}s`,
              // soft, slightly out-of-focus glint: blur and glow scale with the glint's size
              filter: `blur(${g.size * 0.05}cqw) drop-shadow(0 0 ${g.size * 0.15}cqw rgb(255 255 255 / 0.8))`,
            }}
          />
        );
      })}
    </h1>
  );
}
