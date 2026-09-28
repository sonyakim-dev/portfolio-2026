# SONYA — Cinematic Portfolio Plan

## 1. Goal

Build a responsive personal portfolio that feels like a short film opening. A reflective chrome **SONYA** logo floats above a soft blue sky and cloudscape. As the visitor scrolls, the camera appears to approach the logo and pass through clouds. The clouds clear into a straightforward project list: liquid glass cards over the **same sky background**.

The supplied reference image guides the pale blue sky, low cloud horizon, generous negative space, and sculptural chrome lettering. Use it as a visual reference, not as a full poster layout: omit its poster border, decorative labels, and large background headline.

## 2. Experience and page structure

1. **Sky / hero:** Full viewport sky. Large floating SONYA mark at center, sparse `Software Engineer` label, small navigation, and a `Scroll to explore` cue.
2. **Approach:** Scroll increases the perceived size of the mark slightly. Foreground and distant clouds move at different speeds; motion remains slow and restrained.
3. **Cloud passage:** Foreground clouds cover the mark and fill the viewport, creating a brief soft whiteout. The transition should track scroll in both directions.
4. **Selected work:** The same sky continues behind the content. A simple heading and a vertical list of translucent liquid glass project cards come into view. Each card has a title, short outcome or description, compact technology tags, and one clear link. No separate visual world or project-specific atmosphere.
5. **About / contact:** Brief text and direct links on the same background, using the same restrained glass treatment if needed.

## 3. Visual system

- **Palette:** Powder blue, cloud white, cool silver, and dark blue-gray text for contrast.
- **Logo:** Transparent chrome wordmark spelling `SONYA`, with organic, flowing letterforms inspired by the reference. Preserve highlights and transparency; export a smaller mobile variant if the composition needs it.
- **Sky:** One continuous image or layered sky treatment from hero through footer. Keep a stable horizon and avoid a visible seam when entering the work section.
- **Clouds:** Separate far and near transparent layers so depth comes from gentle parallax and occlusion. Reserve a denser foreground layer for the whiteout.
- **Cards:** Translucent, lightly tinted surfaces with subtle backdrop blur, thin luminous edges, restrained inner highlights, and soft shadows. Ensure text remains legible over bright cloud areas with a consistent overlay or stronger card tint.
- **Typography:** Expressive logo paired with a clean, readable interface font. Keep labels and navigation small but accessible.

## 4. Asset checklist

| Asset | Format | Use |
| --- | --- | --- |
| Sky and cloud horizon | Optimized WebP/AVIF with a fallback | Continuous background |
| SONYA chrome wordmark | Transparent WebP/PNG | Hero foreground |
| Far cloud layer | Transparent WebP/PNG | Subtle depth |
| Near cloud layer | Transparent WebP/PNG | Foreground and entry |
| Dense cloud/whiteout layer | Transparent WebP/PNG or CSS gradient | Transition mask |

Keep logos and clouds separate from the sky so they can move independently. Export at appropriate desktop and mobile sizes; preserve original editable sources when available. The supplied reference is inspiration and should not be used as a flattened page background.

## 5. Implementation approach

- **Stack:** Vite + React + TypeScript, CSS, and GSAP ScrollTrigger for the scroll timeline. Start with layered 2D assets and CSS transforms; add Three.js only if a specific interaction cannot be achieved convincingly with layers.
- **Structure:** `SkyScene` handles the pinned intro and cloud passage; `WorkSection` renders cards from a small typed project data array; `AboutSection` and `ContactSection` follow in normal document flow.
- **Motion:** Animate `transform` and `opacity` wherever possible. Map scroll progress to logo scale/position, cloud depth, cloud coverage, and section reveal. Keep the sky visually continuous while the pinned intro gives way to normal scrolling.
- **Navigation:** Work, About, and Contact anchors should work with keyboard and direct links. Keep real headings and project links in the DOM; never bake content into images.
- **Content:** Use real project titles, descriptions, outcomes, and destination URLs supplied or verified by Sonya. Until then, clearly mark sample cards as placeholders rather than inventing claims.

## 6. Responsive and accessibility requirements

- Compose mobile separately: smaller wordmark, tighter cloud framing, shorter transition, and appropriately sized cards.
- Honor `prefers-reduced-motion`: show the sky and logo as a static hero, then reveal the work section without pinned camera movement or blur animation.
- Provide meaningful logo alternative text or an equivalent visible/semantic heading. Decorative clouds should be ignored by assistive technology.
- Ensure readable contrast, visible focus states, touch-friendly links, and usable content even if animation or JavaScript fails.
- Avoid autoplay audio. Sound is outside the first release.

## 7. Build sequence

1. Prepare and optimize the separate sky, logo, and cloud assets.
2. Implement the responsive static hero and continuous page background.
3. Build the project list and liquid glass card styling with real content slots.
4. Add the scroll-driven approach, cloud coverage, and reveal.
5. Add About, Contact, navigation, and reduced-motion behavior.
6. Check desktop and mobile layouts, keyboard access, motion settings, loading behavior, and scroll performance. Tune asset sizes and animation only where checks show a problem.

## 8. Completion criteria

- The first viewport clearly presents a floating chrome SONYA mark in the reference-inspired sky.
- Scrolling passes through clouds and reveals project cards without a background swap or visible seam.
- Cards remain simple, legible, and usable on narrow screens.
- Reverse scrolling restores the intro coherently; anchor navigation reaches each section.
- The page remains navigable with reduced motion and without successful asset animation.
