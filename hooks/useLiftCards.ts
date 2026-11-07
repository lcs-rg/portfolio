"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";

export function useLiftCards(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const untracked: Array<() => void> = [];

      gsap.utils
        .toArray<HTMLElement>("[data-lift]", root)
        .forEach((el) => {
          const enter = () => {
            gsap.to(el, {
              y: -6,
              boxShadow: "0 24px 48px -24px rgba(139,92,246,0.45)",
              duration: 0.45,
              ease: "power3.out",
              overwrite: "auto",
            });
          };
          const leave = () => {
            gsap.to(el, {
              y: 0,
              boxShadow: "0 0px 0px 0px rgba(139,92,246,0)",
              duration: 0.7,
              ease: "elastic.out(1, 1.2)",
              overwrite: "auto",
            });
          };
          el.addEventListener("mouseenter", enter);
          el.addEventListener("mouseleave", leave);
          el.addEventListener("focusin", enter);
          el.addEventListener("focusout", leave);
          untracked.push(() => {
            el.removeEventListener("mouseenter", enter);
            el.removeEventListener("mouseleave", leave);
            el.removeEventListener("focusin", enter);
            el.removeEventListener("focusout", leave);
          });
        });

      return () => {
        untracked.forEach((off) => off());
      };
    });

    return () => mm.revert();
  }, [rootRef]);
}
