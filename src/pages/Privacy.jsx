import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import { company } from "../config/company.js";

const sections = [
  {
    title: "১. তথ্য সংগ্রহ",
    body: `${company.name} গ্রাহকসেবার উদ্দেশ্যে নাম, ফোন নম্বর, ঠিকানা ও প্যাকেজ সংক্রান্ত তথ্য সংগ্রহ করে। এই পৃষ্ঠার বিষয়বস্তু একটি সাময়িক প্লেসহোল্ডার — চূড়ান্ত নীতিমালা একজন পেশাদার আইনজীবীর মাধ্যমে প্রস্তুত করা হবে।`,
  },
  {
    title: "২. তথ্যের ব্যবহার",
    body: "সংগৃহীত তথ্য শুধুমাত্র সংযোগ স্থাপন, বিলিং ও গ্রাহকসেবার উদ্দেশ্যে ব্যবহৃত হয়। বিপণন উদ্দেশ্যে ব্যবহারের ক্ষেত্রে পূর্বানুমতি নেওয়া হবে।",
  },
  {
    title: "৩. তথ্য সুরক্ষা",
    body: "গ্রাহকের ব্যক্তিগত তথ্য সুরক্ষিত রাখতে যথাযথ প্রযুক্তিগত ও প্রশাসনিক ব্যবস্থা গ্রহণ করা হয়।",
  },
  {
    title: "৪. তৃতীয় পক্ষের সাথে তথ্য শেয়ার",
    body: "আইনি প্রয়োজন ব্যতীত গ্রাহকের ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।",
  },
  {
    title: "৫. যোগাযোগ",
    body: "গোপনীয়তা নীতি সম্পর্কিত যেকোনো প্রশ্নের জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",
  },
];

const Privacy = () => {
  return (
    <>
      <SEO title="গোপনীয়তা নীতি" description="Net Express এর গোপনীয়তা নীতি।" path="/privacy" />
      <PageHeader eyebrow="আইনি তথ্য" title="গোপনীয়তা নীতি" subtitle="এই পৃষ্ঠাটি একটি প্লেসহোল্ডার — চূড়ান্ত বিষয়বস্তু শীঘ্রই আপডেট করা হবে।" />

      <section className="py-14 sm:py-20">
        <Container className="mx-auto flex max-w-3xl flex-col gap-8">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.05} className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-text-primary">{section.title}</h2>
              <p className="text-text-secondary">{section.body}</p>
            </AnimatedSection>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Privacy;
