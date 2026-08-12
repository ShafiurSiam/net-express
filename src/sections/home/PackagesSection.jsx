import { ArrowRight } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import PackageCard from "../../components/cards/PackageCard.jsx";
import { packages } from "../../data/packages.js";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";

const PackagesSection = () => {
  const { openRequest } = useConnectionRequest();
  const homePackages = packages.filter((pkg) => pkg.category === "home");

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="ইন্টারনেট প্যাকেজ"
          title="বাসার জন্য উপযুক্ত ইন্টারনেট প্যাকেজ বেছে নিন"
          subtitle="প্রয়োজন অনুযায়ী গতি বেছে নিন — কোনো লুকানো খরচ নেই, শুধু নিরবচ্ছিন্ন সংযোগ।"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homePackages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.08} onSelect={(p) => openRequest(p.id)} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/packages" variant="secondary" icon={ArrowRight}>
            সকল প্যাকেজ ও বিজনেস প্ল্যান দেখুন
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;
