import { Target, Eye, HeartHandshake } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import FeatureCard from "../components/cards/FeatureCard.jsx";
import StatsSection from "../sections/home/StatsSection.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { company } from "../config/company.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../i18n/translations.js";
import aboutHero from "../assets/images/about/about-hero.svg";

const icons = [Target, Eye, HeartHandshake];

const About = () => {
  const { language, t } = useLanguage();
  const values = translations.about.values.map((value, i) => ({
    icon: icons[i],
    title: value.title[language],
    description: value.description[language],
  }));

  return (
    <>
      <SEO
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        path="/about"
      />
      <PageHeader
        eyebrow={t("pageHeader.about.eyebrow")}
        title={t("pageHeader.about.title")}
        subtitle={company.shortDescription[language]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <img src={aboutHero} alt={t("about.imageAlt")} className="w-full rounded-2xl" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-text-primary">{t("about.journeyTitle")}</h2>
            <p className="text-text-secondary">
              {t("about.paragraph1", { companyName: company.name })}
            </p>
            <p className="text-text-secondary">{t("about.paragraph2")}</p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <FeatureCard key={value.title} {...value} delay={i * 0.08} />
          ))}
        </Container>
      </section>

      <StatsSection />
      <CTASection />
    </>
  );
};

export default About;
