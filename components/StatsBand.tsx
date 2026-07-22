import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { bigStats } from "@/lib/data";

export function StatsBand() {
  return (
    <section className="bg-bone border-y border-rule">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bigStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delayMs={i * 80}
              className="text-center lg:text-left"
            >
              <p className="font-display text-4xl md:text-5xl text-heading">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  display={"display" in stat ? String(stat.display) : undefined}
                />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
