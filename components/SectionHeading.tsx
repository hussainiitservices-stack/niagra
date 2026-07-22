type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className={`eyebrow mb-3 ${light ? "text-brass" : ""}`}>
          <span className="eyebrow-line">{eyebrow}</span>
        </p>
      ) : null}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-heading"}`}>
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
