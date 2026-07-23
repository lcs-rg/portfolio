"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { theme } from "@/lib/theme";

const C = theme.colors;

// ── Item data ──
interface ItemDef {
  type: "card" | "text" | "star";
  x: number;
  y: number;
  startZ: number;
  speed: number;
  rotZ: number;
  // card
  tag?: string;
  title?: string;
  url?: string;       // project URL
  description?: string; // short description
  // text
  label?: string;
}

const ITEMS: ItemDef[] = [
  {
    type: "card", tag: "Full Stack + IA", title: "Vaga+",
    description: "Plataforma de vagas com recomendação por IA e busca inteligente",
    url: "https://vagamais.vercel.app/",
    x: 0, y: -40, startZ: -600, speed: 1.05, rotZ: -2,
  },
  {
    type: "card", tag: "Full Stack", title: "Studio Fabiana Kence",
    description: "Sistema de agendamento para estúdio de beleza com painel admin",
    url: "https://studio-fabiana-kence-zd23.vercel.app/login",
    x: -240, y: 30, startZ: -900, speed: 1.1, rotZ: 8,
  },
  {
    type: "card", tag: "Full Stack", title: "Vital Academia",
    description: "Site institucional para academia com aulas e planos",
    url: "https://vital-ativa-academia.vercel.app/",
    x: 220, y: -20, startZ: -1200, speed: 1.15, rotZ: -5,
  },
  {
    type: "card", tag: "IA & ML", title: "ChatBot LLM",
    description: "Assistente conversacional com RAG e function calling",
    url: "https://github.com/seu-usuario/chatbot-llm",
    x: -260, y: 60, startZ: -1600, speed: 1.0, rotZ: 10,
  },
  {
    type: "card", tag: "Full Stack", title: "E-commerce",
    description: "Plataforma de vendas com checkout e painel admin",
    url: "https://github.com/seu-usuario/ecommerce",
    x: -220, y: -80, startZ: -1900, speed: 1.0, rotZ: -8,
  },
  {
    type: "card", tag: "ML & IA", title: "AI Dashboard",
    description: "Painel de analytics preditivo com machine learning",
    url: "https://github.com/seu-usuario/ai-dashboard",
    x: 160, y: -160, startZ: -2200, speed: 1.1, rotZ: 5,
  },
  {
    type: "card", tag: "Frontend", title: "Spotify Clone",
    description: "Interface de streaming com player e playlists",
    url: "https://github.com/seu-usuario/spotify-clone",
    x: -120, y: 180, startZ: -2500, speed: 0.9, rotZ: 3,
  },
  {
    type: "card", tag: "UX/UI", title: "SaaS Onboarding",
    description: "Fluxo de onboarding interativo com micro-animacoes",
    url: "https://github.com/seu-usuario/saas-onboarding",
    x: 200, y: 130, startZ: -2800, speed: 0.8, rotZ: -4,
  },
  {
    type: "card", tag: "Backend", title: "Marketplace API",
    description: "API RESTful com autenticacao JWT e cache Redis",
    url: "https://github.com/seu-usuario/marketplace-api",
    x: 240, y: -40, startZ: -3100, speed: 0.75, rotZ: -6,
  },

  // Big outline text
  { type: "text", label: "TYPESCRIPT", x: -340, y: 280, startZ: -200, speed: 1.0, rotZ: -15 },
  { type: "text", label: "REACT",      x: 310, y: -260, startZ: -800, speed: 0.95, rotZ: 12 },
  { type: "text", label: "NEXT.JS",    x: 260, y: 300, startZ: -1800, speed: 0.85, rotZ: -8 },
  { type: "text", label: "PYTHON",     x: -310, y: -300, startZ: -2200, speed: 0.8, rotZ: 20 },
  { type: "text", label: "NODE.JS",    x: 10, y: -360, startZ: -1200, speed: 0.9, rotZ: -3 },
  { type: "text", label: "DOCKER",     x: -190, y: 360, startZ: -2800, speed: 0.7, rotZ: 7 },
];

