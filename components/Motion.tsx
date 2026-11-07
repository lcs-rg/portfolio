"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const PARALLAX: Record<string, gsap.TweenVars> = {
  a: { yPercent: -16, xPercent: 5 },
  b: { yPercent: 14, xPercent: -7 },
};

export function Motion() {
  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTitle = document.querySelector("h1");
        if (heroTitle) gsap.set(heroTitle, { autoAlpha: 0 });

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

        const parallaxTarget = document.querySelector(
          "[data-motion='hero-parallax']",
        );
        if (parallaxTarget) {
          gsap.to(parallaxTarget, {
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

        gsap.utils
          .toArray<HTMLElement>("[data-parallax]")
          .forEach((layer) => {
            const vars = PARALLAX[layer.dataset.parallax ?? "a"];
            if (!vars) return;
            gsap.to(layer, {
              ...vars,
              ease: "none",
              scrollTrigger: {
                trigger: layer.closest("section") ?? layer,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            });
          });

        const splits: SplitText[] = [];

        const prepareTypo = () => {
          const title = document.querySelector("h1");
          if (title) {
            const hero = new SplitText(title, { type: "chars", mask: "chars" });
            splits.push(hero);
            gsap.set(title, { autoAlpha: 1 });
            gsap.from(hero.chars, {
              yPercent: 112,
              duration: 1,
              ease: "power4.out",
              stagger: 0.028,
              delay: 0.12,
            });
          }
          gsap.utils
            .toArray<HTMLElement>("main section h2")
            .forEach((heading) => {
              const split = new SplitText(heading, {
                type: "words",
                mask: "words",
              });
              splits.push(split);
              gsap.from(split.words, {
                yPercent: 115,
                duration: 0.9,
                ease: "power4.out",
                stagger: 0.05,
                scrollTrigger: { trigger: heading, start: "top 85%" },
              });
            });
          ScrollTrigger.refresh();
        };

        if (document.fonts?.ready) {
          void (document.fonts.ready as Promise<unknown>).then(() => {
            prepareTypo();
          });
        } else {
          prepareTypo();
        }

        return () => {
          splits.forEach((split) => split.revert());
        };
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
