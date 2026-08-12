import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import OfferCard from "../../components/cards/OfferCard.jsx";
import { offers } from "../../data/offers.js";

const OffersSection = () => {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="বিশেষ অফার"
          title="চলমান বিশেষ অফারসমূহ"
          subtitle="সীমিত সময়ের জন্য উপলব্ধ চমৎকার সব সুবিধা।"
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
