import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { bigStats } from "@/lib/data";

export function StatsBand() {
  return (
    <section className="bg-bone border-y border-rule">
      <div className="container-site py-10 md:py-16">
        <div className="mobile-stats md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
          {bigStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delayMs={i * 80}
              className="text-left"
            >
              <p className="font-display text-3xl md:text-5xl text-heading">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  display={"display" in stat ? String(stat.display) : undefined}
                />
              </p>
              <p className="mt-2 text-[0.65rem] md:text-xs uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
