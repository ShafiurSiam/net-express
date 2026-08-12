import AnimatedSection from "../common/AnimatedSection.jsx";
import Badge from "../common/Badge.jsx";

const OfferCard = ({ offer, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <div className="relative overflow-hidden">
          <img
            src={offer.image}
            alt={offer.title}
            loading="lazy"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge tone="red" className="absolute left-4 top-4">
            {offer.badge}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-6">
          <h3 className="text-xl font-bold text-text-primary">{offer.title}</h3>
          <p className="flex-1 text-sm text-text-secondary">{offer.description}</p>
          <p className="mt-2 text-xs font-medium text-primary-red">মেয়াদ: {offer.validity}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OfferCard;
