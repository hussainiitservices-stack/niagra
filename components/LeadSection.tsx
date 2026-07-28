import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { StampBadge } from "@/components/StampBadge";
import { Reveal } from "@/components/Reveal";

type LeadSectionProps = {
  id?: string;
  title?: string;
  description?: string;
  defaultProjectType?: string;
  source?: string;
};

export function LeadSection({
  id = "quote",
  title = "Request a project quote",
  description = "Tell us the door type, rating, location, and approximate quantity. We respond with pricing guidance and a clear next step.",
  defaultProjectType = "",
  source = "lead-section",
}: LeadSectionProps) {
  return (
    <section id={id} className="bg-bone scroll-mt-28">
      <div className="container-site py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          <Reveal>
            <p className="eyebrow mb-3">Project enquiry</p>
            <h2 className="text-3xl md:text-4xl text-heading">{title}</h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StampBadge label="Civil Defense Approved" />
              <StampBadge label="30 Years in Business" />
              <StampBadge label="UAE Manufacturing" />
            </div>
            <p className="mt-8 text-sm text-muted">
              Prefer to talk now?{" "}
              <Link href="/contact-us" className="link-draw text-heading font-medium">
                Contact details
              </Link>
            </p>
          </Reveal>
          <Reveal delayMs={100} className="bg-white border border-rule rounded-3xl p-6 md:p-8 surface-card !transform-none hover:!translate-y-0 mobile-form-panel">
            <QuoteForm
              source={source}
              defaultProjectType={defaultProjectType}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
