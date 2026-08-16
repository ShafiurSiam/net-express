// Renders the homepage preview of Home internet packages, with a link to the full /packages page.
import { ArrowRight } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import PackageCard from "../../components/cards/PackageCard.jsx";
import { packages } from "../../data/packages.js";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const PackagesSection = () => {
  const { openRequest } = useConnectionRequest();
  const { t } = useLanguage();
  const homePackages = packages.filter((pkg) => pkg.category === "home");

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={t("home.packagesSection.eyebrow")}
          title={t("home.packagesSection.title")}
          subtitle={t("home.packagesSection.subtitle")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homePackages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.08} onSelect={(p) => openRequest(p.id)} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/packages" variant="secondary" icon={ArrowRight}>
            {t("home.packagesSection.viewAll")}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;
