import { PackageSearch, ClipboardCheck, PhoneCall, Cable, Rocket } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";

const steps = [
  { icon: PackageSearch, title: "প্যাকেজ নির্বাচন", description: "আপনার প্রয়োজন অনুযায়ী উপযুক্ত ইন্টারনেট প্যাকেজ বেছে নিন।" },
  { icon: ClipboardCheck, title: "আবেদন করুন", description: "অনলাইন ফর্মের মাধ্যমে দ্রুত সংযোগের জন্য আবেদন সম্পন্ন করুন।" },
  { icon: PhoneCall, title: "প্রতিনিধি যোগাযোগ করবে", description: "আমাদের প্রতিনিধি নিশ্চিতকরণের জন্য আপনার সাথে যোগাযোগ করবে।" },
  { icon: Cable, title: "সংযোগ স্থাপন", description: "নির্ধারিত সময়ে আমাদের টেকনিশিয়ান এসে সংযোগ স্থাপন করবে।" },
  { icon: Rocket, title: "ইন্টারনেট ব্যবহার করুন", description: "উপভোগ করুন দ্রুতগতির নিরবচ্ছিন্ন ইন্টারনেট সেবা।" },
];

const HowItWorksSection = () => {
  const { openRequest } = useConnectionRequest();

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionTitle
          eyebrow="সংযোগ প্রক্রিয়া"
          title="কিভাবে সংযোগ নেবেন"
          subtitle="মাত্র কয়েকটি ধাপে শুরু করুন নতুন ইন্টারনেট সংযোগ।"
        />

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-border lg:block" aria-hidden="true" />
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1} className="relative flex flex-col items-center gap-4 text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-card-hover">
                <step.icon size={26} />
              </div>
              <span className="text-xs font-bold text-primary-red">ধাপ {String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-bold text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" onClick={() => openRequest()}>
            এখনই সংযোগের জন্য আবেদন করুন
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
