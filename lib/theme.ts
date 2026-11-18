export const theme = {
  colors: {
    bg:       "#FC3B7F",
    card:     "#FEF1CF",
    card2:    "#FBE4B4",
    primary:  "#0032A8",
    accent:   "#2E5BE8",
    text:     "#001A5C",
    muted:    "rgba(0, 26, 92, 0.66)",
    border:   "rgba(0, 26, 92, 0.16)",
  },
  cssVars: {
    "--color-bg":      "#FC3B7F",
    "--color-card":    "#FEF1CF",
    "--color-primary": "#0032A8",
    "--color-accent":  "#2E5BE8",
    "--color-text":    "#001A5C",
  },
} as const;

export type Theme = typeof theme;
