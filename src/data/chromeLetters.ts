// Placement of each chrome letter inside the "Sonya" wordmark, in source-image pixels
// (measured when the wordmark in asset/sonya.png was split into letters).
// Scale by renderedWidth / WORD_WIDTH.
export const WORD_WIDTH = 1646
export const WORD_HEIGHT = 756

export const LETTERS = [
  { char: 'S', x: -1, y: -1, w: 555, h: 680 },
  { char: 'o', x: 428, y: 238, w: 278, h: 334 },
  { char: 'n', x: 674, y: 225, w: 320, h: 335 },
  { char: 'y', x: 929, y: 202, w: 361, h: 555 },
  { char: 'a', x: 1249, y: 181, w: 398, h: 331 },
] as const
