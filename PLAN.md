# Portfolio — Plan

Direction chosen: **B — Sky & chrome**. The site should feel like the opening of a short film: a framed poster sky opens up, the camera drifts toward the floating chrome **Sonya** mark, passes through the clouds, and the clouds clear into the project list on the same sky.
Mockup (storyboard + desktop + mobile): https://claude.ai/artifact/9w6GzV4DSVRmBcN9HFzzrT → page "B — Sky & chrome".
This file merges and supersedes `assets/PLAN.md` (kept only as a reference).

## Requirements
- One-page portfolio, responsive and mobile-friendly. Vite + React + TypeScript.
- Hero: floating chrome "Sonya" over a sky and cloud horizon; tagline, experience, LinkedIn/GitHub.
- Scroll: the frame opens → approach → through the clouds → whiteout → selected work. Tracks scroll in both directions.
- Work: one liquid-glass card per row (image, title, short outcome, category, tech-stack icons, external link) over the **same sky**, with no background swap or seam.
- No About or Contact sections (removed in the canvas); LinkedIn/GitHub live in the hero and the floating social dock.
- Light only (no dark mode).

## Experience (scroll timeline of the pinned hero)
| Stage | Progress | What happens |
|---|---|---|
| 01 Hero | 0% | Framed sky panel on paper with poster microtype. Italic serif "SOFTWARE ENGINEER" behind the chrome mark; each letter bobs and sways on its own rhythm (CSS). "⌄ Scroll to enter" cue at the panel's bottom: a real `#experience` link; clicking glides through the whole sequence to Experience (GSAP ScrollToPlugin, 2.2s, instant under reduced motion). |
| 02 Frame opens | ≈15% | The panel grows edge to edge (`clip-path` inset → 0). Poster type and the cue fade. |
| 03 Approach | ≈40% | The mark scales up slightly; far and near cloud layers rise at different speeds (parallax). |
| 04 Through the clouds | ≈65% | The near layer passes in front of the mark; the mark softens and fades behind it. |
| 05 Whiteout | ≈85% | The dense foreground fills the view in a brief soft white. |
| 06 Selected work | 100% | White clears to the same sky; the pin releases and the work section scrolls normally. The dock slides in. |

## Visual system
- **Palette:** powder blue, cloud white, cool silver, dark blue-gray text (`#525D72` for soft labels). Paper `#eeefed` around the framed hero. Accent: soft cobalt `#4657d6`, used sparingly (tagline `+`, hovers, focus rings).
- **Ultra-wide:** the framed panel is capped at 1680px (frame margins grow) and the logo at 1100px; the frame still opens to full width on scroll.
- **Type:** Bodoni Moda italic (poster serif only) · Geist (body; semibold project titles) · Geist Mono (uppercase microtype).
- **Logo:** Sonya's chrome wordmark, split into 5 letters (S, o, n, y, a) so each floats independently. On desktop (real pointer, motion allowed) letters near the cursor are gently pushed away from it (GSAP `quickTo`, smoothstep falloff, ≤2% of the logo width, per-letter depth); sparkles move with their letter. Real `<h1>` with `aria-label="Sonya Kim"`; letter images are decorative.
- **Sky:** `assets/sky-background.png` (→ `src/assets/sky.webp`) for the hero. The page below continues one sky gradient sampled from it (`#f7fafc` → `#b1d2ea` → `#a0c8e6` → `#c8dbe8`) behind the Work section and footer.
- **Clouds:** `clouds-far` and `clouds-near` transparent layers for parallax and occlusion; `cloud-mist` scaled up plus a white overlay for the whiteout.
- **No top nav** (only one section; the scroll cue and the social dock cover navigation).
- **Cards and dock:** liquid glass (translucent white, backdrop blur, luminous edge, soft shadow); text stays legible over bright areas via card tint.

## Content
- Tagline: "Engineering + Linguistics + Art". Header microtype (desktop): "Sonya Kim · [LinkedIn] ↗ · Welcome to my world · ↙ [GitHub] · Portfolio" — links are solid black pills that invert on hover; mobile: "Sonya Kim" + round icon-only LinkedIn/GitHub buttons on the right.
- Experience: a single credits-style ticker along the bottom of the frame, drifting right → left forever (CSS `marquee`, stopped under reduced motion); role **bold**, year in Bodoni italic. The bottom strip matches the header height, so the frame is symmetric.
- Experience lives in `src/data/experiences.ts` as two independent lists: `HERO_EXPERIENCE` (short credits for the hero ticker: role, company, year) and `EXPERIENCES` (detailed cards in the **Experience** section before Selected work: role, company, period, optional team, location, summary, highlights, tech). Experience cards share the project card's shell and grid, with an inset panel (company, team, period, location) in place of the image and no link. Jobs and projects are separate.
- Bio: not shown anywhere since About was removed.
- Links: LinkedIn https://www.linkedin.com/in/sonya-kim · GitHub https://github.com/sonyakim-dev · email TBD.
- Projects: the 10 from the old site (`src/data/projects.ts`); stacks from each repo's package.json / GitHub languages; Target VR = Unity + C#; the craft pieces = "Handcraft". simple-icons removed the LinkedIn, Photoshop and C# logos at the brands' request: LinkedIn, Photoshop, C# and AWS marks are kept locally in `src/icons/`; Java uses the OpenJDK mark. One-line outcomes are **placeholders** until Sonya writes them; never invent claims.

