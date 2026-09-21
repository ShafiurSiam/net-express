// Page header for /packages: breadcrumb + headline + 3 action buttons, replacing
// the generic <PageHeader> used by other interior pages so this page can carry
// its own breadcrumb/button row without changing PageHeader.jsx (shared by
// About/Contact/Coverage/etc.).
import { Link } from "react-router-dom";
import { ChevronRight, FileText, LayoutGrid, Building2 } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { site } from "../../config/site.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const PackagesPageHeader = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white page-top pb-14">
      <Container>
        <AnimatedSection className="flex max-w-3xl flex-col gap-4">
          <nav aria-label={t("packagesPage.breadcrumb.ariaLabel")} className="flex items-center gap-1.5 text-sm text-text-secondary">
            <Link to="/" className="transition-colors hover:text-primary-red">
              {t("nav.home")}
            </Link>
            <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
            <span className="font-semibold text-primary-red">{t("nav.packages")}</span>
          </nav>

          <span className="w-fit rounded-full bg-primary-red/10 px-3 py-1 text-sm font-semibold text-primary-red">
            {t("pageHeader.packages.eyebrow")}
          </span>
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">
            {t("packagesPage.header.title")}
          </h1>
          <p className="text-base text-text-secondary sm:text-lg">{t("packagesPage.header.subtitle")}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap gap-3">
          {/* Placeholder link — swap once the real BTRC tariff PDF is hosted (see site.btrcTariffPdfUrl / VITE_BTRC_TARIFF_PDF_URL) */}
          <Button href={site.btrcTariffPdfUrl} target="_blank" rel="noopener noreferrer" variant="secondary" icon={FileText} iconPosition="left">
            {t("packagesPage.header.tariffButton")}
          </Button>
          <Button href="#package-tabs" variant="primary" icon={LayoutGrid} iconPosition="left">
            {t("packagesPage.header.viewAllButton")}
          </Button>
          <Button href="#sme-corporate" variant="dark" icon={Building2} iconPosition="left">
            {t("packagesPage.header.corporateButton")}
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default PackagesPageHeader;
