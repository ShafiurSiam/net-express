import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import OfferCard from "../components/cards/OfferCard.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { offers } from "../data/offers.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const Offers = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.offers.title")}
        description={t("seo.offers.description")}
        path="/offers"
      />
      <PageHeader
        eyebrow={t("pageHeader.offers.eyebrow")}
        title={t("pageHeader.offers.title")}
        subtitle={t("pageHeader.offers.subtitle")}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
            {offers.map((offer, i) => (
              <OfferCard key={offer.id} offer={offer} delay={i * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default Offers;
