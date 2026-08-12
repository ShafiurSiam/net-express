import { Wallet } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import PaymentBadges from "../../components/ui/PaymentBadges.jsx";
import { paymentConfig } from "../../config/payment.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const PaymentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-red/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-red/10 blur-3xl" />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <SectionTitle
          light
          eyebrow={t("home.paymentSection.eyebrow")}
          title={t("home.paymentSection.title")}
          subtitle={t("home.paymentSection.subtitle")}
        />

        <PaymentBadges />

        <Button href={paymentConfig.url} target="_blank" rel="noopener noreferrer" size="lg" icon={Wallet} iconPosition="left">
          {t("common.payNow")}
        </Button>
      </Container>
    </section>
  );
};

export default PaymentSection;
