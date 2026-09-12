// Renders the "Our Partners" trust section — real upstream/IIG, peering,
// technology-vendor, and NTTN partners, grouped into filterable tabs. See
// src/data/partners.js for the partner list, categories, and how to add a
// real logo image later.
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Globe, Share2, Cpu, GitFork } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import PartnerCard from "../../components/cards/PartnerCard.jsx";
import { partners, partnerCategories } from "../../data/partners.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const categoryIcons = { Globe, Share2, Cpu, GitFork };

// Icon-only logos (no readable company name baked into the mark) that need
// the name printed as a caption underneath.
const CAPTION_PARTNER_IDS = new Set(["facebook"]);

const gridClassFor = (count) =>
  count <= 2
    ? "mx-auto grid w-full max-w-xl grid-cols-1 gap-5 sm:grid-cols-2"
    : "mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3";

const PartnersSection = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const categories = partnerCategories.filter((cat) => partners.some((p) => p.categories.includes(cat.id)));
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);

  const visiblePartners = partners.filter((p) => p.categories.includes(activeCategory));

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % categories.length;
    else if (e.key === "ArrowLeft") nextIndex = (index - 1 + categories.length) % categories.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = categories.length - 1;
    if (nextIndex === null) return;

    e.preventDefault();
    setActiveCategory(categories[nextIndex].id);
    document.getElementById(`partner-tab-${categories[nextIndex].id}`)?.focus();
  };

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <AnimatedSection className="flex flex-col items-center gap-4 text-center sm:items-stretch sm:text-left">
          <span className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-primary-red/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary-red sm:mx-0">
            <ShieldCheck size={16} aria-hidden="true" />
            {t("home.partnersSection.eyebrow")}
          </span>

          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-end sm:gap-8">
            <h2 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
              {t("home.partnersSection.title")}
            </h2>
            <p className="max-w-md text-base text-text-secondary sm:text-right sm:text-lg">
              {t("home.partnersSection.subtitle")}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex justify-center">
          <div
            role="tablist"
            aria-label={t("home.partnersSection.tabsAriaLabel")}
            className="-mx-5 flex max-w-full gap-1 overflow-x-auto rounded-full bg-surface p-1.5 px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-1.5"
          >
            {categories.map((cat, index) => {
              const Icon = categoryIcons[cat.icon];
              const isActive = cat.id === activeCategory;
              const count = partners.filter((p) => p.categories.includes(cat.id)).length;

              return (
                <button
                  key={cat.id}
                  id={`partner-tab-${cat.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="partner-tab-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCategory(cat.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-red focus-visible:ring-offset-2 ${
                    isActive ? "bg-white text-primary-red shadow-card" : "text-text-secondary hover:text-primary-red"
                  }`}
                >
                  {Icon && <Icon size={16} aria-hidden="true" />}
                  {cat.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      isActive ? "bg-primary-red/10 text-primary-red" : "bg-border/70 text-text-secondary"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <div id="partner-tab-panel" role="tabpanel" aria-labelledby={`partner-tab-${activeCategory}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={gridClassFor(visiblePartners.length)}
            >
              {visiblePartners.map((partner, i) => (
                <PartnerCard
                  key={partner.id}
                  name={partner.name}
                  logoSrc={partner.logoSrc}
                  showCaption={CAPTION_PARTNER_IDS.has(partner.id)}
                  delay={i * 0.06}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;
