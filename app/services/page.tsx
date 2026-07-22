import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Fire-rated wooden doors, acoustic doors, and interior joinery & fit-out from Niagra International Wood Industry LLC in the UAE.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Manufactured doors and joinery for UAE buildings."
        description="Three product families — fire-rated, acoustic, and interior fit-out — with project quoting from the same team."
        image="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1600&q=80"
        imageAlt="Interior joinery and cabinetry"
      />

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24 space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <Reveal key={service.href}>
              <article
                className={`grid gap-8 lg:grid-cols-2 lg:gap-14 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="img-zoom relative aspect-[5/4] bg-bone">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <SectionHeading
                    eyebrow={`0${index + 1}`}
                    title={service.title}
                    description={service.description}
                  />
                  <Link href={service.href} className="btn btn-primary mt-8">
                    View {service.title}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <LeadSection source="services-overview" />
    </>
  );
}
