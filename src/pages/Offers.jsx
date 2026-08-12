import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import OfferCard from "../components/cards/OfferCard.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { offers } from "../data/offers.js";

const Offers = () => {
  return (
    <>
      <SEO
        title="বিশেষ অফার"
        description="Net Express এর চলমান সকল বিশেষ অফার ও প্রমোশন দেখুন।"
        path="/offers"
      />
      <PageHeader eyebrow="অফার" title="চলমান বিশেষ অফারসমূহ" subtitle="সীমিত সময়ের জন্য উপলব্ধ চমৎকার সব সুবিধা।" />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} delay={i * 0.08} />
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default Offers;
