import type { Metadata } from "next";
import Image from "next/image";
import { CountUp } from "@/components/CountUp";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";
import { CatalogGateForm } from "@/components/CatalogGateForm";

export const metadata: Metadata = {
  title: "About Niagra International Wood Industry LLC",
  description:
    "Niagra has manufactured fire-rated wooden doors, acoustic doors, and interior joinery in the UAE since 1998 — civil defense approved, end-to-end from design to handover.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A UAE manufacturer built on fire doors and fine joinery."
        description="Nearly 30 years of producing civil defense approved wooden doors and interior fit-out for hotels, hospitals, offices, and homes."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
        imageAlt="Architectural woodwork and craftsmanship"
      />

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Heritage"
                title="Incorporated in 1998. Still making doors that earn their rating plate."
              />
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Niagra International Wood Industry LLC started as a joinery and door
                  manufacturer in Sharjah and grew into a trusted supplier of fire-rated
                  and acoustic wooden doors across the UAE.
                </p>
                <p>
                  Our work is measured in tested minutes of fire resistance, acoustic
                  performance, and the finish quality that remains after installation —
                  not in slogans. Contractors and consultants specify Niagra when the
                  package must clear civil defense review and still look correct on site.
                </p>
                <p>
                  Today we manufacture fire-rated doors (FD30–FD120), acoustic and
                  soundproof doors, and full interior joinery: wardrobes, kitchens,
                  cabinets, partitions, ceilings, flooring, and decorative woodwork.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100} className="grid grid-cols-2 gap-4 content-start">
              {[
                { value: 30, suffix: "+", label: "Years" },
                { value: 100, suffix: "+", label: "Clients" },
                { value: 250, suffix: "K+", label: "Units delivered" },
                { value: 99, suffix: "%", label: "Project completion focus" },
              ].map((stat) => (
                <div key={stat.label} className="border border-rule bg-bone p-6">
                  <p className="font-display text-3xl text-espresso">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal className="border-t border-rule pt-8">
              <h2 className="font-display text-2xl text-espresso">Mission</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Manufacture doors that keep people and property safer in a fire, and
                joinery that meets the drawings — tested ratings, correct hardware, and
                finishes that hold up after handover.
              </p>
            </Reveal>
            <Reveal delayMs={80} className="border-t border-rule pt-8">
              <h2 className="font-display text-2xl text-espresso">Vision</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Remain the UAE reference for wooden fire doors and acoustic doors
                paired with serious interior joinery — one manufacturer for safety
                packages and finished interiors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden bg-bone">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
                  alt="Manufacturing and interior wood finishing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <SectionHeading
                eyebrow="Capability"
                title="Design, manufacture, install, handover."
                description="In-house production with modern machinery and a site team used to UAE programme pressure."
              />
              <ul className="mt-6 space-y-3 text-muted">
                {[
                  "Fire-rated and standard wooden doors",
                  "Acoustic / soundproof doors for hotels and studios",
                  "Wardrobes, kitchens, and custom furniture",
                  "Ceilings, partitions, and flooring",
                  "Painting, decorating, and complete joinery packages",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <StampBadge label="Civil Defense" />
                <StampBadge label="ISO Aligned" />
                <StampBadge label="FD30–FD120" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-16 md:py-20">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Resources"
                title="Company profile for tenders and consultants"
              />
              <p className="mt-4 text-muted leading-relaxed max-w-md">
                Download a short company profile PDF for prequalification packs. Wire the
                delivery email and CRM capture when you connect production systems.
              </p>
            </div>
            <div className="border border-rule bg-ivory p-6 md:p-8">
              <CatalogGateForm />
            </div>
          </Reveal>
        </div>
      </section>

      <LeadSection source="about-page" />
    </>
  );
}
