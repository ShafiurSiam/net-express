import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Wifi } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import Button from "../../components/common/Button.jsx";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";
import heroArt from "../../assets/images/home/hero.svg";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = (shouldReduceMotion) => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
});

const HeroSection = () => {
  const { openRequest } = useConnectionRequest();
  const shouldReduceMotion = useReducedMotion();
  const fx = item(shouldReduceMotion);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 text-left"
        >
          <motion.span
            variants={fx}
            className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-1.5 text-sm font-semibold text-primary-red"
          >
            <Wifi size={16} /> বাংলাদেশের বিশ্বস্ত ইন্টারনেট সেবা
          </motion.span>

          <motion.h1 variants={fx} className="text-4xl font-extrabold leading-[1.15] text-text-primary sm:text-5xl lg:text-6xl">
            আপনার গতির <span className="text-primary-red">সাথী</span>,<br /> নেট এক্সপ্রেস
          </motion.h1>

          <motion.p variants={fx} className="max-w-lg text-lg text-text-secondary">
            দ্রুত, নির্ভরযোগ্য ও নিরবচ্ছিন্ন ব্রডব্যান্ড ইন্টারনেট সংযোগ — আপনার বাসা কিংবা
            ব্যবসার প্রয়োজনে, সাশ্রয়ী মূল্যে।
          </motion.p>

          <motion.div variants={fx} className="flex flex-wrap items-center gap-4 pt-2">
            <Button to="/packages" size="lg" icon={ArrowRight}>
              প্যাকেজ দেখুন
            </Button>
            <Button variant="secondary" size="lg" onClick={() => openRequest()}>
              এখনই সংযোগ নিন
            </Button>
          </motion.div>

          <motion.div variants={fx} className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-text-secondary">
            <span>২৪/৭ কাস্টমার সাপোর্ট</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>৯৯%+ নেটওয়ার্ক আপটাইম</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>ফ্রি ইনস্টলেশন</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <img
            src={heroArt}
            alt="নেটওয়ার্ক সংযোগের বিমূর্ত চিত্র"
            className={`w-full ${shouldReduceMotion ? "" : "animate-float-slow"}`}
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
