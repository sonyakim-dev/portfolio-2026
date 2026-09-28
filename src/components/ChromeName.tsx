import type { CSSProperties } from 'react'
import { Sparkle } from 'lucide-react'

import a from '../assets/sonya/a.webp'
import n from '../assets/sonya/n.webp'
import o from '../assets/sonya/o.webp'
import S from '../assets/sonya/S.webp'
import y from '../assets/sonya/y.webp'
import { LETTERS, WORD_HEIGHT, WORD_WIDTH } from '../data/chromeLetters'

type Char = (typeof LETTERS)[number]['char']

const SRC: Record<Char, string> = { S, o, n, y, a }

// Per-letter float: bob/sway periods (s), shared delay (s), bob amplitude (cqw), tilt (deg).
// Different, non-matching periods keep the letters drifting independently.
const MOTION: Record<Char, { bob: number; sway: number; delay: number; amp: number; rot: number }> = {
  S: { bob: 6.4, sway: 8.2, delay: -1.1, amp: 1.2, rot: 1.6 },
  o: { bob: 5.3, sway: 7.1, delay: -3.0, amp: 1.6, rot: 2.6 },
  n: { bob: 5.9, sway: 6.6, delay: -0.4, amp: 1.4, rot: 2.2 },
  y: { bob: 6.8, sway: 7.7, delay: -2.2, amp: 1.8, rot: 2.0 },
  a: { bob: 5.6, sway: 6.9, delay: -4.1, amp: 1.5, rot: 2.8 },
}

// Twinkling glints near the letters' highlights: position as a fraction of the letter box, size in cqw.
const GLINTS: { char: Char; fx: number; fy: number; size: number; delay: number }[] = [
  { char: 'S', fx: 0.22, fy: 0.03, size: 2.2, delay: 0 },
  { char: 'o', fx: 0.6, fy: 0.06, size: 1.4, delay: 1.3 },
  { char: 'a', fx: 0.78, fy: 0.04, size: 1.8, delay: 2.6 },
]

const pctX = (px: number) => `${(px / WORD_WIDTH) * 100}%`
const pctY = (px: number) => `${(px / WORD_HEIGHT) * 100}%`

type Props = { className?: string }

/** The chrome "Sonya" wordmark, built from 5 separately floating letter images. Width comes from className. */
export function ChromeName({ className = '' }: Props) {
  return (
    <h1
      aria-label="Sonya Kim"
      className={`@container relative m-0 ${className}`}
      style={{ aspectRatio: `${WORD_WIDTH} / ${WORD_HEIGHT}` }}
    >
      {LETTERS.map((letter) => {
        const m = MOTION[letter.char]
        return (
          <img
            key={letter.char}
            src={SRC[letter.char]}
            alt=""
            draggable={false}
            className="absolute max-w-none drop-shadow-[0_16px_20px_rgb(70_90_120/0.22)] motion-safe:float-letter"
            style={
              {
                left: pctX(letter.x),
                top: pctY(letter.y),
                width: pctX(letter.w),
                '--bob-t': `${m.bob}s`,
                '--sway-t': `${m.sway}s`,
                '--delay': `${m.delay}s`,
                '--amp': m.amp,
                '--rot': m.rot,
              } as CSSProperties
            }
          />
        )
      })}
      {GLINTS.map((g) => {
        const letter = LETTERS.find((l) => l.char === g.char)!
        return (
          <Sparkle
            key={g.char}
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
            }}
          />
        )
      })}
    </h1>
  )
}
