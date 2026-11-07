import { about, identity, links } from "@/lib/content";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <p className="eyebrow mb-3">Sobre.</p>
      <h2 className="max-w-xl text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        {about.lead}
      </h2>
      <p className="mt-8 leading-relaxed text-mute">{about.paragraph}</p>
      <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        {about.facts.map((fact) => (
          <div key={fact.label} className="border-l border-line pl-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 flex flex-wrap gap-6 text-sm">
        <a
          href={`mailto:${links.email}`}
          className="text-glow-soft underline-offset-4 hover:underline"
        >
          {links.email}
        </a>
        <span className="text-mute">{identity.location}</span>
      </div>
    </section>
  );
}
