import { education } from "@/lib/content";

export function Education() {
  return (
    <section id="educacao" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <p className="eyebrow mb-3">{education.heading}.</p>
      <h2 className="max-w-xl text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        Formação em curso, base já sólida.
      </h2>
      <div className="mt-10 space-y-5">
        {education.entries.map((entry) => (
          <article
            key={entry.school}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
              {entry.period}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em]">
              {entry.degree}
            </h3>
            <p className="mt-1 text-sm text-mute">{entry.school}</p>
            {entry.detail ? (
              <p className="mt-3 text-sm text-glow-soft">{entry.detail}</p>
            ) : null}
          </article>
        ))}
      </div>
      <div className="mt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Idiomas
        </p>
        <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {education.languages.map((item) => (
            <div
              key={item.language}
              className="rounded-lg border border-line bg-canvas px-4 py-3"
            >
              <dt className="text-sm font-semibold">{item.language}</dt>
              <dd className="mt-1 text-xs text-mute">{item.level}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
