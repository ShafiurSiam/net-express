import { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Wallet } from "lucide-react";
import Container from "../common/Container.jsx";
import Button from "../common/Button.jsx";
import MobileMenu from "./MobileMenu.jsx";
import Logo from "./Logo.jsx";
import NavDropdown from "../ui/NavDropdown.jsx";
import LanguageSwitch from "../ui/LanguageSwitch.jsx";
import { navLinks, isNewOffer } from "../../data/navigation.js";
import { ftpLinks } from "../../data/ftpLinks.js";
import { company } from "../../config/company.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-card backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-[var(--nav-height)] items-center justify-between py-3">
          <Link to="/" className="shrink-0" aria-label={company.name}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={t("nav.mainNav")}>
            {navLinks.map((link) => (
              <Fragment key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-primary-red"
                        : scrolled
                          ? "text-text-primary hover:text-primary-red"
                          : "text-text-primary/90 hover:text-primary-red"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label[language]}
                      {isActive && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary-red" />
                      )}
                      {/* "New" badge on the Offers link — see isNewOffer in data/navigation.js to remove it later */}
                      {link.path === "/offers" && isNewOffer && (
                        <span className="absolute -right-2 -top-1.5 z-10 rounded-full bg-primary-red px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-wide text-white shadow-sm motion-safe:animate-pulse">
                          New
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
                {/* FTP dropdown was anchored to the Coverage link; that link is
                    hidden for now, so it renders after Packages instead. */}
                {link.path === "/packages" && (
                  <NavDropdown
                    label="FTP"
                    items={ftpLinks}
                    triggerClassName={
                      scrolled
                        ? "text-text-primary hover:text-primary-red"
                        : "text-text-primary/90 hover:text-primary-red"
                    }
                  />
                )}
              </Fragment>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch compact />
            <Button to="/payment" size="sm" icon={Wallet} iconPosition="left">
              {t("common.payBill")}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label={t("nav.openMenu")}
            className="rounded-lg p-2 text-text-primary lg:hidden"
          >
            <Menu size={26} />
          </button>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;
