import AnimatedSection from "../common/AnimatedSection.jsx";

// Renders a partner's real logo image at a consistent max-height so
// differently-sized source files don't make the grid look uneven, or a
// styled text wordmark when no logoSrc is set yet (see src/data/partners.js).
// `showCaption` prints the name below an icon-only logo (e.g. Facebook's
// glyph mark) that wouldn't otherwise read clearly on its own.
const PartnerCard = ({ name, logoSrc, showCaption = false, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="group flex h-full min-h-[120px] flex-col items-center justify-center gap-2 rounded-xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/30 hover:shadow-card-hover">
        {logoSrc ? (
          <img src={logoSrc} alt={name} className="max-h-10 w-auto max-w-[80%] object-contain sm:max-h-12" />
        ) : (
          <span className="font-heading text-lg font-bold tracking-tight text-text-primary sm:text-xl">
            {name}
          </span>
        )}
        {showCaption && logoSrc && <span className="text-xs font-medium text-text-secondary">{name}</span>}
      </div>
    </AnimatedSection>
  );
};

export default PartnerCard;
