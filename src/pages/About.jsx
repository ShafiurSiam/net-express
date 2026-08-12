import { Target, Eye, HeartHandshake } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import FeatureCard from "../components/cards/FeatureCard.jsx";
import StatsSection from "../sections/home/StatsSection.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { company } from "../config/company.js";
import aboutHero from "../assets/images/about/about-hero.svg";

const values = [
  { icon: Target, title: "আমাদের লক্ষ্য", description: "প্রতিটি ঘরে ও ব্যবসায় সাশ্রয়ী মূল্যে দ্রুতগতির ইন্টারনেট পৌঁছে দেওয়া।" },
  { icon: Eye, title: "আমাদের দৃষ্টিভঙ্গি", description: "বাংলাদেশের সবচেয়ে নির্ভরযোগ্য ও গ্রাহকবান্ধব ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান হয়ে ওঠা।" },
  { icon: HeartHandshake, title: "আমাদের প্রতিশ্রুতি", description: "স্বচ্ছতা, মানসম্পন্ন সেবা ও দ্রুত সমস্যা সমাধানের মাধ্যমে গ্রাহকের আস্থা অর্জন করা।" },
];

const About = () => {
  return (
    <>
      <SEO
        title="আমাদের সম্পর্কে"
        description="Net Express একটি আধুনিক, নির্ভরযোগ্য বাংলাদেশি ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান।"
        path="/about"
      />
      <PageHeader
        eyebrow="আমাদের সম্পর্কে"
        title="নেট এক্সপ্রেস সম্পর্কে জানুন"
        subtitle={company.shortDescription}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <img src={aboutHero} alt="নেট এক্সপ্রেস অফিস ও নেটওয়ার্কের বিমূর্ত চিত্র" className="w-full rounded-2xl" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-text-primary">আমাদের যাত্রা</h2>
            <p className="text-text-secondary">
              {company.name} প্রতিষ্ঠিত হয়েছে একটি সহজ লক্ষ্য নিয়ে — বাংলাদেশের মানুষের জন্য
              দ্রুত, নির্ভরযোগ্য ও সাশ্রয়ী ইন্টারনেট সংযোগ নিশ্চিত করা। আধুনিক নেটওয়ার্ক
              প্রযুক্তি ও দক্ষ টিমের মাধ্যমে আমরা প্রতিনিয়ত গ্রাহকসেবার মান উন্নত করে চলেছি।
            </p>
            <p className="text-text-secondary">
              বাসাবাড়ি থেকে শুরু করে ব্যবসা প্রতিষ্ঠান — সব ধরনের গ্রাহকের চাহিদা মাথায় রেখে
              আমরা তৈরি করেছি বিভিন্ন মূল্যের ও গতির প্যাকেজ, যা মানানসই আপনার প্রয়োজনের সাথে।
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <FeatureCard key={value.title} {...value} delay={i * 0.08} />
          ))}
        </Container>
      </section>

      <StatsSection />
      <CTASection />
    </>
  );
};

export default About;
