// Renders the "How It Works" step-by-step timeline (choose package -> apply -> install) on the homepage.
import { PackageSearch, ClipboardCheck, PhoneCall, Cable, Wifi } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../i18n/translations.js";
import { formatNumber } from "../../i18n/numerals.js";

const icons = [PackageSearch, ClipboardCheck, PhoneCall, Cable, Wifi];

const HowItWorksSection = () => {
  const { openRequest } = useConnectionRequest();
  const { language, t } = useLanguage();
  const steps = translations.home.howItWorks.steps.map((step, i) => ({
    icon: icons[i],
    title: step.title[language],
    description: step.description[language],
  }));

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionTitle
          eyebrow={t("home.howItWorks.eyebrow")}
          title={t("home.howItWorks.title")}
          subtitle={t("home.howItWorks.subtitle")}
        />

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-border lg:block" aria-hidden="true" />
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1} className="relative flex flex-col items-center gap-4 text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-card-hover">
                <step.icon size={26} />
              </div>
              <span className="text-xs font-bold text-primary-red">
                {t("home.howItWorks.stepLabel", { number: formatNumber(String(i + 1).padStart(2, "0"), language) })}
              </span>
              <h3 className="text-base font-bold text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" onClick={() => openRequest()}>
            {t("home.howItWorks.button")}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
