import { Wallet, ShieldCheck, Clock, Smartphone } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import FeatureCard from "../components/cards/FeatureCard.jsx";
import PaymentBadges from "../components/ui/PaymentBadges.jsx";
import { paymentConfig } from "../config/payment.js";
import { company } from "../config/company.js";

const perks = [
  { icon: Clock, title: "মুহূর্তেই সম্পন্ন", description: "কোনো অপেক্ষা ছাড়াই কয়েক সেকেন্ডে বিল পরিশোধ করুন।" },
  { icon: ShieldCheck, title: "নিরাপদ পেমেন্ট", description: "নিরাপদ ও এনক্রিপ্টেড পেমেন্ট গেটওয়ের মাধ্যমে লেনদেন সম্পন্ন হয়।" },
  { icon: Smartphone, title: "মোবাইল থেকেই সম্ভব", description: "বিকাশ, নগদ বা রকেট অ্যাপ থেকে সরাসরি বিল পরিশোধ করুন।" },
];

const Payment = () => {
  return (
    <>
      <SEO
        title="বিল পরিশোধ"
        description="বিকাশ, নগদ, রকেট বা কার্ডের মাধ্যমে Net Express এর ইন্টারনেট বিল পরিশোধ করুন।"
        path="/payment"
      />
      <PageHeader eyebrow="বিল পরিশোধ" title="সহজে ও নিরাপদে বিল পরিশোধ করুন" subtitle="নিচের বাটনে ক্লিক করে আপনার পছন্দের মাধ্যমে বিল পরিশোধ করুন।" />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col items-center gap-10">
          <AnimatedSection className="w-full max-w-xl rounded-3xl border border-border bg-white p-8 text-center shadow-card sm:p-12">
            <Wallet size={40} className="mx-auto text-primary-red" />
            <h2 className="mt-4 text-2xl font-bold text-text-primary">আপনার বিল পরিশোধ করুন</h2>
            <p className="mt-2 text-text-secondary">
              গ্রাহক আইডি বা মোবাইল নম্বর ব্যবহার করে নিচের পেমেন্ট গেটওয়ে থেকে বিল পরিশোধ সম্পন্ন করুন।
            </p>
            <div className="mt-6 flex justify-center">
              <PaymentBadges />
            </div>
            <Button href={paymentConfig.url} target="_blank" rel="noopener noreferrer" size="lg" className="mt-8 w-full">
              বিল পরিশোধ করুন
            </Button>
            <p className="mt-4 text-xs text-text-secondary">
              সমস্যা হলে আমাদের হটলাইনে কল করুন: {company.hotline}
            </p>
          </AnimatedSection>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {perks.map((perk, i) => (
              <FeatureCard key={perk.title} {...perk} delay={i * 0.08} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Payment;
