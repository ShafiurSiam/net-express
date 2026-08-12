import { useState } from "react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import PackageCard from "../components/cards/PackageCard.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { packages, packageCategories } from "../data/packages.js";
import { useConnectionRequest } from "../context/ConnectionRequestContext.jsx";

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState("home");
  const { openRequest } = useConnectionRequest();

  const filtered = packages.filter((pkg) => pkg.category === activeCategory);

  return (
    <>
      <SEO
        title="ইন্টারনেট প্যাকেজ"
        description="Net Express এর সকল ইন্টারনেট প্যাকেজ ও মূল্য তালিকা — বাসা ও ব্যবসার জন্য।"
        path="/packages"
      />
      <PageHeader
        eyebrow="প্যাকেজ"
        title="ইন্টারনেট প্যাকেজ ও মূল্য তালিকা"
        subtitle="প্রয়োজন অনুযায়ী বেছে নিন সবচেয়ে উপযুক্ত প্যাকেজ।"
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="mx-auto flex w-fit gap-2 rounded-full border border-border bg-white p-1.5 shadow-card">
            {packageCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary-red text-white"
                    : "text-text-secondary hover:text-primary-red"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.08} onSelect={(p) => openRequest(p.id)} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default Packages;
