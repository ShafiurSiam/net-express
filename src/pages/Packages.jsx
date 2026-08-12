import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PackageCard from "../components/cards/PackageCard.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { packages, packageCategories } from "../data/packages.js";
import { useConnectionRequest } from "../context/ConnectionRequestContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const Packages = () => {
  const { openRequest } = useConnectionRequest();
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.packages.title")}
        description={t("seo.packages.description")}
        path="/packages"
      />
      <PageHeader
        eyebrow={t("pageHeader.packages.eyebrow")}
        title={t("pageHeader.packages.title")}
        subtitle={t("pageHeader.packages.subtitle")}
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-16">
          {packageCategories.map((cat) => {
            const catPackages = packages.filter((pkg) => pkg.category === cat.id);
            return (
              <div key={cat.id} className="flex flex-col gap-10">
                <SectionTitle title={cat.label[language]} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {catPackages.map((pkg, i) => (
                    <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.08} onSelect={(p) => openRequest(p.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default Packages;
