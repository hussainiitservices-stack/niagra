import type { Metadata } from "next";
import Image from "next/image";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Interior Joinery & Fit-Out",
  description:
    "Custom wardrobes, kitchens, cabinets, partitions, ceilings, and flooring from Niagra — design, manufacture, install, and handover in the UAE.",
  alternates: { canonical: "/interior-joinery" },
};

const joineryLines = [
  {
    title: "Wardrobes",
    text: "Fitted wardrobes and closet systems to room dimensions and finish schedules.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80",
  },
  {
    title: "Kitchens",
    text: "Kitchen cabinets and worktop coordination for residential and hospitality projects.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c875dba?w=900&q=80",
  },
  {
    title: "Cabinets & furniture",
    text: "Reception desks, storage, and custom furniture pieces manufactured with the door package.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80",
  },
  {
    title: "Partitions, ceilings & flooring",
    text: "Interior partitions, decorative ceilings, and wood flooring as part of a full fit-out.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
  },
];

export default function InteriorJoineryPage() {
  return (
    <>
      <PageHero
        eyebrow="Interior Joinery"
        title="Fit-out joinery from the same workshop as your doors."
        description="Wardrobes, kitchens, cabinets, partitions, ceilings, and flooring — measured, manufactured, and installed."
        image="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1600&q=80"
        imageAlt="Custom kitchen and cabinetry joinery"
      />

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <Reveal className="max-w-2xl">
            <SectionHeading
              eyebrow="Capability"
              title="One manufacturer for doors and interiors."
              description="Coordinating door packages and joinery from a single workshop reduces finish mismatches and site coordination risk for contractors."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {joineryLines.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70} as="article">
                <div className="img-zoom relative aspect-[16/10] bg-bone">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl text-espresso">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadSection
        source="interior-joinery"
        defaultProjectType="Joinery"
        title="Enquire about joinery & fit-out"
        description="Share drawings, room schedule, finishes, and programme. We quote manufacture and installation together when required."
      />
    </>
  );
}
