import { Home, WifiOff } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";

const NotFound = () => {
  return (
    <>
      <SEO title="পৃষ্ঠা পাওয়া যায়নি" description="দুঃখিত, আপনার খোঁজা পৃষ্ঠাটি খুঁজে পাওয়া যায়নি।" path="/404" />
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-surface to-white px-5 py-32">
        <Container className="flex max-w-lg flex-col items-center gap-6 text-center">
          <AnimatedSection className="flex flex-col items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-red/10 text-primary-red">
              <WifiOff size={36} />
            </div>
            <span className="text-7xl font-extrabold text-primary-red">৪০৪</span>
            <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">পৃষ্ঠা পাওয়া যায়নি</h1>
            <p className="text-text-secondary">
              দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরানো হয়েছে অথবা কখনো ছিল না। হোমপেজে ফিরে যান।
            </p>
            <Button to="/" icon={Home} iconPosition="left" size="lg">
              হোমপেজে ফিরে যান
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
