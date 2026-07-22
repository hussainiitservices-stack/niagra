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
  const [key, setKey] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length);
      setKey((k) => k + 1);
    }, 3200);

    return () => window.clearInterval(id);
  }, []);

  return (
    <span key={key} className={`morph-word ${className}`}>
      {PHRASES[index]}
    </span>
  );
}
