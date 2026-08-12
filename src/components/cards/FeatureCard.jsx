import AnimatedSection from "../common/AnimatedSection.jsx";

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/30 hover:shadow-card-hover">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </AnimatedSection>
  );
};

export default FeatureCard;
