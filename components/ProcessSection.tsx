import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="bg-heading text-white">
      <div className="container-site py-16 md:py-24">
        <Reveal>
          <p className="eyebrow text-brass mb-3">Turnkey delivery</p>
          <h2 className="font-display text-3xl md:text-4xl text-white max-w-2xl">
            Specify. Manufacture. Install. Handover.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            One workshop for fire-rated doors, acoustic sets, and joinery — with the
            programme discipline contractors expect.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, i) => (
            <Reveal
              key={item.step}
              delayMs={i * 90}
              className="relative rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-brass/60 hover:bg-white/10"
            >
              <p className="font-display text-3xl text-brass">{item.step}</p>
              <h3 className="mt-3 font-display text-xl text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
