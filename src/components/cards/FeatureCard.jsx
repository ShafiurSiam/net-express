import AnimatedSection from "../common/AnimatedSection.jsx";

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="group relative isolate flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/30 hover:shadow-card-hover">
        {/* Ambient red-tinted corner wash; intensifies on hover — same language as Offer/Package cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(var(--rgb-primary-red),0.1),transparent_70%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Gradient border-glow, only visible on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-red), var(--color-primary-red-light), var(--color-primary-red))",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-red/15 to-primary-red/5 text-primary-red ring-1 ring-primary-red/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gradient-to-br group-hover:from-primary-red group-hover:to-primary-red-dark group-hover:text-white group-hover:ring-primary-red-dark/40">
          <Icon size={24} />
        </div>
        <h3 className="relative z-10 text-lg font-bold text-text-primary">{title}</h3>
        <p className="relative z-10 text-sm text-text-secondary">{description}</p>
      </div>
    </AnimatedSection>
  );
};

export default FeatureCard;
