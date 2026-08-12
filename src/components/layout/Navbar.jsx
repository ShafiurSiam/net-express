import { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Wallet } from "lucide-react";
import Container from "../common/Container.jsx";
import Button from "../common/Button.jsx";
import MobileMenu from "./MobileMenu.jsx";
import NavDropdown from "../ui/NavDropdown.jsx";
import { navLinks } from "../../data/navigation.js";
import { ftpLinks } from "../../data/ftpLinks.js";
import { company } from "../../config/company.js";
import logo from "../../assets/logo/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <Container className="flex h-[72px] items-center justify-between py-3">
          <Link to="/" className="shrink-0" aria-label={company.name}>
            <img src={logo} alt={company.name} className="h-9 w-auto sm:h-10" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="প্রধান মেনু">
            {navLinks.map((link) => (
              <Fragment key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
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
                      {link.label}
                      {isActive && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary-red" />
                      )}
                    </>
                  )}
                </NavLink>
                {link.path === "/coverage" && (
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

          <div className="hidden lg:block">
            <Button to="/payment" size="sm" icon={Wallet} iconPosition="left">
              বিল পরিশোধ
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="মেনু খুলুন"
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
