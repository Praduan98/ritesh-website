import type { CSSProperties } from "react";

// Per-card hover-fill palette (brand colours), cycled by index across card grids.
// Gold takes dark text; the rest take white. Consumed by the `.hue-card` CSS via
// the inline --bh-* custom properties returned by hueVars().
export const CARD_HUES = [
  { fill: "linear-gradient(150deg,#13C3C3,#066D6D)", text: "#FFFFFF", edge: "#0DCFCF" }, // cyan
  { fill: "linear-gradient(150deg,#8072F2,#4C3FD1)", text: "#FFFFFF", edge: "#6C5CE7" }, // violet
  { fill: "linear-gradient(150deg,#F7C255,#E09A1E)", text: "#0A0A0A", edge: "#E0A32A" }, // gold
  { fill: "linear-gradient(150deg,#0A8B8B,#024E4E)", text: "#FFFFFF", edge: "#066D6D" }, // teal
];

export const hueVars = (i: number): CSSProperties =>
  ({
    "--bh-fill": CARD_HUES[i % 4].fill,
    "--bh-text": CARD_HUES[i % 4].text,
    "--bh-edge": CARD_HUES[i % 4].edge,
  }) as CSSProperties;
