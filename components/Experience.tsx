"use client";

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/content";
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

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const ropeRef = useRef<SVGPathElement>(null);

  useLiftCards(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const section = sectionRef.current;
    if (!section) return;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const untracked: Array<() => void> = [];

      // acordeon expandido/contraído sem layout shift
      section
        .querySelectorAll<HTMLElement>(".accordion")
        .forEach((details) => {
          const body = details.querySelector(".acc-body");
          const summary = details.querySelector("summary");
          if (!body || !summary) return;

          const onClick = (event: Event) => {
            event.preventDefault();
            if (details.hasAttribute("open")) {
              gsap.to(body, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                overwrite: "auto",
                onComplete: () => details.removeAttribute("open"),
              });
            } else {
              details.setAttribute("open", "");
              gsap.fromTo(
                body,
                { height: 0, opacity: 0 },
                {
                  height: "auto",
                  opacity: 1,
                  duration: 0.55,
                  ease: "power3.out",
                  overwrite: "auto",
                },
              );
            }
          };
          summary.addEventListener("click", onClick);
          untracked.push(() => summary.removeEventListener("click", onClick));
        });

      // corda de tensionamento que se estica com o scroll (efeito Sísifo)
      const buildRope = (progress: number) => {
        const host = hostRef.current;
        const svg = svgRef.current;
        const rope = ropeRef.current;
        if (!host || !svg || !rope) return;
        const rect = host.getBoundingClientRect();
        if (rect.height <= 0) return;
        svg.setAttribute(
          "viewBox",
          `0 0 ${Math.max(rect.width, 1)} ${Math.max(rect.height, 1)}`,
        );
        const pts = Array.from(
          host.querySelectorAll<HTMLElement>("[data-dot]"),
        ).map((dot) => {
          const r = dot.getBoundingClientRect();
          return {
            x: r.left - rect.left + r.width / 2,
            y: r.top - rect.top + r.height / 2,
          };
        });
        if (pts.length < 2) return;

        const slack = 96 * (1 - progress);
        let d = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1];
          const b = pts[i];
          const dy = b.y - a.y;
          const side = i % 2 === 0 ? -1 : 1;
          d += ` C ${a.x + side * slack * 0.6} ${a.y + dy * 0.3}, ${
            b.x + side * slack
          } ${b.y - dy * 0.3}, ${b.x} ${b.y}`;
        }
        rope.setAttribute("d", d);
        const length = rope.getTotalLength();
        gsap.set(rope, {
          strokeDasharray: length,
          strokeDashoffset: length * (1 - progress),
        });
      };

      const trigger = ScrollTrigger.create({
        trigger: hostRef.current,
        start: "top 78%",
        end: "bottom 45%",
        scrub: 1,
        onUpdate: (self) => buildRope(self.progress),
        invalidateOnRefresh: true,
      });

      requestAnimationFrame(() => buildRope(0));

      return () => {
        untracked.forEach((off) => off());
        trigger.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative mx-auto max-w-3xl scroll-mt-24 px-6 py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          data-parallax="a"
          className="absolute -right-32 -top-16 h-72 w-72 rounded-full opacity-80"
          style={CLOUD_STYLE("rgba(139,92,246,0.4)", "13px 13px")}
        />
        <div
          data-parallax="b"
          className="absolute -bottom-24 -left-40 h-96 w-96 rounded-full opacity-60"
          style={CLOUD_STYLE("rgba(167,139,250,0.3)", "18px 18px")}
        />
      </div>
      <p className="eyebrow mb-3">Experiência.</p>
      <h2 className="max-w-xl text-3xl font-semibold leading-snug tracking-[-0.02em] sm:text-4xl">
        Da mais recente para a mais antiga — o desfecho primeiro.
      </h2>
      <div ref={hostRef} className="relative mt-14">
        <svg
          ref={svgRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rope-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path
            ref={ropeRef}
            fill="none"
            stroke="url(#rope-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
        <ol className="relative">
          {experience.map((job) => (
            <li key={job.company} className="relative pb-14 pl-10 last:pb-0 sm:pl-2">
              <span
                aria-hidden
                data-dot
                className="absolute left-[5px] top-1.5 z-10 h-3 w-3 rounded-full bg-glow shadow-[0_0_12px_rgba(139,92,246,0.8)] sm:left-[13px]"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                {job.period}
              </p>
              <details
                className="accordion group relative z-10 mt-2 rounded-xl border border-line bg-surface transition-colors"
                data-lift
              >
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
                <div className="acc-body overflow-hidden">
                  <div className="border-t border-line px-6 py-6">
                    <p className="text-sm leading-relaxed text-mute">
                      {job.summary}
                    </p>
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
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
