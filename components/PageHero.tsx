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
    <section className="relative min-h-[52vh] md:min-h-[58vh] overflow-hidden bg-ink text-white">
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
      </div>
      <div
        className="hero-ornament hidden md:block"
        style={{ width: 140, height: 140, right: "10%", top: "28%" }}
        aria-hidden="true"
      />
      <div className="container-site relative z-10 flex min-h-[52vh] md:min-h-[58vh] flex-col justify-end pb-14 pt-28 md:pb-16">
        {eyebrow ? (
          <p className="eyebrow text-brass mb-4 hero-rise">
            <span className="eyebrow-line">{eyebrow}</span>
          </p>
        ) : null}
        <h1
          className="max-w-3xl text-4xl md:text-5xl lg:text-6xl text-white hero-rise"
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="mt-5 max-w-xl text-base md:text-lg text-white/80 leading-relaxed hero-rise"
            style={{ animationDelay: "0.3s" }}
          >
            {description}
          </p>
        ) : null}
        {showCta ? (
          <div className="mt-8 hero-rise" style={{ animationDelay: "0.45s" }}>
            <Link href={ctaHref!} className="btn btn-brass btn-shine">
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
