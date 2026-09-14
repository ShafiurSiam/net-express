// Renders the trust/statistics strip (customer count, uptime, support, experience) below the hero.
import { Award, LifeBuoy, SignalHigh, Users } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import CountUp from "../../components/ui/CountUp.jsx";
import { statistics } from "../../data/statistics.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { formatNumber } from "../../i18n/numerals.js";

// One lucide icon per stat id — purely presentational, kept here rather than in
// statistics.js so that data file stays free of UI concerns.
const STAT_ICONS = {
  customers: Users,
  uptime: SignalHigh,
  support: LifeBuoy,
  experience: Award,
};

const StatsSection = () => {
  const { language } = useLanguage();

  return (
    <section className="border-y border-border bg-surface py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {statistics.map((stat, i) => {
            const Icon = STAT_ICONS[stat.id] ?? Users;
            return (
              <AnimatedSection key={stat.id} delay={i * 0.08} className="h-full">
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/30 hover:shadow-card-hover sm:p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-extrabold text-primary-red sm:text-4xl">
                    <CountUp value={stat.value} />
                    {formatNumber(stat.suffix, language)}
                  </p>
                  <p className="text-sm text-text-secondary sm:text-base">{stat.label[language]}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
