"use client";

import { useRef } from "react";
import { stackGroups } from "@/lib/content";
import { useLiftCards } from "@/hooks/useLiftCards";

export function Stack() {
  const sectionRef = useRef<HTMLElement>(null);
  useLiftCards(sectionRef);

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28"
    >
      <p className="eyebrow mb-3">Stack.</p>
      <h2 className="max-w-xl text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        Ferramentas escolhidas pela função, não pela moda.
      </h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {stackGroups.map((group) => (
          <article
            key={group.title}
            data-lift
            className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
          >
            <h3 className="text-base font-semibold">{group.title}</h3>
            <p className="mt-1.5 text-sm text-mute">{group.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-mute"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
