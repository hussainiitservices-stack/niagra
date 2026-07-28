"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
  type RefObject,
} from "react";

type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "article" | "li";
  variant?: RevealVariant;
};

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  blur: "reveal-blur",
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.classList.add("is-visible");
      return;
    }

    // If already in view on mount (e.g. tall screens), show immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      requestAnimationFrame(() => node.classList.add("is-visible"));
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as RefObject<HTMLDivElement>}
      className={`${variantClass[variant]} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      data-no-scroll-animate=""
    >
      {children}
    </Tag>
  );
}
