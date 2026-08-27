// Numbered, screenshot-driven walkthrough of paying a Net Express bill inside the
// bKash app. Purely explanatory — it sits next to the existing "Pay Bill" CTA and
// does not touch the payment link/logic itself.
//
// The four screenshots live at src/assets/images/payment/bkash-guide/ and have
// already been redacted (personal data blurred) and annotated (yellow ring on the
// "Pay Bill" icon in step 1, red box on the correct biller in step 2). Do not
// swap in other real customer data.
import Container from "../common/Container.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import AnimatedSection from "../common/AnimatedSection.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../i18n/translations.js";
import { formatNumber } from "../../i18n/numerals.js";
import step1 from "../../assets/images/payment/bkash-guide/step1-bkash-home.jpg";
import step2 from "../../assets/images/payment/bkash-guide/step2-bkash-search.jpg";
import step3 from "../../assets/images/payment/bkash-guide/step3-bkash-bill-period.jpg";
import step4 from "../../assets/images/payment/bkash-guide/step4-bkash-confirm.jpg";

const images = [step1, step2, step3, step4];

const BkashPaymentGuide = () => {
  const { language, t } = useLanguage();
  const steps = translations.payment.bkashGuide.steps.map((step, i) => ({
    image: images[i],
    caption: step.caption[language],
    alt: step.alt[language],
  }));

  return (
    <section className="bg-surface py-14 sm:py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionTitle
          eyebrow={t("payment.bkashGuide.eyebrow")}
          title={t("payment.bkashGuide.heading")}
          subtitle={t("payment.bkashGuide.subtitle")}
        />

        <ol className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimatedSection as="li" key={step.caption} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-red text-base font-bold text-white">
                    {formatNumber(i + 1, language)}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-text-secondary">{step.caption}</p>
                </div>
                <div className="mt-auto flex h-[320px] items-start justify-center overflow-hidden rounded-xl border border-border bg-surface p-2 sm:h-[360px]">
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    className="h-full w-auto max-w-full rounded-lg object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </ol>

        <p className="max-w-xl text-center text-sm text-text-secondary">
          {t("payment.bkashGuide.note")}
        </p>
      </Container>
    </section>
  );
};

export default BkashPaymentGuide;
