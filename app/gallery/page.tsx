import type { Metadata } from "next";
import Image from "next/image";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photography of Niagra fire-rated doors, acoustic doors, joinery details, and finished interiors.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Materials, edges, hardware, and finished rooms."
        description="A visual record of craftsmanship — doors, joinery, and detail shots."
        image="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1600&q=80"
        imageAlt="Wood finish and interior detail"
        ctaLabel="Request a Quote"
      />

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryItems.map((item, i) => (
              <Reveal key={item.title} delayMs={(i % 3) * 60} className="break-inside-avoid">
                <figure className="img-zoom group relative overflow-hidden bg-bone">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-espresso/85 px-4 py-3 text-ivory opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.14em] text-brass">
                      {item.category}
                    </p>
                    <p className="mt-1 font-display text-lg">{item.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadSection source="gallery-page" />
    </>
  );
}
