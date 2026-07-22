import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { ProcessSection } from "@/components/ProcessSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";
import { SITE } from "@/lib/constants";
import { faqs, fireRatings, whereUsed } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fire-Rated Doors UAE",
  description:
    "Civil defence approved wooden fire-rated door assemblies FD30–FD120 from Niagra — supply, manufacture, install, and handover across the UAE.",
  alternates: { canonical: "/fire-rated-doors-uae" },
  keywords: [
    "fire rated doors UAE",
    "FD60 doors Dubai",
    "wooden fire door manufacturer",
    "civil defense fire doors",
  ],
};

export default function FireRatedDoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Fire Doors"
        title="Certified fire-rated wooden door assemblies."
        description="Contain fire and smoke for a rated period — leaf, frame, seals, and hardware coordinated as one set, documented for civil defence review."
        image="/brand/service-fire.webp"
        imageAlt="Fire-rated wooden door"
        ctaLabel="Get a Free Quote"
      />

      <section className="bg-white border-b border-rule">
        <div className="container-site py-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <StampBadge label="Civil Defence Approved" />
          <StampBadge label="FD30" />
          <StampBadge label="FD60" />
          <StampBadge label="FD90" />
          <StampBadge label="FD120" />
          <StampBadge label="UAE Manufacturing" />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Overview"
                title="A fire door is a tested assembly — not just a leaf."
                description="Niagra manufactures wooden fire-rated doors as complete sets: leaf, frame, hardware, and seals that resist the passage of fire and smoke for the rated period."
              />
              <p className="mt-5 text-muted leading-relaxed">
                Ratings are given in minutes — commonly 30, 60, 90, or 120 — and shown on
                a permanent certification label. Specifiers receive documentation; site
                teams receive doors prepared for installation and handover.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact-us#quote" className="btn btn-primary btn-shine">
                  Get a Free Quote
                </Link>
                <a href={SITE.phoneHref} className="btn btn-outline btn-shine">
                  Call {SITE.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="img-zoom relative aspect-[4/5] bg-bone shadow-[0_24px_50px_rgba(64,50,38,0.12)]">
                <Image
                  src="/brand/banner2.webp"
                  alt="Door edge, finish, and hardware detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Fire-resistance ratings"
              title="FD30 · FD60 · FD90 · FD120"
              description="Choose the minutes required by the fire strategy. A door’s rating is normally lower than the wall it sits in — for example, a 2-hour wall typically takes a 90-minute door."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {fireRatings.map((rating, i) => (
              <Reveal
                key={rating.code}
                delayMs={i * 70}
                className="rounded-2xl border border-rule bg-white p-6 md:p-8 transition-all hover:border-brass hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">{rating.minutes} minutes</p>
                    <h3 className="font-display text-2xl text-heading">{rating.title}</h3>
                  </div>
                  <StampBadge label={rating.code} />
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {rating.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Where it’s used"
                title="Specified wherever compartmentation matters"
              />
              <ul className="mt-8 space-y-3">
                {whereUsed.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delayMs={100} className="rounded-3xl border border-rule bg-bone p-8 md:p-10">
              <p className="eyebrow mb-3">Standards & compliance</p>
              <h3 className="font-display text-2xl text-heading">
                Built for UAE civil defence review
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                Packages are manufactured to the rating specified and supported with
                documentation for project submissions. Field modifications that void the
                listing are not permitted — the assembly must remain as tested.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <StampBadge label="Civil Defence" />
                <StampBadge label="Rating Label" />
                <StampBadge label="Inspection Ready" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions"
                description="General guidance to help you choose. Final selection follows your fire strategy and civil defence authority — our team confirms the right solution for your site."
              />
            </Reveal>
            <Reveal delayMs={100}>
              <FaqAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-heading text-white">
        <div className="container-site py-14 md:py-16 text-center">
          <Reveal>
            <p className="eyebrow text-brass mb-3">Need certified fire doors?</p>
            <h2 className="font-display text-3xl md:text-4xl text-white max-w-2xl mx-auto">
              Tell us the rating, quantity, and location — we respond with a clear next
              step.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us#quote" className="btn btn-brass btn-shine">
                Get a Free Quote
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-shine"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <LeadSection
        source="fire-rated-doors"
        defaultProjectType="Fire-Rated Door"
        title="Enquire about a fire door package"
        description="Include rating (FD30–FD120), approximate quantity, location, and finish schedule. We will confirm lead time and documentation."
      />
    </>
  );
}
