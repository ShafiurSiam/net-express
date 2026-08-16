import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import Container from "../common/Container.jsx";
import { company } from "../../config/company.js";
import { social } from "../../config/social.js";
import { footerLinks } from "../../data/navigation.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { formatNumber } from "../../i18n/numerals.js";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../common/SocialIcons.jsx";

const socialLinks = [
  { icon: FacebookIcon, url: social.facebook, label: "Facebook" },
  { icon: InstagramIcon, url: social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, url: social.youtube, label: "YouTube" },
];

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-charcoal text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <img src={company.logoWhite} alt={company.name} className="h-11 w-auto" />
          <p className="text-sm text-white/60">{company.shortDescription[language]}</p>
          <div className="flex items-center gap-3 pt-1">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary-red hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title={t("footer.quickLinksHeading")} links={footerLinks.quickLinks} language={language} />
        <FooterColumn title={t("footer.supportHeading")} links={footerLinks.support} language={language} />

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">{t("footer.contactHeading")}</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary-red-light" />
              <span>{company.phone[language]} ({company.hotline})</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary-red-light" />
              <span>{company.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-red-light" />
              <span>{company.address[language]}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary-red-light" />
              <span>{t("footer.btrcLicense", { license: company.btrcLicense[language] })}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            {t("footer.copyright", { year: formatNumber(company.copyrightYear, language), name: company.name })}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white">{t("footer.termsLabel")}</Link>
            <Link to="/privacy" className="hover:text-white">{t("footer.privacyLabel")}</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links, language }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">{title}</h4>
    <ul className="flex flex-col gap-2.5 text-sm text-white/70">
      {links.map((link) => (
        <li key={link.path}>
          <Link to={link.path} className="transition-colors hover:text-primary-red-light">
            {link.label[language]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
