"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const BASE_RX = 10;
const BASE_RY = -14;

const STACK_CHIPS = ["Python", "FastAPI", "Spring Boot", "GCP", "Docker", "React Native"];

export function HeroCluster() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>("[data-cluster-card]");
    if (cards.length > 0) {
      gsap.from(cards, {
        y: 46,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.3,
        clearProps: "opacity",
      });
    }
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024) return;

    gsap.set(scene, {
      rotationX: BASE_RX,
      rotationY: BASE_RY,
      transformPerspective: 1100,
    });
    const rx = gsap.quickTo(scene, "rotationX", {
      duration: 0.7,
      ease: "power3.out",
    });
    const ry = gsap.quickTo(scene, "rotationY", {
      duration: 0.7,
      ease: "power3.out",
    });
    const onMove = (event: PointerEvent) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      ry(BASE_RY + nx * 12);
      rx(BASE_RX - ny * 10);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md">
      <div
        ref={sceneRef}
        aria-hidden
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          data-cluster-card
          className="absolute left-0 top-0 w-56 [transform:translateZ(60px)_rotate(-4deg)]"
        >
          <div className="cluster-float rounded-xl border border-line bg-surface/90 p-4 shadow-[0_28px_60px_-28px_rgba(139,92,246,0.45)] backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-glow" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
                wincorce-assistant
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="rounded-lg border border-line bg-canvas px-3 py-2 text-xs text-mute">
                Como está a auditoria da rota?
              </p>
              <p className="rounded-lg bg-glow-dim px-3 py-2 text-xs text-glow-soft">
                3 gôndolas auditadas · confiança 97%
              </p>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
              FastAPI · LLM · tempo real
            </p>
          </div>
        </div>

        <div
          data-cluster-card
          className="absolute right-0 top-32 w-48 [transform:translateZ(30px)_rotate(3deg)]"
        >
          <div
            className="cluster-float rounded-xl border border-line bg-surface/90 p-4 shadow-[0_28px_60px_-28px_rgba(139,92,246,0.45)] backdrop-blur"
            style={{ animationDelay: "-2.4s" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
              Medsafe
            </p>
            <dl className="mt-3 space-y-2.5">
              <div>
                <dt className="text-lg font-bold text-glow-soft">1.700+</dt>
                <dd className="text-[11px] leading-tight text-mute">
                  unidades na plataforma
                </dd>
              </div>
              <div>
                <dt className="text-lg font-bold text-glow-soft">~65.000</dt>
                <dd className="text-[11px] leading-tight text-mute">
                  consultas de IA / mês
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          data-cluster-card
          className="absolute bottom-0 left-4 w-64 [transform:translateZ(45px)_rotate(-1deg)]"
        >
          <div
            className="cluster-float rounded-xl border border-line bg-surface/90 p-4 shadow-[0_28px_60px_-28px_rgba(139,92,246,0.45)] backdrop-blur"
            style={{ animationDelay: "-4.8s" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
              Stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {STACK_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-md border border-line bg-canvas px-2 py-1 font-mono text-[10px] text-mute"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-cluster-card
          className="absolute right-3 top-2 [transform:translateZ(80px)_rotate(5deg)]"
        >
          <div
            className="cluster-float rounded-full border border-glow/40 bg-canvas/90 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-glow-soft shadow-[0_16px_40px_-16px_rgba(139,92,246,0.6)] backdrop-blur"
            style={{ animationDelay: "-1.2s", animationDuration: "5.6s" }}
          >
            Computer Vision · Retail Execution
          </div>
        </div>
      </div>
    </div>
  );
}
