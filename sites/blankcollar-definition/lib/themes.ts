export type Theme = {
  id: string;
  name: string;
  bg: string;
  fg: string;
  accent: string;
  muted: string;
};

export const themes: Theme[] = [
  {
    id: "paper",
    name: "Paper",
    bg: "#f5f5f5",
    fg: "#000000",
    accent: "#fa2bb8",
    muted: "#6b6b6b",
  },
  {
    id: "ink",
    name: "Ink",
    bg: "#000000",
    fg: "#ffffff",
    accent: "#d6f41f",
    muted: "#9b9b9b",
  },
  {
    id: "lime",
    name: "Lime",
    bg: "#d6f41f",
    fg: "#000000",
    accent: "#000000",
    muted: "#3a4a00",
  },
  {
    id: "magenta",
    name: "Magenta",
    bg: "#fa2bb8",
    fg: "#ffffff",
    accent: "#d6f41f",
    muted: "#ffd6ee",
  },
  {
    id: "cyan",
    name: "Cyan",
    bg: "#00dcd2",
    fg: "#000000",
    accent: "#fa2bb8",
    muted: "#003d3b",
  },
  {
    id: "bone",
    name: "Bone",
    bg: "#ffffff",
    fg: "#000000",
    accent: "#fa2bb8",
    muted: "#737373",
  },
];

export const defaultTheme = themes[0];
