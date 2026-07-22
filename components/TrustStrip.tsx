import { CountUp } from "@/components/CountUp";
import { StampBadge } from "@/components/StampBadge";
import { certifications } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function TrustStrip() {
  return (
    <section className="border-y border-rule bg-white">
      <div className="container-site py-10 md:py-12">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-2">Compliance & heritage</p>
            <p className="font-display text-3xl md:text-4xl text-heading">
              <CountUp value={30} suffix="+" /> Years of Craftsmanship
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {certifications.slice(0, 5).map((item) => (
              <StampBadge key={item.id} label={item.short} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
