export const theme = {
  colors: {
    bg:       "#001238",
    card:     "#0A1C55",
    card2:    "#0F2568",
    primary:  "#FC3B7F",
    accent:   "#FF7BAB",
    text:     "#FEF1CF",
    muted:    "rgba(254, 241, 207, 0.62)",
    border:   "rgba(254, 241, 207, 0.14)",
  },
  cssVars: {
    "--color-bg":      "#001238",
    "--color-card":    "#0A1C55",
    "--color-primary": "#FC3B7F",
    "--color-accent":  "#FF7BAB",
    "--color-text":    "#FEF1CF",
  },
} as const;

export type Theme = typeof theme;
