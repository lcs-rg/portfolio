import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <p className="eyebrow mb-3">Experiência.</p>
      <h2 className="max-w-xl text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        Da mais recente para a mais antiga — o desfecho primeiro.
      </h2>
      <ol className="mt-14 relative">
        {experience.map((job, index) => (
          <li
            key={job.company}
            className="relative pb-14 pl-10 last:pb-0 sm:pl-2"
          >
            <span
              aria-hidden
              className="absolute left-[5px] top-1.5 h-3 w-3 rounded-full bg-glow shadow-[0_0_12px_rgba(139,92,246,0.8)] sm:left-[13px]"
            />
            {index < experience.length - 1 ? (
              <span
                aria-hidden
                className="absolute left-[11px] top-5 bottom-0 w-px bg-line sm:left-[19px]"
              />
            ) : null}
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
              {job.period}
            </p>
            <details className="group mt-2 rounded-xl border border-line bg-surface transition-colors">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-lg font-semibold tracking-[-0.01em]">
                    {job.company}
                  </span>
                  <span className="mt-0.5 block text-sm text-glow-soft">
                    {job.role}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="font-mono text-lg text-mute transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-line px-6 py-6">
                <p className="text-sm leading-relaxed text-mute">{job.summary}</p>
                <ul className="mt-5 space-y-3">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-mute"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-glow"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {job.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg bg-glow-dim px-4 py-3"
                    >
                      <dt className="text-xl font-bold text-glow-soft">
                        {metric.value}
                      </dt>
                      <dd className="mt-1 text-xs leading-snug text-mute">
                        {metric.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
