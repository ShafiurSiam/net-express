import { Wallet, ShieldCheck, Clock, Smartphone } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import FeatureCard from "../components/cards/FeatureCard.jsx";
import PaymentBadges from "../components/ui/PaymentBadges.jsx";
import { paymentConfig } from "../config/payment.js";
import { company } from "../config/company.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../i18n/translations.js";

const icons = [Clock, ShieldCheck, Smartphone];

const Payment = () => {
  const { language, t } = useLanguage();
  const perks = translations.payment.perks.map((perk, i) => ({
    icon: icons[i],
    title: perk.title[language],
    description: perk.description[language],
  }));

  return (
    <>
      <SEO
        title={t("seo.payment.title")}
        description={t("seo.payment.description")}
        path="/payment"
      />
      <PageHeader eyebrow={t("pageHeader.payment.eyebrow")} title={t("pageHeader.payment.title")} subtitle={t("pageHeader.payment.subtitle")} />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col items-center gap-10">
          <AnimatedSection className="w-full max-w-xl rounded-3xl border border-border bg-white p-8 text-center shadow-card sm:p-12">
            <Wallet size={40} className="mx-auto text-primary-red" />
            <h2 className="mt-4 text-2xl font-bold text-text-primary">{t("payment.cardTitle")}</h2>
            <p className="mt-2 text-text-secondary">{t("payment.cardBody")}</p>
            <div className="mt-6 flex justify-center">
              <PaymentBadges />
            </div>
            <Button href={paymentConfig.url} target="_blank" rel="noopener noreferrer" size="lg" className="mt-8 w-full">
              {t("common.payNow")}
            </Button>
            <p className="mt-4 text-xs text-text-secondary">
              {t("payment.hotlineNote", { hotline: company.hotline })}
            </p>
          </AnimatedSection>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {perks.map((perk, i) => (
              <FeatureCard key={perk.title} {...perk} delay={i * 0.08} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Payment;
