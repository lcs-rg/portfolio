import { identity } from "@/lib/content";
import { HeroCluster } from "@/components/HeroCluster";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-16 px-6 py-32 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p data-motion="hero-item" className="eyebrow mb-6">
            {identity.location}
          </p>
          <h1
            data-motion="hero-item"
            className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-7xl"
          >
            {identity.heroHeadline.split(" ")[0]}{" "}
            <span className="text-gradient-violet">
              {identity.heroHeadline.split(" ")[1]}
            </span>
          </h1>
          <p
            data-motion="hero-item"
            className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-glow-soft"
          >
            {identity.title}
          </p>
          <p
            data-motion="hero-item"
            className="mt-8 max-w-xl text-lg leading-relaxed text-mute"
          >
            {identity.subtitle}
          </p>
          <div
            data-motion="hero-item"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              className="rounded-lg bg-glow px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-glow-soft"
            >
              Ver projetos
            </a>
            <a
              href={identity.cvFile}
              download
              className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-mute transition-colors hover:border-glow hover:text-ink"
            >
              Baixar currículo
            </a>
          </div>
        </div>
        <div data-motion="hero-parallax" className="relative hidden lg:block">
          <HeroCluster />
        </div>
      </div>
    </section>
  );
}
