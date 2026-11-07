export const theme = {
  colors: {
    bg:       "#0B0F19",
    card:     "#161B26",
    card2:    "#1C2333",
    primary:  "#8B5CF6",
    accent:   "#A78BFA",
    text:     "#F1F5F9",
    muted:    "rgba(241, 245, 249, 0.6)",
    border:   "rgba(148, 163, 184, 0.14)",
  },
  cssVars: {
    "--color-bg":      "#0B0F19",
    "--color-card":    "#161B26",
    "--color-primary": "#8B5CF6",
    "--color-accent":  "#A78BFA",
    "--color-text":    "#F1F5F9",
  },
} as const;

export type Theme = typeof theme;
