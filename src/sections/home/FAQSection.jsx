// Renders the FAQ accordion on the homepage, sourced from src/data/faq.js.
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Accordion from "../../components/ui/Accordion.jsx";
import { faqs } from "../../data/faq.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle eyebrow={t("home.faqSection.eyebrow")} title={t("home.faqSection.title")} />
        <div className="mx-auto w-full max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
