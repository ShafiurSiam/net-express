import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import ServicesSection from "../sections/services/ServicesSection.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const Services = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.services.title")}
        description={t("seo.services.description")}
        path="/services"
      />
      <PageHeader
        eyebrow={t("pageHeader.services.eyebrow")}
        title={t("pageHeader.services.title")}
        subtitle={t("pageHeader.services.subtitle")}
      />

      <ServicesSection />

      <CTASection />
    </>
  );
};

export default Services;
