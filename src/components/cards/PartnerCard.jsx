import AnimatedSection from "../common/AnimatedSection.jsx";

// Renders a partner's real logo (once logoSrc is set in src/data/partners.js)
// or, until then, a styled text wordmark of its name as a fallback.
const PartnerCard = ({ name, logoSrc, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="group flex h-full min-h-[120px] items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/30 hover:shadow-card-hover">
        {logoSrc ? (
          <img src={logoSrc} alt={name} className="max-h-12 w-auto object-contain" />
        ) : (
          <span className="font-heading text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
            {name}
          </span>
        )}
      </div>
    </AnimatedSection>
  );
};

export default PartnerCard;
