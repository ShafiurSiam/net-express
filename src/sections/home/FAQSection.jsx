import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Accordion from "../../components/ui/Accordion.jsx";
import { faqs } from "../../data/faq.js";

const FAQSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle eyebrow="সচরাচর জিজ্ঞাসা" title="আপনার প্রশ্নের উত্তর" />
        <div className="mx-auto w-full max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
