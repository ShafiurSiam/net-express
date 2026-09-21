import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import LegalDocument from "../components/common/LegalDocument.jsx";
import { termsContent } from "../data/legal.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO title={t("seo.terms.title")} description={t("seo.terms.description")} path="/terms" />
      <PageHeader eyebrow={t("pageHeader.terms.eyebrow")} title={t("pageHeader.terms.title")} subtitle={t("pageHeader.terms.subtitle")} />
      <LegalDocument content={termsContent} />
    </>
  );
};

export default Terms;
