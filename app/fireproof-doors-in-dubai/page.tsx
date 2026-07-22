import type { Metadata } from "next";
import Image from "next/image";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";

export const metadata: Metadata = {
  title: "Fireproof Doors in Dubai",
  description:
    "Fireproof wooden doors for Dubai projects from Niagra — civil defense aligned ratings, finishes, and installation support.",
  alternates: { canonical: "/fireproof-doors-in-dubai" },
};

export default function FireproofDoorsDubaiPage() {
  return (
    <>
      <PageHero
        eyebrow="Fireproof Doors"
        title="Fireproof doors for Dubai projects."
        description="Wooden fireproof door sets manufactured for Dubai programmes — ratings, finishes, and documentation ready for site and authority review."
        image="/brand/service-joinery.jpg"
        imageAlt="Fireproof door and wood interior"
      />

      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Dubai supply"
                title="Rated doors with a finished look."
                description="Niagra supplies fireproof wooden doors for hotels, towers, offices, and residential developments in Dubai — coordinated with frames, seals, and hardware."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <StampBadge label="FD60" />
                <StampBadge label="FD90" />
                <StampBadge label="FD120" />
                <StampBadge label="Civil Defense" />
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="img-zoom relative aspect-[5/4] bg-bone">
                <Image
                  src="/brand/service-fire.webp"
                  alt="Fireproof wooden door"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LeadSection
        source="fireproof-doors-dubai"
        defaultProjectType="Fire-Rated Door"
        title="Enquire for a Dubai fire door package"
        description="Share rating, quantity, location, and finish schedule for a clear next step."
      />
    </>
  );
}
