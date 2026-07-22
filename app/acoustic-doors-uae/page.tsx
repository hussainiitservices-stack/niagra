import type { Metadata } from "next";
import Image from "next/image";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";

export const metadata: Metadata = {
  title: "Acoustic Doors UAE",
  description:
    "Acoustic and soundproof wooden doors for hotels, studios, offices, and healthcare — manufactured by Niagra in the UAE.",
  alternates: { canonical: "/acoustic-doors-uae" },
  keywords: [
    "acoustic doors UAE",
    "soundproof doors Dubai",
    "hotel soundproof doors",
    "studio acoustic doors",
  ],
};

const useCases = [
  {
    title: "Hotels & hospitality",
    text: "Guest-room door sets that reduce corridor noise and improve sleep quality without looking institutional.",
  },
  {
    title: "Studios & media",
    text: "Sound-attenuating doors for recording rooms, edit suites, and production spaces where Rw performance matters.",
  },
  {
    title: "Offices & meeting rooms",
    text: "Boardrooms and focus rooms that need speech privacy with a finished wooden leaf and frame.",
  },
  {
    title: "Healthcare",
    text: "Consultation rooms and wards where acoustic comfort supports patient care and confidentiality.",
  },
];

export default function AcousticDoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Acoustic Doors"
        title="Soundproof wooden doors for rooms that need quiet."
        description="Specified for hotels, studios, offices, and healthcare — with seals, cores, and frames detailed for acoustic performance."
        image="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1600&q=80"
        imageAlt="Hotel interior with solid wooden doors"
      />

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Product"
                title="Acoustic performance in a finished door set."
                description="Niagra manufactures acoustic and soundproof wooden doors as complete sets — leaf, frame, seals, and hardware coordinated for the room type."
              />
              <p className="mt-5 text-muted leading-relaxed">
                Many UAE hospitality and mixed-use projects need fire rating and acoustic
                performance together. Tell us both requirements; we manufacture to the
                combined specification where applicable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <StampBadge label="Hotel Guest Rooms" />
                <StampBadge label="Studios" />
                <StampBadge label="Meeting Rooms" />
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="relative aspect-[5/4] overflow-hidden bg-bone">
                <Image
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
                  alt="Hotel guest room entrance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
              eyebrow="Use cases"
              title="Where acoustic doors are specified"
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {useCases.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 70}
                className="border-t border-rule pt-6"
              >
                <h3 className="font-display text-xl text-espresso">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadSection
        source="acoustic-doors"
        defaultProjectType="Acoustic Door"
        title="Enquire about acoustic door sets"
        description="Share room type (hotel, studio, office), target acoustic performance if known, quantity, and location."
      />
    </>
  );
}
