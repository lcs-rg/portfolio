import { contact, identity, links } from "@/lib/content";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <p className="eyebrow mb-3">{contact.heading}.</p>
      <h2 className="text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        {contact.intro}
      </h2>
      <a
        href={`mailto:${links.email}`}
        className="mt-8 inline-block text-2xl font-semibold tracking-[-0.02em] text-glow-soft underline-offset-4 hover:underline sm:text-3xl"
      >
        {links.email}
      </a>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <li>
          <a
            href={links.phoneHref}
            className="block rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-glow/60"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              Telefone
            </span>
            <span className="mt-1 block text-sm">{links.phone}</span>
          </a>
        </li>
        <li>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-glow/60"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              LinkedIn
            </span>
            <span className="mt-1 block text-sm">/lcsrg</span>
          </a>
        </li>
        <li>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-glow/60"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              GitHub
            </span>
            <span className="mt-1 block text-sm">@lcs-rg</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 justify-between px-6 py-10 text-sm text-mute sm:flex-row sm:items-center">
        <p>
          {identity.name} · {identity.location} · 2026
        </p>
        <a
          href={identity.cvFile}
          download
          className="font-mono text-xs uppercase tracking-[0.14em] text-glow-soft underline-offset-4 hover:underline"
        >
          Currículo em PDF
        </a>
      </div>
    </footer>
  );
}
