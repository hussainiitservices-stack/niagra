import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadSection } from "@/components/LeadSection";
import { MorphText } from "@/components/MorphText";
import { OrbitCards } from "@/components/OrbitCards";
import { ProcessSection } from "@/components/ProcessSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StampBadge } from "@/components/StampBadge";
import { StatsBand } from "@/components/StatsBand";
import { SITE } from "@/lib/constants";
import {
  blogPosts,
  faqs,
  fireRatings,
  industries,
  services,
  whyChoose,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink mobile-hero md:min-h-[92vh]">
        <div className="absolute inset-0 hero-image-reveal">
          <Image
            src="/brand/banner2.webp"
            alt="Wooden door craftsmanship by Niagra"
            fill
            priority
            quality={75}
            className="object-cover ken-burns opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55 md:bg-ink/55" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink via-ink/70 to-transparent md:hidden" />
        </div>

        <div
          className="hero-ornament hidden md:block"
          style={{ width: 180, height: 180, right: "8%", top: "22%" }}
          aria-hidden="true"
        />
        <div
          className="hero-ornament hidden md:block"
          style={{
            width: 90,
            height: 90,
            right: "18%",
            bottom: "18%",
            animationDelay: "1.2s",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10 flex flex-col justify-center py-24 mobile-hero-inner md:min-h-[92vh] md:justify-center md:py-24 md:pb-24">
          <p
            className="mobile-hero-brand hero-rise md:hidden"
            style={{ animationDelay: "0.05s" }}
          >
            Niagra<span>.</span>
          </p>
          <p
            className="eyebrow text-brass mb-4 hero-rise"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="eyebrow-line">Welcome to Niagra International Wood Industry LLC</span>
          </p>
          <h1
            className="max-w-4xl font-display text-[2.15rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-white hero-rise"
            style={{ animationDelay: "0.28s" }}
          >
            <MorphText />
          </h1>
          <p
            className="mt-5 max-w-xl text-[0.95rem] md:mt-6 md:text-lg text-white/80 leading-relaxed hero-rise"
            style={{ animationDelay: "0.48s" }}
          >
            Civil Defence approved wooden fire doors (30–120 min), acoustic sets, and
            interior joinery — manufactured in Sharjah for hotels, hospitals, towers,
            and homes across the UAE.
          </p>
          <div
            className="mt-8 mobile-hero-ctas md:mt-10 md:flex md:flex-wrap md:gap-3 hero-rise"
            style={{ animationDelay: "0.65s" }}
          >
            <Link href="/contact-us#quote" className="btn btn-brass btn-shine">
              Get a Free Quote
            </Link>
            <a href={SITE.phoneHref} className="btn btn-outline-light btn-shine">
              Call {SITE.phone}
            </a>
          </div>
          <div
            className="mt-6 flex flex-wrap gap-2 hero-rise md:mt-8"
            style={{ animationDelay: "0.8s" }}
          >
            <StampBadge label="Civil Defence" className="!text-brass !border-brass !bg-transparent" />
            <StampBadge label="FD30–FD120" className="!text-brass !border-brass !bg-transparent" />
            <StampBadge label="ISO Aligned" className="!text-brass !border-brass !bg-transparent" />
          </div>
        </div>

        <div className="mobile-hero-scroll absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hero-rise md:block" style={{ animationDelay: "1s" }}>
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
            <span className="block h-8 w-px bg-brass float-soft" />
          </div>
        </div>
      </section>

      <section className="bg-brass shimmer relative overflow-hidden">
        <div className="container-site py-10 md:py-12">
          <Reveal className="mobile-experience md:flex md:flex-row md:items-end md:justify-between md:gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink/70 font-semibold">
                Experience
              </p>
              <p className="font-display text-ink mt-1 mobile-experience-number md:text-6xl">
                <CountUp value={30} suffix="+" /> Years
              </p>
              <p className="mt-3 text-sm text-ink/75 max-w-xs md:hidden">
                Sharjah manufacturing · Civil Defence approved · UAE projects
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <StampBadge label="Civil Defense" className="stamp-on-brass float-soft" />
              <StampBadge
                label="Fire Rated"
                className="stamp-on-brass float-soft"
                style={{ animationDelay: "0.4s" }}
              />
              <StampBadge
                label="Acoustic"
                className="stamp-on-brass float-soft"
                style={{ animationDelay: "0.8s" }}
              />
              <StampBadge
                label="Joinery"
                className="stamp-on-brass float-soft"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-heading text-white/70 py-3 overflow-hidden border-y border-white/10">
        <div className="marquee">
          <div className="marquee-track font-display text-sm tracking-wide">
            {[
              "Fire Rated Doors",
              "Acoustic Doors",
              "Civil Defense Approved",
              "Interior Joinery",
              "30 Years of Craftsmanship",
              "UAE Manufacturing",
              "Fire Rated Doors",
              "Acoustic Doors",
              "Civil Defense Approved",
              "Interior Joinery",
              "30 Years of Craftsmanship",
              "UAE Manufacturing",
            ].map((item, i) => (
              <span key={`${item}-${i}`} className="inline-flex items-center gap-2.5">
                <span className="text-brass">◆</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <StatsBand />

      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal variant="left">
              <div className="img-zoom relative aspect-[16/11] md:aspect-[4/5] bg-bone shadow-[0_24px_60px_rgba(64,50,38,0.12)]">
                <Image
                  src="/brand/about.jpg"
                  alt="Niagra craftsmanship and joinery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal variant="right" delayMs={120} className="line-grow pl-5">
              <SectionHeading
                eyebrow="About Us"
                title="A Journey of Excellence"
                description="Niagra International Wood Industry LLC is a trusted Fire-rated Door Manufacturer in UAE with nearly 30 years of experience. We make doors that are strong, safe, and stylish, and all our products meet international standards and civil defense approvals."
              />
              <div className="mt-5 space-y-4 text-muted leading-relaxed">
                <p>
                  Our fire-rated doors are built to stop the spread of fire for 60, 90, or
                  even 120 minutes, helping protect people and property. We supply wooden
                  fire-rated doors, acoustic doors, and soundproof doors for hotels,
                  offices, hospitals, and homes.
                </p>
                <p>
                  Along with doors, Niagra also provides joinery and interior works —
                  wardrobes, kitchens, cabinets, partitions, ceilings, flooring, and
                  decoration — trusted by contractors, architects, and property developers
                  across the UAE.
                </p>
              </div>
              <Link href="/about-us" className="btn btn-primary btn-shine mt-8">
                About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-16 md:py-24">
          <Reveal variant="blur" className="section-accent pt-4">
            <SectionHeading
              eyebrow="What we do"
              title="What we offer for you"
              description="Fire-rated doors, fireproof doors, and acoustic doors — manufactured and finished for UAE projects."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-10 mobile-snap mobile-snap-wide md:mt-12 md:grid md:gap-6 md:grid-cols-3 md:overflow-visible md:scroll-auto md:mx-0 md:px-0 md:flex-none">
            {services.map((service, i) => (
              <Reveal
                key={service.href}
                delayMs={i * 120}
                variant="scale"
                as="article"
                className="mobile-service-card md:flex-none"
              >
                <Link href={service.href} className="surface-card group block h-full">
                  <div className="img-zoom !rounded-none relative aspect-[4/5] bg-ink">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 78vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="eyebrow mb-2">Doors</p>
                    <h3 className="font-display text-xl text-heading group-hover:text-brass transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {service.short}
                    </p>
                    <span className="link-draw mt-4 inline-block text-sm font-semibold text-heading">
                      Learn More
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center" delayMs={200}>
            <Link href="/services" className="btn btn-dark btn-shine">
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-y border-rule">
        <div className="container-site py-14 md:py-16">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow="Industries"
              title="Built for the sectors that specify safety first"
              description="The same manufacturing standard — tailored to hospitality, healthcare, commercial, and residential programmes."
            />
          </Reveal>
          <div className="mobile-snap mobile-snap-tight md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:overflow-visible md:mx-0 md:px-0">
            {industries.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 70}
                className="rounded-2xl border border-rule bg-bone p-5 md:p-6 transition-all hover:border-brass hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(187,154,101,0.15)]"
              >
                <p className="font-display text-lg md:text-xl text-heading">{item.title}</p>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-16 md:py-24">
          <Reveal variant="blur" className="section-accent pt-4">
            <SectionHeading
              eyebrow="Fire ratings"
              title="FD30 · FD60 · FD90 · FD120"
              description="Clear ratings for consultants — manufacture to the minutes your fire strategy requires."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-10 mobile-snap mobile-snap-tight md:mt-12 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:overflow-visible md:mx-0 md:px-0">
            {fireRatings.map((rating, i) => (
              <Reveal
                key={rating.code}
                delayMs={i * 70}
                className="rounded-2xl border border-rule bg-white p-5 md:p-6 text-center transition-all hover:border-brass hover:-translate-y-1"
              >
                <p className="font-display text-3xl md:text-4xl text-brass">{rating.code}</p>
                <p className="mt-2 text-sm font-semibold text-heading">
                  {rating.minutes} minutes
                </p>
                <p className="mt-3 text-xs text-muted leading-relaxed">{rating.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link href="/fire-rated-doors-uae" className="btn btn-primary btn-shine">
              Explore Fire Rated Doors
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white overflow-visible">
        <div className="container-site py-16 md:py-24 overflow-visible">
          <Reveal variant="blur" className="section-accent pt-4">
            <SectionHeading
              eyebrow="Capabilities"
              title="Everything orbiting one workshop"
              description="Fire doors, acoustic sets, certifications, and joinery — coordinated from Sharjah for UAE projects."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal variant="scale" delayMs={120} className="mt-10 md:mt-14 overflow-visible">
            <OrbitCards />
          </Reveal>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-16 md:py-24">
          <Reveal variant="blur" className="section-accent pt-4">
            <SectionHeading
              eyebrow="Why Us"
              title="Why Choose Niagra"
              description="Trusted delivery for hotels, hospitals, commercial towers, and homes — more than a template claim."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyChoose.slice(0, 3).map((item, i) => (
              <Reveal key={item.title} delayMs={i * 100} variant="up">
                <div className="feature-tile h-full">
                  <div className="feature-index mb-5">0{i + 1}</div>
                  <h3 className="font-display text-xl text-heading">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Answers consultants ask before they specify"
                description="Plain facts on ratings, site modifications, and documentation — the questions that win trust on UAE projects."
              />
              <Link href="/contact-us#quote" className="btn btn-dark btn-shine mt-8">
                Still unsure? Get a quote
              </Link>
            </Reveal>
            <Reveal delayMs={100}>
              <FaqAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-heading text-white">
        <div className="absolute inset-0 opacity-30 ken-burns">
          <Image
            src="/brand/inner.webp"
            alt=""
            fill
            quality={65}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container-site relative z-10 py-16 md:py-20 text-center">
          <Reveal variant="scale">
            <p className="eyebrow text-brass mb-3">Need certified fire doors?</p>
            <h2 className="font-display text-3xl md:text-4xl text-white max-w-3xl mx-auto">
              Civil Defence approved · UAE manufacturing · serving projects across the
              Emirates
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us#quote" className="btn btn-brass btn-shine">
                Get a Free Quote
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-shine"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <LeadSection source="homepage-lead" />

      <section className="bg-bone">
        <div className="container-site py-16 md:py-24">
          <Reveal
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between section-accent pt-4"
            variant="blur"
          >
            <SectionHeading
              eyebrow="Blogs"
              title="Latest Posts & Articles"
              description="Practical notes on fire-rated and acoustic doors for UAE projects."
            />
            <Link href="/blog" className="link-draw shrink-0 text-sm font-semibold text-heading">
              View all
            </Link>
          </Reveal>
          <div className="mt-10 mobile-snap md:mt-12 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:mx-0 md:px-0">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delayMs={i * 90} variant="up" as="article">
                <Link href={`/blog/${post.slug}`} className="surface-card group block h-full">
                  <div className="img-zoom !rounded-none relative aspect-[16/11] bg-rule">
                    <Image
                      src={`/brand/blog${(i % 4) + 1}.webp`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 78vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="eyebrow mb-2">{post.category}</p>
                    <h3 className="font-display text-base text-heading group-hover:text-brass transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <time
                      dateTime={post.date}
                      className="mt-3 block text-xs uppercase tracking-wider text-muted"
                    >
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
