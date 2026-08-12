import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import { company } from "../config/company.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../i18n/translations.js";

const Terms = () => {
  const { language, t } = useLanguage();
  const sections = translations.terms.sections.map((section) => ({
    title: section.title[language],
    body: section.body[language].replaceAll("{companyName}", company.name),
  }));

  return (
    <>
      <SEO title={t("seo.terms.title")} description={t("seo.terms.description")} path="/terms" />
      <PageHeader eyebrow={t("pageHeader.terms.eyebrow")} title={t("pageHeader.terms.title")} subtitle={t("pageHeader.terms.subtitle")} />

      <section className="py-14 sm:py-20">
        <Container className="mx-auto flex max-w-3xl flex-col gap-8">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.05} className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-text-primary">{section.title}</h2>
              <p className="text-text-secondary">{section.body}</p>
            </AnimatedSection>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Terms;
