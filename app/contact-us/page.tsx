import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a quote from Niagra International Wood Industry LLC — fire-rated doors, acoustic doors, and joinery in Sharjah, UAE.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the manufacturing team."
        description="Call, WhatsApp, or send a structured quote request. Phone and WhatsApp remain the fastest channels for UAE site teams."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        imageAlt="Commercial project environment"
        ctaLabel=""
      />

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Reach us"
                title="Sharjah workshop. UAE-wide delivery."
              />
              <ul className="mt-8 space-y-5 text-muted">
                <li>
                  <p className="text-xs uppercase tracking-[0.14em] text-brass-dark mb-1">
                    Address
                  </p>
                  <p>{SITE.address}</p>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.14em] text-brass-dark mb-1">
                    Email
                  </p>
                  <a href={`mailto:${SITE.email}`} className="link-draw text-espresso">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.14em] text-brass-dark mb-1">
                    Phone
                  </p>
                  <a href={SITE.phoneHref} className="link-draw text-espresso">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.14em] text-brass-dark mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-espresso"
                  >
                    {SITE.whatsapp}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.14em] text-brass-dark mb-1">
                    Mobile
                  </p>
                  <a href={SITE.mobileHref} className="link-draw text-espresso">
                    {SITE.mobile}
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <StampBadge label="30 Years" />
                <StampBadge label="Civil Defense" />
                <StampBadge label="FD60–120" />
              </div>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brass mt-8"
              >
                Message on WhatsApp
              </a>
            </Reveal>

            <div id="quote" className="scroll-mt-32">
              <Reveal delayMs={100} className="border border-rule bg-bone p-6 md:p-8">
                <h2 className="font-display text-2xl text-espresso mb-2">Request a Quote</h2>
                <p className="text-sm text-muted mb-6">
                  Structured fields for sales follow-up. Connect this form to email or CRM
                  before production launch.
                </p>
                <QuoteForm source="contact-page" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
