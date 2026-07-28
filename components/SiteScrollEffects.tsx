"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SKIP_SELECTOR = [
  ".reveal",
  ".reveal-left",
  ".reveal-right",
  ".reveal-scale",
  ".reveal-blur",
  ".hero-rise",
  ".orbit-stage",
  ".orbit-wrap",
  ".orbit-track",
  ".orbit-card",
  ".orbit-item",
  ".orbit-core",
  ".marquee",
  ".marquee-track",
  ".scroll-progress",
  "[data-no-scroll-animate]",
].join(",");

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function updateProgressBar() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  bar.style.width = `${pct}%`;
}

export function SiteScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let parallaxImgs: HTMLElement[] = [];
    let observed: Element[] = [];

    const cleanupDom = () => {
      window.removeEventListener("scroll", updateProgressBar);
      window.removeEventListener("resize", updateProgressBar);
      window.removeEventListener("scroll", onParallax);
      observer?.disconnect();
      observed.forEach((el) => {
        el.classList.remove("scroll-section", "scroll-item", "is-inview");
        (el as HTMLElement).style.removeProperty("--scroll-delay");
      });
      parallaxImgs.forEach((img) => {
        img.style.transform = "";
      });
    };

    const onParallax = () => {
      parallaxImgs.forEach((img) => {
        const frame = img.closest(".img-zoom") || img.parentElement;
        if (!frame) return;
        const rect = frame.getBoundingClientRect();
        const viewH = window.innerHeight;
        if (rect.bottom < 0 || rect.top > viewH) return;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const shift = (progress - 0.5) * 16;
        img.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0) scale(1.05)`;
      });
    };

    // Wait until after paint so we never race Strict Mode remounts / child hydration.
    const startId = requestAnimationFrame(() => {
      if (cancelled) return;

      const reduced = prefersReducedMotion();
      const bar = document.getElementById("scroll-progress");

      if (reduced) {
        if (bar) bar.style.width = "0%";
        document
          .querySelectorAll(".scroll-section, .scroll-item")
          .forEach((el) => el.classList.add("is-inview"));
        return;
      }

      updateProgressBar();
      window.addEventListener("scroll", updateProgressBar, { passive: true });
      window.addEventListener("resize", updateProgressBar, { passive: true });

      const main = document.querySelector("main");
      const footer = document.querySelector("footer");
      observed = [];

      const mark = (el: Element, className: string, delay = 0) => {
        if (el.matches(SKIP_SELECTOR) || el.closest(SKIP_SELECTOR)) return;
        if (el.classList.contains(className)) return;
        el.classList.add(className);
        if (delay) (el as HTMLElement).style.setProperty("--scroll-delay", `${delay}ms`);
        observed.push(el);
      };

      if (main) {
        const sections = main.querySelectorAll(":scope > section, :scope > div");
        sections.forEach((section, index) => {
          const isHero =
            index === 0 ||
            section.querySelector(".hero-rise, .hero-image-reveal, .ken-burns");

          if (!isHero) {
            mark(section, "scroll-section");
          }

          const blocks = section.querySelectorAll(
            ":scope > .container-site > *:not(script)"
          );
          blocks.forEach((block, i) => {
            if (isHero) return;
            mark(block, "scroll-item", i * 70);
          });

          const cards = section.querySelectorAll(
            "article, .surface-card, .feature-tile, .stamp, .form-field"
          );
          cards.forEach((card, i) => {
            if (card.closest(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur")) {
              return;
            }
            mark(card, "scroll-item", (i % 6) * 60);
          });
        });
      }

      if (footer) {
        footer.querySelectorAll(".container-site > .grid > *").forEach((col, i) => {
          mark(col, "scroll-item", i * 80);
        });
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-inview");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );

      observed.forEach((el) => observer?.observe(el));

      parallaxImgs = main
        ? Array.from(
            main.querySelectorAll<HTMLElement>("section:not(:first-of-type) .img-zoom img")
          )
        : [];

      window.addEventListener("scroll", onParallax, { passive: true });
      onParallax();
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(startId);
      cleanupDom();
    };
  }, [pathname]);

  return <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />;
}
