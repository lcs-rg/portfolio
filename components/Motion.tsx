"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const SECTION_IDS = [
  "sobre",
  "stack",
  "experiencia",
  "projetos",
  "educacao",
  "contato",
];

export function Motion() {
  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const heroItems = gsap.utils.toArray<HTMLElement>(
        "[data-motion='hero-item']",
      );
      if (heroItems.length > 0) {
        gsap.from(heroItems, {
          y: 26,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.05,
          clearProps: "all",
        });
      }

      const parallax = document.querySelector("[data-motion='hero-parallax']");
      if (parallax) {
        gsap.to(parallax, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        gsap.from(section.children, {
          scrollTrigger: { trigger: section, start: "top 78%" },
          y: 26,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.09,
        });
      });

      const rail = document.getElementById("exp-rail");
      const railTrack = rail?.parentElement;
      if (rail && railTrack) {
        gsap.fromTo(
          rail,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: railTrack,
              start: "top 72%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          },
        );
      }
    });

    return () => mm.revert();
  }, []);

  return null;
}
