// Packages-page FAQ subset — pulls straight from src/data/faq.js (same source
// as the homepage FAQ) rather than forking its own copy. Shows the entries most
// relevant to choosing/paying for a package; everything else stays on the
// homepage/Support accordion.
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Accordion from "../../components/ui/Accordion.jsx";
import { faqs } from "../../data/faq.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const PACKAGES_FAQ_IDS = ["faq-7", "faq-8", "faq-2", "faq-3"];

const PackagesFaqSection = () => {
  const { t } = useLanguage();
  const items = PACKAGES_FAQ_IDS.map((id) => faqs.find((f) => f.id === id)).filter(Boolean);

  return (
    <section className="py-14 sm:py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle eyebrow={t("home.faqSection.eyebrow")} title={t("home.faqSection.title")} />
        <div className="mx-auto w-full max-w-3xl">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
};

export default PackagesFaqSection;
