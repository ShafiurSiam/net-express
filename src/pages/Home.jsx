import SEO from "../components/common/SEO.jsx";
import HeroSection from "../sections/home/HeroSection.jsx";
import StatsSection from "../sections/home/StatsSection.jsx";
import PackagesSection from "../sections/home/PackagesSection.jsx";
import OffersSection from "../sections/home/OffersSection.jsx";
import WhyChooseUsSection from "../sections/home/WhyChooseUsSection.jsx";
import CoverageSection from "../sections/home/CoverageSection.jsx";
import HowItWorksSection from "../sections/home/HowItWorksSection.jsx";
import PaymentSection from "../sections/home/PaymentSection.jsx";
import FAQSection from "../sections/home/FAQSection.jsx";
import CTASection from "../sections/home/CTASection.jsx";

const Home = () => {
  return (
    <>
      <SEO path="/" />
      <HeroSection />
      <StatsSection />
      <PackagesSection />
      <OffersSection />
      <WhyChooseUsSection />
      <CoverageSection />
      <HowItWorksSection />
      <PaymentSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;
