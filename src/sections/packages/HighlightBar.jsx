// 4-item highlight strip directly under the /packages page header. Copy in
// translations.js ("packagesPage.highlights") restates claims already made
// elsewhere in the codebase (packages.js shortFeatures' FTTH/24-7 lines, the
// BDIX FTP feature on GameX Nitro/FREELANCER, and the FREELANCER package's
// high-upload whatsNew copy) rather than inventing new ones.
import { Cable, Zap, Wifi, Headset } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../i18n/translations.js";

const icons = [Cable, Zap, Wifi, Headset];

const HighlightBar = () => {
  const { language } = useLanguage();
  const items = translations.packagesPage.highlights;

  return (
    <section className="border-y border-border bg-surface py-6">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={item.bn} delay={i * 0.06} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-medium text-text-primary">{item[language]}</span>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HighlightBar;
