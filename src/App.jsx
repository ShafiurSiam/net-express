import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import FloatingContactButton from "./components/layout/FloatingContactButton.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import PageLoader from "./components/common/PageLoader.jsx";
import { ConnectionRequestProvider } from "./context/ConnectionRequestContext.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Packages = lazy(() => import("./pages/Packages.jsx"));
const Offers = lazy(() => import("./pages/Offers.jsx"));
const Coverage = lazy(() => import("./pages/Coverage.jsx"));
const Payment = lazy(() => import("./pages/Payment.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Support = lazy(() => import("./pages/Support.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const SpeedTest = lazy(() => import("./pages/SpeedTest.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function App() {
  return (
    <ConnectionRequestProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/speed-test" element={<SpeedTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingContactButton />
    </ConnectionRequestProvider>
  );
}

export default App;
