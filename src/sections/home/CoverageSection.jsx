import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import coverageMap from "../../assets/images/coverage/coverage-map.svg";

const CoverageSection = () => {
  const [area, setArea] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!area.trim()) return;

    // TODO(backend): replace with a real coverage-lookup API call.
    setResult(area.trim());
  };

  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimatedSection>
          <img src={coverageMap} alt="কভারেজ এলাকার বিমূর্ত মানচিত্র" className="w-full" loading="lazy" />
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          <SectionTitle
            align="left"
            eyebrow="কভারেজ এলাকা"
            title="আপনার এলাকায় কি আমাদের সংযোগ রয়েছে?"
            subtitle="আপনার এলাকার নাম লিখে দ্রুত যাচাই করুন।"
          />

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <MapPin size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="এলাকার নাম লিখুন, যেমনঃ মিরপুর"
                className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-text-primary outline-none transition-colors focus:border-primary-red"
              />
            </label>
            <Button type="submit" icon={Search} iconPosition="left">
              কভারেজ দেখুন
            </Button>
          </form>

          {result && (
            <AnimatedSection className="rounded-xl border border-primary-red/20 bg-primary-red/5 p-4 text-sm text-text-primary">
              <strong>{result}</strong> এলাকায় সংযোগ সম্পর্কে জানতে আমাদের প্রতিনিধি শীঘ্রই আপনার
              সাথে যোগাযোগ করবেন। বিস্তারিত তালিকার জন্য{" "}
              <Link to="/coverage" className="font-semibold text-primary-red underline">
                কভারেজ পেজ
              </Link>{" "}
              দেখুন।
            </AnimatedSection>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CoverageSection;
