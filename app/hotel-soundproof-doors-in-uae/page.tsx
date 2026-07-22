import type { Metadata } from "next";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Hotel Soundproof Doors in UAE",
  description:
    "Hotel soundproof and acoustic wooden doors from Niagra for guest rooms and corridors across the UAE.",
  alternates: { canonical: "/hotel-soundproof-doors-in-uae" },
};

export default function HotelSoundproofDoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hospitality"
        title="Hotel soundproof doors for quieter guest rooms."
        description="Acoustic door sets detailed for corridor noise control and a finished hospitality look."
        image="/brand/banner2.webp"
        imageAlt="Hotel door and interior"
      />
      <section className="bg-white">
        <div className="container-site py-16 md:py-20 max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Specified for hotel programmes"
              description="Guest-room acoustic doors reduce corridor noise and improve sleep quality. We manufacture leaf, frame, and seals as a coordinated set for UAE hospitality projects."
            />
          </Reveal>
        </div>
      </section>
      <LeadSection
        source="hotel-soundproof"
        defaultProjectType="Acoustic Door"
        title="Enquire about hotel acoustic doors"
      />
    </>
  );
}
