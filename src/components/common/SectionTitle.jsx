import AnimatedSection from "./AnimatedSection.jsx";

/**
 * Consistent heading block used at the top of every homepage/page section.
 */
const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <AnimatedSection className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold tracking-wide uppercase px-3 py-1 rounded-full w-fit ${
            light ? "bg-white/10 text-primary-red-light" : "bg-primary-red/10 text-primary-red"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg ${light ? "text-white/70" : "text-text-secondary"}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionTitle;
