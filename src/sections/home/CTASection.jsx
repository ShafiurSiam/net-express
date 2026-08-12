import { ArrowRight } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";

const CTASection = () => {
  const { openRequest } = useConnectionRequest();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <AnimatedSection className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-red to-primary-red-dark px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              আজই নেট এক্সপ্রেসের সাথে যুক্ত হয়ে উপভোগ করুন নিরবচ্ছিন্ন ইন্টারনেট
            </h2>
            <p className="max-w-xl text-white/85">
              দ্রুত, নির্ভরযোগ্য ও সাশ্রয়ী সংযোগের জন্য এখনই আবেদন করুন — আমাদের প্রতিনিধি দ্রুত
              আপনার সাথে যোগাযোগ করবে।
            </p>
            <Button variant="ghost" size="lg" icon={ArrowRight} onClick={() => openRequest()}>
              সংযোগের জন্য আবেদন করুন
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default CTASection;
