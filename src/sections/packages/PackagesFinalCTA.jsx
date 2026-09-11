// Closing CTA for /packages — offers three direct contact paths instead of the
// single generic "Apply Now" banner (see src/sections/home/CTASection.jsx),
// since someone who scrolled this far is more likely undecided than ready to submit
// the connection form. All three destinations are existing config/routes:
// company.supportPhone (tel:), social.whatsapp, and /contact — the dedicated
// /coverage page and its homepage section are both currently hidden site-wide
// (see Home.jsx / App.jsx), so area-coverage questions route to /contact instead
// of a disabled page.
import { Phone, MessageCircle, MapPin } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { company } from "../../config/company.js";
import { social } from "../../config/social.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const PackagesFinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-red to-primary-red-dark px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-center gap-6">
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
              {t("packagesPage.finalCta.eyebrow")}
            </span>
            <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">{t("packagesPage.finalCta.title")}</h2>
            <p className="max-w-xl text-white/85">{t("packagesPage.finalCta.subtitle")}</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href={`tel:${company.supportPhone}`} variant="ghost" icon={Phone} iconPosition="left">
                {t("packagesPage.finalCta.callLabel")}
              </Button>
              <Button href={social.whatsapp} target="_blank" rel="noopener noreferrer" variant="ghost" icon={MessageCircle} iconPosition="left">
                {t("packagesPage.finalCta.whatsappLabel")}
              </Button>
              <Button to="/contact" variant="ghost" icon={MapPin} iconPosition="left">
                {t("packagesPage.finalCta.coverageLabel")}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default PackagesFinalCTA;
