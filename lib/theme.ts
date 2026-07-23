// ── Tema: Terminal Dark ──
// Paleta dev com fundo escuro e accent verde terminal
// Uso: import { theme } from "@/lib/theme"

export const theme = {
  colors: {
    bg:       "#020617",  // Fundo — slate-950
    card:     "#0F172A",  // Superficies / Cards — slate-900
    primary:  "#22C55E",  // Primaria — verde terminal
    accent:   "#4ADE80",  // Destaque — verde claro
    text:     "#F8FAFC",  // Texto — slate-50
    muted:    "rgba(248, 250, 252, 0.5)",   // Texto secundario
    border:   "rgba(51, 65, 85, 0.4)",      // Borda sutil — slate-700
    glass:    "rgba(15, 23, 42, 0.85)",      // Glass effect
  },

  // CSS custom properties prontas pra injetar no :root
  cssVars: {
    "--color-bg":      "#020617",
    "--color-card":    "#0F172A",
    "--color-primary": "#22C55E",
    "--color-accent":  "#4ADE80",
    "--color-text":    "#F8FAFC",
  },
} as const;

export type Theme = typeof theme;