## Architecture
- Vite + React + TS. No UI kit, router or state library.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`), config in `src/index.css`: tokens in `@theme` (`bg-paper`, `text-fg`, `text-muted`, `border-line`, `text-accent`, sky colors), fonts (`font-display`, `font-sans`, `font-mono`), shared `@utility` recipes (`liquid`, `microtype`), keyframes (`bob`, `sway`, `twinkle`).
- **Libraries:**
  | Package | Used for |
  |---|---|
  | `tailwindcss`, `@tailwindcss/vite` | Styling |
  | `gsap`, `@gsap/react` | Pinned, scrubbed scroll timeline (`ScrollTrigger`), dock enter/exit, `useGSAP` cleanup, `gsap.matchMedia` for mobile + reduced motion |
  | `lucide-react` | UI icons (arrow, hammer, chevron) |
  | `simple-icons` | Brand/tech icons, tree-shaken |
  | `@fontsource-variable/{bodoni-moda,geist,geist-mono}` | Self-hosted fonts |
- **Components:** `SkyScene` (framed hero + pinned timeline + cloud layers), `ChromeName` (5 letter images with CSS bob/sway), `Tagline`, `SocialPill`, `ExperienceSection` (+ `ExperienceCard`), `ProjectSection` + `ProjectCard`, `SocialDock`.
- **Motion rules:** animate only `transform`, `opacity` and `clip-path`; `100dvh` for the pinned viewport; CSS for idle loops (letter float, twinkles), GSAP for everything scroll-driven. `gsap.matchMedia()`: a desktop timeline, a shorter mobile timeline with fewer/lighter layers, and no pin or scrub under `prefers-reduced-motion` (static hero, then the list).
- **Assets:** `src/assets/` holds optimized WebP: `sky.webp` (from `assets/sky-background.png`), `sonya/{S,o,n,y,a}.webp`, `clouds-far.webp`, `clouds-near.webp`, `cloud-mist.webp` (whiteout layer), and `projects/*.webp` (≤1200px). Letter placement lives in `src/data/chromeLetters.ts`. Originals stay in `assets/`. The chrome letters come from the transparent v2 cutouts in `assets/sonya-letters-v2/`, each registered onto the original `assets/sonya.png` wordmark (best overlap over scale × position) so the logo keeps its composition; exported at 2× the logo's max width.
- **Tests:** minimal; no component/snapshot tests. Check with `npm run build` and by running the app.
- **Deploy:** Netlify (static `dist/`).

## Implementation steps
1. [x] Scaffold Vite/React/TS + Tailwind v4; tokens, fonts; optimized assets into `src/assets/` (1.3 MB total)
2. [x] Static framed hero: sky panel, serif, `ChromeName` (per-letter float), tagline, experience, links. Responsive.
3. [x] Continuous sky + Work (data, glass cards with stack icons, placeholder outcomes), simple footer
4. [x] GSAP timeline: frame opens → approach → through the clouds → whiteout → release; mobile variant; reduced-motion fallback
   - One pinned, scrubbed (`scrub: 1`) timeline in `SkyScene`; the scene stays pinned for 2.2 screens (desktop) / 1.45 (mobile). `pinSpacing: false` + a spacer that is only sized while animating, so the Work section rises over the scene during the last screen, starting at timeline time 5.5 on desktop / 5.0 on mobile (while the near clouds are still passing). A 35dvh white gradient above Work (`data-work-fade`, shown only while the scene is active) keeps that edge misty; the whiteout finishes behind the rising list.
   - The sky is a full-screen layer clipped to the frame with `clip-path`; the frame margins are CSS variables (`--frame-top/-x/-bottom`), so the static hero is exact without JS, and GSAP opens the clip from the measured panel rect.
   - Near clouds, mist and a `sky-50` wash sit in front of the name; the wash matches the top of the Work section, so the pin releases with no seam (Work overlaps the scene by 1px to hide a compositor hairline).
   - Reduced motion: no pin or scrub, static hero, then the list.
5. [x] `SocialDock` (appears once Work is in view), focus states, meta/OG tags, favicon
   - Dock: GSAP ScrollTrigger on `#experience` (the first section below the hero; `top 75%` → end of page) toggles a glass pill; icons only on phones; instant under reduced motion.
   - Focus: cobalt `:focus-visible` ring verified with real Tab presses (header links → cards → dock).
   - `public/`: `favicon.png` (chrome S), `apple-touch-icon.png` (S on sky), `og.jpg` (1200×630 hero). Make `og:image` absolute once the domain is known.
   - No in-page anchors needed beyond "Back to top" (no nav by design).
6. [x] Check desktop/mobile, keyboard, reduced motion, scroll performance, asset sizes; deploy to Netlify
   - Production build (`vite preview`): no console errors, CLS ≈ 0, no horizontal overflow at 390 / 1440 / 3440 px; scrolling down and back up fully restores the hero.
   - `dist/` 2.2 MB; JS 124 KB gz (React + GSAP; simple-icons tree-shaken to the 11 icons used); CSS 8 KB gz.
   - Deployed from GitHub `sonyakim-dev/portfolio-2026` → Netlify (`netlify.toml`: `npm run build`, `dist`, Node 22).
   - Remaining: make `og:image` absolute once the site URL is confirmed; feel-check scroll pacing on real devices.

## Open content (needed from Sonya)
- One-line outcome per project

## Later / not now
- Blender/Spline re-render of the chrome letters (drop-in replacement for the 5 images)
- Short intro (fade from white, letterbox opening) before the hero settles
- Lenis smooth scrolling, only if GSAP scrub feels steppy on wheels/trackpads
- Project filtering, detail pages, CMS/blog, analytics
