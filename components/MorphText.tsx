"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Crafting Excellence in Wood",
  "Transforming Spaces",
  "Civil Defense Approved Doors",
  "30 Years of Craftsmanship",
];

export function MorphText({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let alive = true;
    const id = window.setInterval(() => {
      if (!alive) return;
      setIndex((i) => (i + 1) % PHRASES.length);
      setAnimKey((k) => k + 1);
    }, 3200);

    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  return (
    <span className={`morph-word ${className}`} key={animKey}>
      {PHRASES[index]}
    </span>
  );
}
