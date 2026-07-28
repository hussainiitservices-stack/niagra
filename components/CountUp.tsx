"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  display?: string;
  durationMs?: number;
  className?: string;
};

export function CountUp({
  value,
  suffix = "",
  display,
  durationMs = 1600,
  className = "",
}: CountUpProps) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let alive = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Defer so we never update during Strict Mode remount placement.
      const id = requestAnimationFrame(() => {
        if (!alive) return;
        setCurrent(value);
        setStarted(true);
      });
      return () => {
        alive = false;
        cancelAnimationFrame(id);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!alive || !entry.isIntersecting) return;
        setStarted(true);
        observer.unobserve(node);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      alive = false;
      observer.disconnect();
    };
  }, [value]);

  useEffect(() => {
    if (!started || display) return;

    let alive = true;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      if (!alive) return;
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
    };
  }, [started, value, durationMs, display]);

  return (
    <span ref={ref} className={className}>
      {display ? (started ? display : "") : (
        <>
          {current}
          {suffix}
        </>
      )}
    </span>
  );
}
