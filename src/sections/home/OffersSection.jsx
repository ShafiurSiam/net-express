// Renders the promotional offers grid on the homepage, sourced from src/data/offers.js.
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import OfferCard from "../../components/cards/OfferCard.jsx";
import { offers } from "../../data/offers.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const OffersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={t("home.offersSection.eyebrow")}
          title={t("home.offersSection.title")}
          subtitle={t("home.offersSection.subtitle")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OffersSection;
