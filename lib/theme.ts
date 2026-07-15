// ── Tema: Vinho Premium ──
// Paleta sofisticada com tons de vinho e rosé
// Uso: import { theme } from "@/lib/theme"

export const theme = {
  colors: {
    bg:       "#120C10",  // Fundo — preto vinho
    card:     "#22161B",  // Superficies / Cards — vinho escuro
    primary:  "#7A284B",  // Primaria — bordô / vinho
    accent:   "#D58DAA",  // Destaque — rosé claro
    text:     "#F7F3F4",  // Texto — off-white rosado
    muted:    "rgba(247, 243, 244, 0.4)",   // Texto secundario
    border:   "rgba(122, 40, 75, 0.15)",    // Borda sutil
    glass:    "rgba(34, 22, 27, 0.8)",       // Glass effect
  },

  // CSS custom properties prontas pra injetar no :root
  cssVars: {
    "--color-bg":      "#120C10",
    "--color-card":    "#22161B",
    "--color-primary": "#7A284B",
    "--color-accent":  "#D58DAA",
    "--color-text":    "#F7F3F4",
  },
} as const;

export type Theme = typeof theme;