// ── The component ──
export function BrutalIntro() {
  const worldRef = useRef<HTMLDivElement>(null);
  const elsRef = useRef<HTMLDivElement[]>([]);
  const scrollY = useRef(0);
  const animFrame = useRef(0);
  const [entered, setEntered] = useState(false);

  // Build DOM
  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    const proxy = document.getElementById("scroll-proxy");
    if (proxy) proxy.style.height = "500vh";

    const ACCENT = C.primary;

    ITEMS.forEach((item) => {
      const el = document.createElement("div");
      const isCard = item.type === "card";
      el.style.cssText = `
        position: absolute;
        left: 50%; top: 50%;
        transform-style: preserve-3d;
        will-change: transform, opacity;
        pointer-events: ${isCard ? "auto" : "none"};
      `;

      if (isCard) {
        // Click handler: navigate to project URL
        if (item.url) {
          el.addEventListener("click", (e) => {
            e.stopPropagation();
            window.open(item.url!, "_blank", "noopener,noreferrer");
          });
        }

        el.innerHTML = `
          <div style="
            background: ${C.card};
            border: 1px solid ${C.border};
            border-radius: 12px;
            padding: 20px 22px;
            width: 250px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            backdrop-filter: blur(12px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            cursor: ${item.url ? "pointer" : "default"};
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          "
            onmouseenter="this.style.borderColor='${ACCENT}';this.style.boxShadow='0 20px 60px ${C.primary}26';"
            onmouseleave="this.style.borderColor='${C.border}';this.style.boxShadow='0 20px 60px rgba(0,0,0,0.6)';"
          >
            <span style="
              color: ${ACCENT};
              border: 1px solid ${ACCENT};
              display: inline-block;
              padding: 2px 8px;
              font-size: 9px;
              text-transform: uppercase;
              letter-spacing: 2px;
              align-self: flex-start;
              border-radius: 2px;
            ">${item.tag}</span>
            <h3 style="
              color: ${C.text};
              font-size: 18px;
              font-weight: 700;
              letter-spacing: -0.5px;
              margin: 0;
              font-family: 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.2;
            ">${item.title}</h3>
            ${item.description ? `<p style="
              color: ${C.muted};
              font-size: 11px;
              line-height: 1.5;
              margin: 0;
              font-family: 'Helvetica Neue', Arial, sans-serif;
            ">${item.description}</p>` : ""}
            <div style="display: flex; gap: 6px; align-items: center;">
              <div style="width: 28px; height: 2px; background: ${ACCENT}; opacity: 0.5;"></div>
              <div style="width: 8px; height: 2px; background: ${C.muted};"></div>
              ${item.url ? `<span style="
                color: ${ACCENT};
                font-size: 9px;
                text-transform: uppercase;
                letter-spacing: 1px;
                opacity: 0.7;
                font-family: 'Helvetica Neue', Arial, sans-serif;
              ">Visitar →</span>` : ""}
            </div>
          </div>
        `;
      } else if (item.type === "text") {
        el.innerHTML = `
          <div style="
            font-size: 10vw;
            font-weight: 900;
            color: transparent;
            -webkit-text-stroke: 2px ${C.border};
            text-transform: uppercase;
            white-space: nowrap;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1;
          ">${item.label}</div>
        `;
      }

      world.appendChild(el);
      elsRef.current.push(el);
    });

    // Stars
    for (let i = 0; i < 100; i++) {
      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute;
        left: 50%; top: 50%;
        width: 4px; height: 4px;
        background: ${C.accent};
        border-radius: 50%;
        transform-style: preserve-3d;
        will-change: transform, opacity;
        box-shadow: 0 0 10px ${C.accent}cc;
        pointer-events: none;
      `;
      world.appendChild(el);
      elsRef.current.push(el);
    }
  }, []);

  // Lenis + animation
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", (inst: Lenis) => {
      scrollY.current = inst.animatedScroll;
    });

    let entered = false;

    function loop() {
      const world = worldRef.current;
      const els = elsRef.current;
      if (!world || els.length < ITEMS.length) {
        animFrame.current = requestAnimationFrame(loop);
        return;
      }

      const sy = scrollY.current;
      const now = Date.now();

      // Show portfolio after scrolling 200vh worth
      if (sy > window.innerHeight * 2 && !entered) {
        entered = true;
        setEntered(true);
      }

      // Animate structured items (cards + text)
      ITEMS.forEach((item, i) => {
        const el = els[i];
        if (!el) return;

        // Each item's Z moves with scroll at its own speed
        const vizZ = item.startZ + sy * item.speed;

        // Alpha: 1 at Z=0, linear fade to 0 at ±2000px
        const alpha = Math.max(0, 1 - Math.abs(vizZ) / 2000);

        el.style.opacity = String(alpha);

        if (alpha > 0.001) {
          const floatRot = Math.sin(now * 0.0008 + item.startZ * 0.01) * 4;
          el.style.transform = `
            translate3d(${item.x}px, ${item.y}px, ${vizZ}px)
            rotateZ(${item.rotZ + floatRot}deg)
          `;
        }
      });

      // Animate stars
      const starStartIdx = ITEMS.length;
      for (let i = starStartIdx; i < els.length; i++) {
        const el = els[i];
        if (!el) continue;

        const seed = i * 137.5;
        const baseZ = -((seed % 4000) + 500);
        const speed = 0.5 + (seed % 150) / 100;
        const vizZ = baseZ + sy * speed;
        const alpha = Math.max(0, 1 - Math.abs(vizZ) / 2500);

        el.style.opacity = String(alpha);

        if (alpha > 0.001) {
          const stretch = Math.max(1, Math.min(1 + Math.abs(sy) * 0.0003, 4));
          const sx = Math.sin(seed * 0.1) * 400;
          const sy_pos = Math.cos(seed * 0.13) * 400;
          el.style.transform = `
            translate3d(${sx}px, ${sy_pos}px, ${vizZ}px)
            scale3d(1, ${stretch}, 1)
          `;
        }
      }

      animFrame.current = requestAnimationFrame(loop);
    }

    animFrame.current = requestAnimationFrame(loop);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <>
      {/* Depth mask */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 11, pointerEvents: "none",
        background: `radial-gradient(ellipse at center, transparent 30%, ${C.bg}e6 100%)`,
        opacity: 0.6,
      }} />

      {/* Noise */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 12, pointerEvents: "none", opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* 3D viewport */}
      <div style={{
        position: "fixed", inset: 0, overflow: "hidden",
        perspective: "1000px", perspectiveOrigin: "50% 50%",
        background: C.bg, zIndex: 10,
      }}>
        <div ref={worldRef} style={{
          position: "absolute", width: "100%", height: "100%",
          transformStyle: "preserve-3d",
        }} />
      </div>

      {/* Scroll proxy */}
      <div id="scroll-proxy" style={{ position: "relative", zIndex: 1 }} />

      {/* Portfolio */}
      {entered && (
        <div style={{ position: "relative", zIndex: 20, marginTop: `${window.innerHeight * 2}px` }}>
          <PortfolioContent />
        </div>
      )}
    </>
  );
}

function PortfolioContent() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", textAlign: "center", padding: "2rem", gap: "1.5rem",
      }}>
        <span style={{
          color: C.primary, border: `1px solid ${C.primary}`, padding: "4px 12px",
          fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px", borderRadius: "2px",
        }}>
          Full Stack Developer & AI Specialist
        </span>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: "900", lineHeight: 0.95, margin: 0 }}>
          Codigo afiado.<br />
          <span style={{ color: C.primary }}>Design brutal.</span>
        </h1>
        <p style={{ color: C.muted, maxWidth: "500px", fontSize: "1.1rem" }}>
          Desenvolvimento full stack com foco em performance e IA. Minimalismo agressivo.
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <a href="#" style={{ padding: "12px 28px", background: C.primary, color: C.bg, fontWeight: "600", borderRadius: "6px", textDecoration: "none" }}>
            Ver Projetos →
          </a>
          <a href="#" style={{ padding: "12px 28px", border: `1px solid ${C.border}`, color: C.muted, fontWeight: "600", borderRadius: "6px", textDecoration: "none" }}>
            Contato
          </a>
        </div>
      </section>
    </div>
  );
}
