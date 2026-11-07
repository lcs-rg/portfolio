import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Lucas Guerra · Software Engineering & AI",
  description:
    "Portfólio de Lucas Guerra — Engenharia de Software e Inteligência Artificial. Microserviços, APIs REST e agentes de IA em aplicações web e mobile.",
  keywords: [
    "Lucas Guerra",
    "Software Engineering",
    "Artificial Intelligence",
    "Engenharia de Software",
    "IA",
    "LLM",
    "Portfolio",
  ],
  openGraph: {
    title: "Lucas Guerra · Software Engineering & AI",
    description:
      "Desenvolvo e integro soluções de Inteligência Artificial em produtos corporativos e automação de negócios.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
