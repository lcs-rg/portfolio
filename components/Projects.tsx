import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <p className="eyebrow mb-3">{projects.heading}.</p>
      <h2 className="max-w-xl text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        Em construção, no ar ainda assim.
      </h2>
      <p className="mt-4 text-sm text-mute">{projects.note}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.items.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
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
