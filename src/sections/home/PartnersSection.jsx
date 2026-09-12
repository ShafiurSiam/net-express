// Renders the "Our Partners" trust section — upstream/transmission network
// partners we actually work with. See src/data/partners.js for the partner
// list and how to add a real logo image later.
import { ShieldCheck } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import PartnerCard from "../../components/cards/PartnerCard.jsx";
import { partners } from "../../data/partners.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const PartnersSection = () => {
  const { t } = useLanguage();
  const eyebrowText = t("home.partnersSection.eyebrow");

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionTitle
          eyebrow={
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} aria-hidden="true" />
              {eyebrowText}
            </span>
          }
          title={t("home.partnersSection.title")}
          subtitle={t("home.partnersSection.subtitle")}
        />

        <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.id} name={partner.name} logoSrc={partner.logoSrc} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;
