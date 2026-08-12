import { useState } from "react";
import { Search, MapPin, CheckCircle2, Info } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { coverageAreas } from "../data/coverageAreas.js";

const Coverage = () => {
  const [area, setArea] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = area.trim();
    if (!query) return;

    // TODO(backend): replace with a real coverage-lookup API call.
    const isCovered = coverageAreas.some((a) => a.includes(query) || query.includes(a));
    setResult({ query, isCovered });
  };

  return (
    <>
      <SEO
        title="কভারেজ এলাকা"
        description="আপনার এলাকায় Net Express এর সংযোগ রয়েছে কিনা যাচাই করুন।"
        path="/coverage"
      />
      <PageHeader
        eyebrow="কভারেজ"
        title="আপনার এলাকায় কি সংযোগ পাওয়া যাবে?"
        subtitle="এলাকার নাম লিখে যাচাই করুন, অথবা নিচের তালিকায় খুঁজুন।"
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-12">
          <AnimatedSection className="mx-auto w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <MapPin size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="এলাকার নাম লিখুন"
                  className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-text-primary outline-none transition-colors focus:border-primary-red"
                />
              </label>
              <Button type="submit" icon={Search} iconPosition="left">
                যাচাই করুন
              </Button>
            </form>

            {result && (
              <AnimatedSection
                className={`mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                  result.isCovered
                    ? "border-primary-red/20 bg-primary-red/5 text-text-primary"
                    : "border-border bg-surface text-text-secondary"
                }`}
              >
                {result.isCovered ? (
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary-red" />
                ) : (
                  <Info size={20} className="mt-0.5 shrink-0 text-text-secondary" />
                )}
                <span>
                  {result.isCovered ? (
                    <>
                      <strong>{result.query}</strong> এলাকায় আমাদের সংযোগ উপলব্ধ। এখনই আবেদন করুন
                      অথবা আমাদের হটলাইনে যোগাযোগ করুন।
                    </>
                  ) : (
                    <>
                      <strong>{result.query}</strong> এলাকাটি এই মুহূর্তে তালিকায় নেই। তবে আমরা
                      দ্রুত সম্প্রসারণ করছি — সরাসরি যোগাযোগ করুন বিস্তারিত জানতে।
                    </>
                  )}
                </span>
              </AnimatedSection>
            )}
          </AnimatedSection>

          <AnimatedSection className="flex flex-col gap-5">
            <h2 className="text-center text-xl font-bold text-text-primary">বর্তমান কভারেজ এলাকা (নমুনা)</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {coverageAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-secondary"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="text-center text-xs text-text-secondary">
              * এটি একটি ডেমো তালিকা। প্রকৃত কভারেজ তথ্যের জন্য পরবর্তীতে সরাসরি API সংযুক্ত করা হবে।
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default Coverage;
