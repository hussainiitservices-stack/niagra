import type { Metadata } from "next";
import Image from "next/image";
import { LeadSection } from "@/components/LeadSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Niagra project case studies across hospitality, healthcare, commercial, and residential sectors in the UAE.",
  alternates: { canonical: "/projects" },
};

const sectors = ["Hospitality", "Healthcare", "Commercial", "Residential"] as const;

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Case studies by sector — with scope, not just photos."
        description="Hospitality, healthcare, commercial, and residential packages across the Emirates."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
        imageAlt="Hospitality project interior"
      />

      <section className="bg-ivory">
        <div className="container-site py-10 md:py-12">
          <Reveal className="flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <StampBadge key={sector} label={sector} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Outcomes that consultants can cite"
              description="Each entry states sector, location, and a concrete scope line."
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delayMs={i * 70} as="article">
                <div className="img-zoom relative aspect-[16/10] bg-bone">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">{project.sector}</p>
                    <h2 className="font-display text-2xl text-espresso">{project.title}</h2>
                    <p className="mt-2 text-muted">{project.outcome}</p>
                  </div>
                  <StampBadge label={project.location} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadSection
        source="projects-page"
        title="Discuss a similar package"
        description="Reference a sector and approximate quantity. We will advise ratings, lead time, and documentation."
      />
    </>
  );
}
