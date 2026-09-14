// Renders the promotional offers grid on the homepage, sourced from src/data/offers.js.
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import OfferCard from "../../components/cards/OfferCard.jsx";
import { offers } from "../../data/offers.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const OffersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-red/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary-red/5 blur-3xl"
      />
      <Container className="relative flex flex-col gap-12">
        <SectionTitle
          eyebrow={t("home.offersSection.eyebrow")}
          title={t("home.offersSection.title")}
          subtitle={t("home.offersSection.subtitle")}
        />

        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OffersSection;
