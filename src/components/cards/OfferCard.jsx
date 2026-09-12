import AnimatedSection from "../common/AnimatedSection.jsx";
import Button from "../common/Button.jsx";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const OfferCard = ({ offer, delay = 0 }) => {
  const { language } = useLanguage();
  const { openRequest } = useConnectionRequest();
  const Icon = offer.icon;

  const ctaProps =
    offer.cta.action === "openRequest" ? { onClick: () => openRequest() } : { to: offer.cta.to };

  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
          <Icon size={30} />
        </div>

        {offer.highlight && (
          <p className="text-4xl font-extrabold leading-none text-primary-red">{offer.highlight[language]}</p>
        )}

        <h3 className="text-xl font-bold text-text-primary">{offer.title[language]}</h3>
        <p className="flex-1 text-sm text-text-secondary">{offer.description[language]}</p>

        <Button {...ctaProps} variant="secondary" className="w-full sm:w-auto">
          {offer.cta.label[language]}
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default OfferCard;
