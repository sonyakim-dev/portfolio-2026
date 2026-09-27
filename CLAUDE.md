# Sonya Kim — Portfolio

One-page personal portfolio: a liquid WebGL hero with Sonya's name, tagline, bio and social links, then a list of project cards.
`PLAN.md` is the source of truth for scope, decisions and progress; read it first and keep it current.
Design mockup (desktop + mobile, dark + light): https://claude.ai/artifact/9w6GzV4DSVRmBcN9HFzzrT

## Stack
- Vite + React + TypeScript (Vitest only for the few pure-logic tests)
- Plain CSS with CSS custom properties for theming (no Tailwind, no UI kit, no router, no state library)
- Raw WebGL for the hero shader (no three.js)
- Deployed to Netlify as a static site (`npm run build` → `dist/`)

## Commands
- `npm run dev`: start the dev server
- `npm test`: run the handful of Vitest tests
- `npm run build`: type-check and build for production

## Conventions
- **Content is data:** projects live in `src/data/projects.ts` (`title`, `category`, `tech[]`, `url`, `image`). Edit the data, not the components, to change content.
- **Icons:** SVG path strings in `src/icons.ts` (brands from Simple Icons, UI glyphs from Lucide). Don't add an icon library.
- **Theme:** `data-theme="dark" | "light"` on `<html>`, set by an inline script in `index.html` before React loads (prevents a flash). Default is dark; the visitor's choice is saved in `localStorage`. All colors come from CSS variables; never hard-code a color in a component.
- **Design tokens:** Bodoni Moda (display) · Geist (body) · Geist Mono (uppercase microtype). One accent color (cobalt blue), used sparingly: `+` in the tagline, hovers, focus rings, orbit lines.
- **Motion:**
  - Every animation respects `prefers-reduced-motion`.
  - Hover-only effects go inside `@media (hover: hover) and (pointer: fine)`, so they never trigger on touch devices.
  - Prefer CSS transitions and keyframes; use JS (`IntersectionObserver`, `requestAnimationFrame`) only when CSS can't do it.
- **Accessibility:**
  - Use real `<a>` and `<button>` elements.
  - Icon-only buttons get an `aria-label`.
  - Touch targets are at least 44px.
  - External links use `target="_blank" rel="noopener"`.
- **Dependencies:** ask before adding one; the goal is a small, explainable codebase.
- **Tests:** keep them minimal; don't add tests unless asked. Only pure logic that is easy to break silently gets a test (theme resolution, the easing math). Verify UI and animation by running the app, not with component tests.
