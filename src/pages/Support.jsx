import { Headset, Phone, Mail } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import { faqs } from "../data/faq.js";
import { company } from "../config/company.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const Support = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t("seo.support.title")}
        description={t("seo.support.description")}
        path="/support"
      />
      <PageHeader eyebrow={t("pageHeader.support.eyebrow")} title={t("pageHeader.support.title")} subtitle={t("pageHeader.support.subtitle")} />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <AnimatedSection className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-card lg:col-span-1 lg:h-fit">
            <Headset size={32} className="text-primary-red" />
            <h3 className="text-lg font-bold text-text-primary">{t("support.directTitle")}</h3>
            <p className="text-sm text-text-secondary">{t("support.directBody")}</p>
            <div className="flex flex-col gap-2 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><Phone size={16} className="text-primary-red" /> <a href={`tel:${company.supportPhone}`} className="transition-colors hover:text-primary-red">{company.supportPhone}</a></span>
              <span className="flex items-center gap-2"><Mail size={16} className="text-primary-red" /> {company.supportEmail}</span>
            </div>
            <Button to="/contact" size="sm" className="mt-2">{t("support.contactButton")}</Button>
          </AnimatedSection>

          <div className="lg:col-span-2">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
