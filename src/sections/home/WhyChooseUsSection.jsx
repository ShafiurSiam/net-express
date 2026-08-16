// Renders the "Why Choose Us" feature grid on the homepage (speed, reliability, support, etc.).
import { Zap, ShieldCheck, Headset, Wrench, Cpu, Wallet } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import FeatureCard from "../../components/cards/FeatureCard.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../i18n/translations.js";

const icons = [Zap, ShieldCheck, Headset, Wrench, Cpu, Wallet];

const WhyChooseUsSection = () => {
  const { language, t } = useLanguage();
  const features = translations.home.whyChooseUs.features.map((feature, i) => ({
    icon: icons[i],
    title: feature.title[language],
    description: feature.description[language],
  }));

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={t("home.whyChooseUs.eyebrow")}
          title={t("home.whyChooseUs.title")}
          subtitle={t("home.whyChooseUs.subtitle")}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
