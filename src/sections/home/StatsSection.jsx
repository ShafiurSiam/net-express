// Renders the trust/statistics strip (customer count, uptime, support, experience) below the hero.
import Container from "../../components/common/Container.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import CountUp from "../../components/ui/CountUp.jsx";
import { statistics } from "../../data/statistics.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { formatNumber } from "../../i18n/numerals.js";

const StatsSection = () => {
  const { language } = useLanguage();

  return (
    <section className="border-y border-border bg-white py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statistics.map((stat, i) => (
            <AnimatedSection key={stat.id} delay={i * 0.08} className="flex flex-col items-center gap-1 text-center">
              <p className="text-3xl font-extrabold text-primary-red sm:text-4xl">
                <CountUp value={stat.value} />
                {formatNumber(stat.suffix, language)}
              </p>
              <p className="text-sm text-text-secondary sm:text-base">{stat.label[language]}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
