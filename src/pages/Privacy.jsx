import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import LegalDocument from "../components/common/LegalDocument.jsx";
import { privacyContent } from "../data/legal.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO title={t("seo.privacy.title")} description={t("seo.privacy.description")} path="/privacy" />
      <PageHeader eyebrow={t("pageHeader.privacy.eyebrow")} title={t("pageHeader.privacy.title")} subtitle={t("pageHeader.privacy.subtitle")} />
      <LegalDocument content={privacyContent} />
    </>
  );
};

export default Privacy;
