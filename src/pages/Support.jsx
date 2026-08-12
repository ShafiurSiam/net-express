import { Headset, Phone, Mail } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import { faqs } from "../data/faq.js";
import { company } from "../config/company.js";

const Support = () => {
  return (
    <>
      <SEO
        title="সহায়তা"
        description="Net Express গ্রাহক সহায়তা কেন্দ্র — সচরাচর জিজ্ঞাসা ও যোগাযোগের তথ্য।"
        path="/support"
      />
      <PageHeader eyebrow="সহায়তা" title="আমরা আপনার পাশে আছি" subtitle="সাধারণ প্রশ্নের উত্তর খুঁজুন, অথবা সরাসরি আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।" />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <AnimatedSection className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-card lg:col-span-1 lg:h-fit">
            <Headset size={32} className="text-primary-red" />
            <h3 className="text-lg font-bold text-text-primary">সরাসরি সহায়তা নিন</h3>
            <p className="text-sm text-text-secondary">আমাদের ২৪/৭ সাপোর্ট টিম আপনার যেকোনো সমস্যা সমাধানে প্রস্তুত।</p>
            <div className="flex flex-col gap-2 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><Phone size={16} className="text-primary-red" /> {company.hotline}</span>
              <span className="flex items-center gap-2"><Mail size={16} className="text-primary-red" /> {company.supportEmail}</span>
            </div>
            <Button to="/contact" size="sm" className="mt-2">যোগাযোগ করুন</Button>
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
