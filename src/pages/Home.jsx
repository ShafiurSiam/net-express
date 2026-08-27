import SEO from "../components/common/SEO.jsx";
import HeroSection from "../sections/home/HeroSection.jsx";
import StatsSection from "../sections/home/StatsSection.jsx";
import PackagesSection from "../sections/home/PackagesSection.jsx";
// Hidden until real offer content is ready — uncomment to bring back.
// import OffersSection from "../sections/home/OffersSection.jsx";
import WhyChooseUsSection from "../sections/home/WhyChooseUsSection.jsx";
// Hidden until real coverage data is ready — uncomment to bring back.
// import CoverageSection from "../sections/home/CoverageSection.jsx";
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
      {/* <OffersSection /> — hidden until real offer content is ready */}
      <WhyChooseUsSection />
      {/* <CoverageSection /> — hidden until real coverage data is ready */}
      <HowItWorksSection />
      <PaymentSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;
