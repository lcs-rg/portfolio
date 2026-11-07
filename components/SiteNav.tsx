"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-glow focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          LG<span className="text-glow-soft">.</span>
        </a>
        <ul className="flex items-center gap-5 overflow-x-auto sm:gap-6 [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/lucas-guerra-cv.pdf"
          download
          className="rounded-md border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-mute transition-colors hover:border-glow hover:text-glow-soft sm:text-[11px]"
        >
          CV
        </a>
      </nav>
      </header>
    </>
  );
}
