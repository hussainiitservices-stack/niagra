import type { Metadata } from "next";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Studio Acoustic Doors in UAE",
  description:
    "Studio acoustic doors from Niagra for recording rooms, edit suites, and production spaces in the UAE.",
  alternates: { canonical: "/studio-acoustic-doors-in-uae" },
};

export default function StudioAcousticDoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Studios"
        title="Acoustic doors for studios and media rooms."
        description="Sound-attenuating wooden doors for recording and production spaces where performance and finish both matter."
        image="/brand/inner.webp"
        imageAlt="Studio and acoustic interior"
      />
      <section className="bg-white">
        <div className="container-site py-16 md:py-20 max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Built for sound control"
              description="Studio door packages focus on seals, core construction, and frame detailing. Share your room type and target performance for a project quote."
            />
          </Reveal>
        </div>
      </section>
      <LeadSection
        source="studio-acoustic"
        defaultProjectType="Acoustic Door"
        title="Enquire about studio acoustic doors"
      />
    </>
  );
}
