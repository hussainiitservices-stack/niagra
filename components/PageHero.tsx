import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctaHref = "/contact-us#quote",
  ctaLabel = "Request a Quote",
}: PageHeroProps) {
  const showCta = Boolean(ctaLabel);

  return (
    <section className="relative overflow-hidden bg-ink text-white mobile-page-hero md:min-h-[58vh]">
      <div className="absolute inset-0 hero-image-reveal">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover ken-burns opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-ink via-ink/65 to-transparent md:hidden" />
      </div>
      <div
        className="hero-ornament hidden md:block"
        style={{ width: 140, height: 140, right: "10%", top: "28%" }}
        aria-hidden="true"
      />
      <div className="container-site relative z-10 flex flex-col justify-end pb-14 pt-28 mobile-page-hero-inner md:min-h-[58vh] md:pb-16">
        {eyebrow ? (
          <p className="eyebrow text-brass mb-4 hero-rise">
            <span className="eyebrow-line">{eyebrow}</span>
          </p>
        ) : null}
        <h1
          className="max-w-3xl text-[2.15rem] leading-[1.1] md:text-5xl lg:text-6xl text-white hero-rise"
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="mt-4 max-w-xl text-[0.95rem] md:mt-5 md:text-lg text-white/80 leading-relaxed hero-rise"
            style={{ animationDelay: "0.3s" }}
          >
            {description}
          </p>
        ) : null}
        {showCta ? (
          <div className="mt-7 hero-rise md:mt-8" style={{ animationDelay: "0.45s" }}>
            <Link href={ctaHref!} className="btn btn-brass btn-shine w-full sm:w-auto">
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
