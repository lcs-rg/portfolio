"use client";

import { useRef } from "react";
import { projects } from "@/lib/content";
import { useLiftCards } from "@/hooks/useLiftCards";

const CLOUD_STYLE = (
  color: string,
  size: string,
) => ({
  backgroundImage: `radial-gradient(${color} 1px, transparent 1.6px)`,
  backgroundSize: size,
  WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
  maskImage: "radial-gradient(closest-side, black, transparent)",
});

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  useLiftCards(sectionRef);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative mx-auto max-w-3xl scroll-mt-24 px-6 py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          data-parallax="b"
          className="absolute -right-28 top-1/3 h-80 w-80 rounded-full opacity-60"
          style={CLOUD_STYLE("rgba(139,92,246,0.35)", "16px 16px")}
        />
      </div>
      <p className="eyebrow mb-3">{projects.heading}.</p>
      <h2 className="max-w-xl text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        Em construção, no ar ainda assim.
      </h2>
      <p className="mt-4 text-sm text-mute">{projects.note}</p>
      <div className="relative mt-10 grid gap-5 sm:grid-cols-2">
        {projects.items.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-lift
            className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-glow/60"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-md border border-glow/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-glow-soft">
                {project.tag}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                Em desenvolvimento
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              {project.description}
            </p>
            <span className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-glow-soft opacity-70 transition-opacity group-hover:opacity-100">
              Visitar
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
