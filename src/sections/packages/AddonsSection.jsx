// "ভ্যালু-অ্যাডেড অ্যাড-অন্স" section — 4 optional extras with no fixed price yet
// (see src/data/addons.js), each linking to /contact for a quote.
import { Globe, Wifi, Home, Camera } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Badge from "../../components/common/Badge.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { addons } from "../../data/addons.js";

const icons = [Globe, Wifi, Home, Camera];

const AddonsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="bg-surface py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow={t("packagesPage.addons.eyebrow")}
          title={t("packagesPage.addons.title")}
          subtitle={t("packagesPage.addons.subtitle")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((addon, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={addon.id} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red">
                      <Icon size={22} />
                    </span>
                    <Badge tone="redSoft">{addon.badge[language]}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{addon.title[language]}</h3>
                  <p className="flex-1 text-sm text-text-secondary">{addon.description[language]}</p>
                  <Button to="/contact" variant="secondary" size="sm" className="w-full">
                    {t("packagesPage.addons.contactButton")}
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

export default AddonsSection;
