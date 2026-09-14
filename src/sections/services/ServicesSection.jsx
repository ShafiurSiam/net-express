// Grid of value-added service cards for the standalone /services page (see
// src/data/services.js), each linking to /contact for a quote. The page-level
// <PageHeader> (in src/pages/Services.jsx) carries the eyebrow/title/subtitle,
// so this section renders only the card grid.
import { ArrowRight, Globe, Wifi, Home, Camera, Code2 } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { services } from "../../data/services.js";

const icons = [Globe, Wifi, Home, Camera, Code2];

// One subtle, token-only accent per card (corner-glow corner + icon-chip gradient
// direction) so the row doesn't read as identical clones. Cycled via `i %
// accents.length`, so a 5th card reuses the first accent.
const accents = [
  { glow: "-right-10 -top-10", chip: "from-primary-red to-primary-red-dark" },
  { glow: "-left-10 -top-10", chip: "from-primary-red-light to-primary-red" },
  { glow: "-right-10 -bottom-10", chip: "from-primary-red-dark to-primary-red" },
  { glow: "-left-10 -bottom-10", chip: "from-primary-red to-primary-red-light" },
];

const ServicesSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary-red/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary-red/5 blur-3xl"
      />

      <Container className="relative">
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, i) => {
            const Icon = icons[i];
            const accent = accents[i % accents.length];
            return (
              <AnimatedSection
                key={service.id}
                delay={i * 0.06}
                className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="group relative isolate flex h-full w-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-card-hover">
                  {/* Ambient red-tinted corner wash; intensifies on hover */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute ${accent.glow} h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.12),transparent_70%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Gradient border-glow, only visible on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary-red), var(--color-primary-red-light), var(--color-primary-red))",
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.chip} text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(23,21,26,0.25),0_8px_18px_-6px_rgba(200,16,46,0.5)] ring-1 ring-primary-red-dark/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon size={24} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-red/15 to-primary-red/5 px-3 py-1 text-xs font-semibold text-primary-red-dark ring-1 ring-primary-red/20">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-red" />
                      {service.badge[language]}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col gap-2">
                    <h3 className="text-lg font-bold text-text-primary">{service.title[language]}</h3>
                    <p className="flex-1 text-sm text-text-secondary">{service.description[language]}</p>
                  </div>

                  <Button
                    to="/contact"
                    variant="secondary"
                    size="sm"
                    icon={ArrowRight}
                    className="relative z-10 w-full hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-card-hover"
                  >
                    {t("servicesPage.contactButton")}
                  </Button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
