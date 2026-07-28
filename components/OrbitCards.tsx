"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ORBIT_CARDS = [
  {
    title: "Fire Rated",
    text: "FD30–FD120 wooden doors",
    href: "/fire-rated-doors-uae",
  },
  {
    title: "Acoustic",
    text: "Hotels & studio packages",
    href: "/acoustic-doors-uae",
  },
  {
    title: "Civil Defense",
    text: "Approved documentation",
    href: "/certificates",
  },
  {
    title: "Joinery",
    text: "Kitchens, wardrobes, fit-out",
    href: "/interior-joinery",
  },
  {
    title: "Install",
    text: "Design to handover",
    href: "/projects",
  },
  {
    title: "UAE Supply",
    text: "Sharjah manufacturing",
    href: "/about-us",
  },
] as const;

export function OrbitCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="orbit-wrap">
      <div
        ref={ref}
        className={`orbit-stage ${active ? "is-active" : "is-paused"}`}
        aria-label="Niagra capabilities orbit"
      >
        <div className="orbit-ring" aria-hidden="true" />
        <div className="orbit-ring orbit-ring-inner" aria-hidden="true" />

        <div className="orbit-core">
          <Image
            src="/brand/logo2.png"
            alt="Niagra"
            width={120}
            height={40}
            className="h-9 w-auto md:h-10"
          />
          <p className="mt-2 font-display text-2xl md:text-3xl text-heading">30+</p>
          <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">Years</p>
        </div>

        <div className="orbit-track">
          {ORBIT_CARDS.map((card, index) => (
            <div
              key={card.title}
              className="orbit-item"
              style={{
                ["--i" as string]: index,
                ["--total" as string]: ORBIT_CARDS.length,
              }}
            >
              <Link href={card.href} className="orbit-card">
                <span className="orbit-card-title">{card.title}</span>
                <span className="orbit-card-text">{card.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
