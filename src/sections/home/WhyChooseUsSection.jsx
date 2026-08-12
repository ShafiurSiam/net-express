import { Zap, ShieldCheck, Headset, Wrench, Cpu, Wallet } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import FeatureCard from "../../components/cards/FeatureCard.jsx";

const features = [
  { icon: Zap, title: "অত্যাধুনিক গতির ইন্টারনেট", description: "সর্বোচ্চ গতিতে ব্রাউজিং, স্ট্রিমিং ও গেমিং উপভোগ করুন কোনো বাফারিং ছাড়াই।" },
  { icon: ShieldCheck, title: "নির্ভরযোগ্য সংযোগ", description: "স্থিতিশীল নেটওয়ার্ক অবকাঠামো, যা নিশ্চিত করে নিরবচ্ছিন্ন ইন্টারনেট সেবা।" },
  { icon: Headset, title: "২৪/৭ কাস্টমার সাপোর্ট", description: "যেকোনো সময় প্রয়োজনে আমাদের সাপোর্ট টিম আপনার পাশে রয়েছে।" },
  { icon: Wrench, title: "দ্রুত সমস্যা সমাধান", description: "প্রযুক্তিগত সমস্যায় দ্রুততম সময়ে সমাধান দেওয়াই আমাদের অগ্রাধিকার।" },
  { icon: Cpu, title: "আধুনিক নেটওয়ার্ক প্রযুক্তি", description: "সর্বশেষ প্রযুক্তি ব্যবহার করে গড়ে তোলা নেটওয়ার্ক পরিকাঠামো।" },
  { icon: Wallet, title: "সহজ বিল পেমেন্ট", description: "বিকাশ, নগদ, রকেট বা কার্ডের মাধ্যমে ঘরে বসেই বিল পরিশোধ করুন।" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="কেন আমরা"
          title="কেন আমাদের বেছে নেবেন?"
          subtitle="গতি, নির্ভরযোগ্যতা ও গ্রাহকসেবায় আমরা প্রতিশ্রুতিবদ্ধ।"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
