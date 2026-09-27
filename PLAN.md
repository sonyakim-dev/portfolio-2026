# Portfolio — Plan

## Requirements
- One-page personal portfolio, responsive and mobile-friendly
- Hero: mouse-responsive animation + short bio + links (LinkedIn, GitHub, etc.)
- Below: project cards (image, tech stack) linking to external URLs
- Black & white, editorial serif display type, one accent color
- Light/dark toggle, default dark
- Vite + React + TypeScript

## Design direction (from /inspo)
- **Hero:** full-bleed WebGL "liquid" surface, like the wave photo. The cursor makes ripples and glints. Dark theme = black water with white glints; light theme = pale silver/chrome water.
- **Type:** Bodoni Moda (display serif, name + headings) · Geist (body) · Geist Mono (caps microtype), loaded from Google Fonts.
- **Mockup:** https://claude.ai/artifact/9w6GzV4DSVRmBcN9HFzzrT (desktop + mobile, dark + light)
- **Poster frame:** ALL-CAPS microtype along the edges, crosshair marks, pill tags (from the Cosmic poster).
- **Accent:** one cobalt blue (Faerghus poster). Used sparingly: thin orbital lines, link hover, focus rings.
- **Name animation:** each letter of "Sonya Kim" floats on its own (CSS keyframes, a different delay per letter). On desktop only, a slow "swell" follows the cursor: nearby letters rise, lean with the slope and drift slightly away, then settle back. This is done in JS: `pointermove` → a `requestAnimationFrame` loop. There are no springs; frame-rate-independent exponential easing (`1 - exp(-dt/τ)`) never overshoots. The cursor is smoothed with τ=0.25s and each letter with τ=0.45s. Falloff is a smoothstep within ~1.8× the letter height. The loop writes `transform` directly to letter refs rather than React state, and stops once every letter has settled. The float is on the outer span and the JS transform on the inner span. The effect is only attached when `matchMedia("(hover: hover) and (pointer: fine)")` matches, and is off for `prefers-reduced-motion`. Later option: drive the letters with the same ripple function as the WebGL shader so text and water move as one.
- **No "Selected Work" heading:** the project cards follow the hero directly; the hero's bottom strip reads "Projects ↓ (10)".
- **Hero copy:** name, tagline "Software Engineering + Linguistics + Art" (accent-colored `+`), bio from the old site, LinkedIn/GitHub pills with icons.
- **Theme toggle:** icon-only round glass button (sun in dark mode, moon in light), `aria-label` says what it switches to.
- **Floating dock:** once `#work` scrolls into view, a glass pill with the LinkedIn + GitHub links slides up and stays at the bottom center (icons only on mobile). Plan: `IntersectionObserver` toggles a class, and a CSS transition handles the motion (translateY + opacity + blur, spring-like easing).
- **Project cards:** one per row, "liquid glass" (translucent fill, backdrop blur, top highlight, sheen). Image on the left (grayscale → color on hover), with category (no numbering), arrow button, big serif title and a **Stack** row of icon chips on the right. On mobile the card stacks vertically. The whole card is a link that opens a new tab.
- **Glass needs something behind it:** the wave shows (dimmed) behind the Work section. In the real build, the WebGL canvas can be a fixed full-page background.

## Assumptions
- Always start in dark mode; the visitor's toggle choice is saved in `localStorage`.
- Keep all 10 projects from the old site. Images are copied from the old repo.
- Tech stacks come from the repos' package.json / GitHub languages where available; Target VR = Unity + C#; the three craft projects = "Handcraft".
- Content is static and lives in `src/data/projects.ts`. No CMS.

## Architecture
- Vite + React + TS. Plain CSS with CSS variables for theming. No UI kit or router.
- Icons: a small `icons.ts` map of SVG paths copied from Simple Icons (brands) + Lucide (sun/moon/hammer/arrow). No icon-library dependency.
- `index.html` inline script sets `data-theme` before React loads (prevents a white flash).
- `WaveCanvas` component: raw WebGL, one fullscreen fragment shader.
  - Uniforms: time, mouse, resolution, theme colors
  - Mobile: follows touch; otherwise the "mouse" drifts on its own
  - `prefers-reduced-motion` → single static frame
  - Pauses when off-screen or the tab is hidden; device pixel ratio capped at 1.5
  - No WebGL → CSS gradient fallback
- Tests: minimal, with no component or snapshot tests. A couple of Vitest unit tests for pure logic only (theme resolution from storage, the easing/falloff math). UI and animations are checked by running the app and `npm run build`.
- Deploy: Netlify (static `dist/`, default `base: '/'`).

## Implementation steps
1. [ ] Scaffold Vite/React/TS; theme variables, fonts, theme toggle + no-flash script
2. [ ] Layout: hero text (name, bio, links) + poster-frame microtype, responsive
2b. [ ] Name animation: per-letter CSS float + desktop JS cursor swell (`LiquidName` component)
3. [ ] Projects: data file, images, liquid row cards with stack icons, hover effect
3b. [ ] Floating social dock (IntersectionObserver + CSS transition)
4. [ ] WaveCanvas: static shader → mouse ripple → touch/idle, reduced motion, pause, fallback
5. [ ] Polish: accent lines, focus states, meta/OG tags, favicon, mobile check
6. [ ] Deploy to Netlify

## Open content (needed from you)
- Bio / one-liner
- ~~Name display~~ → "Sonya Kim"
- Links: LinkedIn https://www.linkedin.com/in/sonya-kim · GitHub https://github.com/sonyakim-dev · email / resume? (TBD)
- One-line description per project (optional; cards currently have none)

## Later / not now
- Project filtering, detail pages, CMS/blog, analytics
- Image optimization (webp/responsive sizes) if the old images are heavy
