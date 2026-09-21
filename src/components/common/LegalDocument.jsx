import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Container from "./Container.jsx";
import { company } from "../../config/company.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

// Fills the {company}/{address}/{supportPhone}/{billingPhone} placeholders used in
// src/data/legal.js from company.js, so legal text never hard-codes contact details.
const fillPlaceholders = (text, language) =>
  text
    .replaceAll("{company}", language === "bn" ? company.nameBangla : company.name)
    .replaceAll("{address}", company.address[language])
    .replaceAll("{supportPhone}", company.supportPhone)
    .replaceAll("{billingPhone}", company.billingPhone);

const formatDate = (iso, language) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(language === "bn" ? "bn-BD" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

const ContactBlock = ({ language, t }) => {
  const email = company.supportEmail || company.email;
  const rows = [
    { icon: Phone, label: t("contact.supportPhoneLabel"), value: company.supportPhone, href: `tel:${company.supportPhone}` },
    { icon: Phone, label: t("contact.billingPhoneLabel"), value: company.billingPhone, href: `tel:${company.billingPhone}` },
    { icon: MapPin, label: t("contact.addressLabel"), value: company.address[language] },
    // Email is blank in company.js today; the row appears automatically once it is set.
    ...(email ? [{ icon: Mail, label: "Email", value: email, href: `mailto:${email}` }] : []),
  ];

  return (
    <ul className="mt-1 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 text-sm">
      {rows.map((row) => (
        <li key={row.label} className="flex items-start gap-3">
          <row.icon size={16} className="mt-0.5 shrink-0 text-primary-red" />
          <span className="text-text-secondary">
            {row.label}:{" "}
            {row.href ? (
              <a href={row.href} className="font-semibold text-text-primary hover:text-primary-red">{row.value}</a>
            ) : (
              <span className="font-semibold text-text-primary">{row.value}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

/**
 * Renders a legal document from src/data/legal.js: last-updated date, clickable
 * table of contents, and the numbered sections.
 */
const LegalDocument = ({ content }) => {
  const { language, t } = useLanguage();
  const text = (pair) => fillPlaceholders(pair[language], language);

  return (
    <section className="py-14 sm:py-20">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-text-secondary">
            {t("legal.lastUpdated")}: <span className="font-semibold text-text-primary">{formatDate(content.lastUpdated, language)}</span>
          </p>

          <nav aria-label={t("legal.toc")} className="rounded-2xl border border-border bg-surface p-5">
            <h2 className="mb-3 text-base font-bold text-text-primary">{t("legal.toc")}</h2>
            <ol className="flex flex-col gap-1.5 text-sm">
              {content.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-text-secondary transition-colors hover:text-primary-red">
                    {section.title[language]}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {content.sections.map((section) => (
          <article key={section.id} id={section.id} className="flex scroll-mt-[calc(var(--nav-height)+1rem)] flex-col gap-3">
            <h2 className="text-xl font-bold text-text-primary">{section.title[language]}</h2>
            {section.body?.map((p, i) => (
              <p key={i} className="leading-relaxed text-text-secondary">{text(p)}</p>
            ))}
            {section.items && (
              <ul className="ml-5 list-disc space-y-1.5 leading-relaxed text-text-secondary">
                {section.items.map((item, i) => (
                  <li key={i}>{text(item)}</li>
                ))}
              </ul>
            )}
            {section.extra?.map((p, i) => (
              <p key={i} className="leading-relaxed text-text-secondary">{text(p)}</p>
            ))}
            {section.showContact && <ContactBlock language={language} t={t} />}
          </article>
        ))}

        <Link to="/" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary-red hover:underline">
          <ArrowLeft size={16} /> {t("legal.backHome")}
        </Link>
      </Container>
    </section>
  );
};

export default LegalDocument;
