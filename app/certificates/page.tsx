import type { Metadata } from "next";
import { CatalogGateForm } from "@/components/CatalogGateForm";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";
import { certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certificates & Approvals",
  description:
    "Civil defense approvals, fire ratings, and quality standards for Niagra fire-rated and acoustic wooden doors in the UAE.",
  alternates: { canonical: "/certificates" },
};

const certificateCards = [
  {
    title: "UAE Civil Defense",
    text: "Fire-rated door packages prepared for civil defense review with rating documentation and approved construction details.",
  },
  {
    title: "International safety standards",
    text: "Manufacturing aligned with recognised fire door and acoustic performance standards used on UAE projects.",
  },
  {
    title: "Quality systems",
    text: "Process controls from material selection through finishing and site installation for consistent leaf and frame quality.",
  },
  {
    title: "Rating plates & documentation",
    text: "Each fire door set is identified for the rating specified — the same stamped language used across our site.",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificates"
        title="Approvals that sit next to every quote."
        description="Compliance is a purchase driver in this industry. We keep certifications visible — on this page and beside every enquiry form."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
        imageAlt="Documentation and compliance materials"
      />

      <section className="bg-ivory">
        <div className="container-site py-12 md:py-16">
          <Reveal className="flex flex-wrap gap-3 md:gap-4">
            {certifications.map((item) => (
              <StampBadge key={item.id} label={item.label} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Trust"
              title="What we document for project teams"
              description="Replace placeholder cards with scanned certificates and PDF downloads when assets are ready."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certificateCards.map((card, i) => (
              <Reveal
                key={card.title}
                delayMs={i * 70}
                className="border border-rule bg-ivory p-6 md:p-8"
              >
                <StampBadge label="Approved" />
                <h3 className="mt-5 font-display text-xl text-espresso">{card.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{card.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-20">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Catalog"
                title="Product catalog & company profile"
                description="Gated downloads for tender packs. Connect email delivery and CRM on go-live."
              />
            </div>
            <div className="border border-rule bg-bone p-6 md:p-8">
              <CatalogGateForm
                resource="product-catalog"
                title="Download product catalog"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <LeadSection source="certificates-page" />
    </>
  );
}
