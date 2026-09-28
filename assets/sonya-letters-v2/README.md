# Sonya — transparent letter cutouts

Source: `../sonya.png`.

Five separate PNGs: `S.png`, `o.png`, `n.png`, `y.png`, `a.png`.
Created using the built-in image generation/editing tool. These are AI-assisted extractions, not pixel-identical crops. The website still uses its existing WebP assets.

## Prompt set

For each character S, o, n, y, a:

> Use case: background-extraction. Edit target: attached chrome Sonya wordmark. Extract ONLY the specified character as one isolated transparent PNG asset. Remove every other letter and completely remove the baked-in gray/white checkerboard background, including inside all curves and holes. Preserve the original character shape, silver chrome reflections, blue highlights, proportions, tilt and sharp edges faithfully; do not redesign the lettering. Center the complete character with small transparent padding, no clipping. Actual alpha transparency, no checkerboard pattern, no background, no added shadows or text. Save the output as a transparent PNG.

S cleanup pass:

> Clean up this transparent chrome S cutout. Preserve the S exactly. Remove the stray translucent gray/blue background patches outside the metal silhouette, especially above the top arch and inside the upper curve near the white glint. Every pixel outside the chrome silhouette should be fully transparent, with only narrow clean antialiasing at the edge. Do not add glow or sparkles. Keep original shape and chrome material unchanged. Actual transparent PNG.

Additional correction prompts:

- **a:** Extract only the last letter at the far right of the source: a single-storey oval with a short upward-curving exit stroke. No descending loop; do not produce g or y.
- **n:** Preserve the chrome n and remove the entire gray glow/haze around it.
- **y:** Preserve the chrome y and remove stray gray patches and blue fringes, especially above the lower loop.

For each correction: the entire background must be actual alpha transparency, outside the letter and inside loops. Only chrome metal remains with narrow antialiased edges; no glow, haze, checkerboard or other letters. Preserve silver/blue reflections and proportions.
