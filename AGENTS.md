# Sonya Kim — Portfolio

One-page cinematic portfolio: a framed poster sky with a floating chrome "Sonya" mark opens up, the camera passes through the clouds, and the clouds clear into project cards on the same sky.
`PLAN.md` is the source of truth for scope, decisions and progress; read it first and keep it current. (`asset/PLAN.md` is an older reference, superseded by `PLAN.md`.)
Design mockup: https://claude.ai/artifact/9w6GzV4DSVRmBcN9HFzzrT → page "B — Sky & chrome" (storyboard, desktop, mobile).

## Stack
- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`), configured in `src/index.css` with `@theme`; no `tailwind.config.js` (no UI kit, no router, no state library)
- GSAP (`gsap` + `@gsap/react`) with `ScrollTrigger` for the pinned, scrubbed scroll timeline and other JS animation
- Icons: `lucide-react` (UI) + `simple-icons` (brands/tech)
- Fonts: `@fontsource-variable/bodoni-moda`, `geist`, `geist-mono` (self-hosted)
- Deployed to Netlify as a static site (`npm run build` → `dist/`)

## Commands
- `npm run dev`: start the dev server
- `npm run build`: type-check and build for production

## Conventions
- **Content is data:** projects live in `src/data/projects.ts` (`title`, `outcome`, `category`, `tech[]`, `url`, `image`). Edit the data, not the components, to change content. Never invent project claims; unwritten outcomes stay visibly marked as placeholders.
- **Icons:** UI glyphs from `lucide-react`; tech/brand icons from `simple-icons` (`import { siReact } from 'simple-icons'`, render `path` in an `<svg viewBox="0 0 24 24" fill="currentColor">`). Map tech names to icons in one place (`src/data/tech.ts`).
- **Colors:** light only. All colors are Tailwind tokens defined in `@theme` (`bg-paper`, `text-fg`, `text-muted`, `border-line`, `text-accent`, sky tokens). Use those; never hex values or raw palette colors in components.
- **Shared styles:** repeated visual recipes are Tailwind `@utility` classes in `src/index.css` (e.g. `liquid` for the glass look, `microtype` for uppercase mono labels), not copy-pasted class strings.
- **Design tokens:** Bodoni Moda italic (poster serif only) · Geist (body; semibold for project titles, for legibility) · Geist Mono (uppercase microtype). Accent (cobalt) used sparingly: tagline `+`, hovers, focus rings.
- **Assets:** optimized WebP/AVIF in `src/assets/` (sky, 5 chrome letters, far/near clouds); originals stay in `asset/`. Decorative images get `alt=""`/`aria-hidden`; the name is a real `<h1 aria-label="Sonya Kim">`.
- **Motion:**
  - Animate only `transform`, `opacity` and `clip-path`. Use `100dvh` for the pinned viewport.
  - CSS for idle loops (per-letter bob/sway, twinkles) and hovers; GSAP for anything scroll-driven, sequenced, or enter/exit.
  - In React, create GSAP animations inside `useGSAP()` (scoped to a container ref) so they are cleaned up automatically; register `ScrollTrigger` once.
  - Use `gsap.matchMedia()` for desktop vs. mobile timelines and for `prefers-reduced-motion` (no pin/scrub: static hero, then the list).
  - Hover-only effects go inside `@media (hover: hover) and (pointer: fine)`.
  - Motion should feel smooth like drifting air: gentle eases, no bounce.
- **Accessibility:**
  - Use real `<a>` and `<button>` elements; the `#work` anchor must work by keyboard and direct link.
  - Icon-only controls get an `aria-label`.
  - Touch targets are at least 44px; focus states are visible.
  - External links use `target="_blank" rel="noopener"`.
  - Content must stay usable if animation or JavaScript fails.
- **Dependencies:** libraries are welcome when they mean less of our own code. Current set: see `PLAN.md` → Architecture. Ask before adding anything new.
- **Tests:** keep them minimal; don't add tests unless asked. Verify UI and animation by running the app and `npm run build`, not with component tests.
