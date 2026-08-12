import { Home, WifiOff } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { formatNumber } from "../i18n/numerals.js";

const NotFound = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO title={t("seo.notFound.title")} description={t("seo.notFound.description")} path="/404" />
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-surface to-white px-5 py-32">
        <Container className="flex max-w-lg flex-col items-center gap-6 text-center">
          <AnimatedSection className="flex flex-col items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-red/10 text-primary-red">
              <WifiOff size={36} />
            </div>
            <span className="text-7xl font-extrabold text-primary-red">{formatNumber(404, language)}</span>
            <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">{t("notFound.title")}</h1>
            <p className="text-text-secondary">{t("notFound.body")}</p>
            <Button to="/" icon={Home} iconPosition="left" size="lg">
              {t("notFound.backHome")}
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
