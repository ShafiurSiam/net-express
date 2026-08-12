import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import { company } from "../config/company.js";

const sections = [
  {
    title: "১. সেবার শর্তাবলী",
    body: `${company.name} এর ইন্টারনেট সেবা ব্যবহারের মাধ্যমে গ্রাহক এই শর্তাবলীর সাথে সম্মত হচ্ছেন বলে ধরে নেওয়া হয়। এই পৃষ্ঠার বিষয়বস্তু একটি সাময়িক প্লেসহোল্ডার — চূড়ান্ত আইনি ভাষা একজন পেশাদার আইনজীবীর মাধ্যমে প্রস্তুত করা হবে।`,
  },
  {
    title: "২. একাউন্ট ও সংযোগ",
    body: "গ্রাহককে নিবন্ধনের সময় সঠিক তথ্য প্রদান করতে হবে। ভুল বা অসম্পূর্ণ তথ্যের কারণে সংযোগ বিলম্বিত বা বাতিল হতে পারে।",
  },
  {
    title: "৩. বিল ও পরিশোধ",
    body: "নির্ধারিত সময়ের মধ্যে মাসিক বিল পরিশোধ করতে হবে। বিল বকেয়া থাকলে সাময়িকভাবে সংযোগ বন্ধ রাখার অধিকার সংরক্ষণ করে কর্তৃপক্ষ।",
  },
  {
    title: "৪. ব্যবহারবিধি",
    body: "অবৈধ বা ক্ষতিকর কার্যকলাপে ইন্টারনেট সংযোগ ব্যবহার করা যাবে না। এই নীতি লঙ্ঘন করলে সংযোগ স্থগিত করা হতে পারে।",
  },
  {
    title: "৫. সেবা বাতিল",
    body: "গ্রাহক যেকোনো সময় লিখিত অনুরোধের মাধ্যমে সংযোগ বাতিল করতে পারবেন। প্রযোজ্য শর্ত অনুযায়ী অগ্রিম নোটিশ প্রয়োজন হতে পারে।",
  },
];

const Terms = () => {
  return (
    <>
      <SEO title="শর্তাবলী" description="Net Express এর সেবা ব্যবহারের শর্তাবলী।" path="/terms" />
      <PageHeader eyebrow="আইনি তথ্য" title="শর্তাবলী" subtitle="এই পৃষ্ঠাটি একটি প্লেসহোল্ডার — চূড়ান্ত বিষয়বস্তু শীঘ্রই আপডেট করা হবে।" />

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

export default Terms;
