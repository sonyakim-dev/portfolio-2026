// Placement of each chrome letter inside the "Sonya" wordmark, in the coordinates of assets/sonya.png.
// The letter images are the v2 cutouts (assets/sonya-letters-v2), each registered onto the original
// wordmark (best overlap over scale × position), so the logo keeps its original composition.
// Scale by renderedWidth / WORD_WIDTH.
export const WORD_WIDTH = 1617;
export const WORD_HEIGHT = 748;

export const LETTERS = [
  { char: "S", x: 0, y: 0, w: 527, h: 667 },
  { char: "o", x: 407, y: 246, w: 282, h: 321 },
  { char: "n", x: 653, y: 230, w: 384, h: 286 },
  { char: "y", x: 911, y: 230, w: 352, h: 518 },
  { char: "a", x: 1220, y: 199, w: 397, h: 299 },
] as const;
