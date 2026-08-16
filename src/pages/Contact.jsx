import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import { company } from "../config/company.js";
import { social } from "../config/social.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const emptyForm = { name: "", contact: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const { language, t } = useLanguage();

  const contactInfo = [
    { icon: Phone, label: t("contact.phoneLabel"), value: company.phone[language] },
    { icon: Mail, label: t("contact.emailLabel"), value: company.email },
    { icon: MapPin, label: t("contact.addressLabel"), value: company.address[language] },
    { icon: Clock, label: t("contact.hoursLabel"), value: company.workingHours[language] },
  ];

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO(backend): POST this message to a real contact/ticketing API.
    console.log("Contact message:", form);
    setSent(true);
  };

  return (
    <>
      <SEO
        title={t("seo.contact.title")}
        description={t("seo.contact.description")}
        path="/contact"
      />
      <PageHeader eyebrow={t("pageHeader.contact.eyebrow")} title={t("pageHeader.contact.title")} subtitle={t("pageHeader.contact.subtitle")} />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <AnimatedSection className="flex flex-col gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">{item.label}</p>
                  <p className="font-semibold text-text-primary">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary-red hover:underline">Facebook</a>
              <span className="h-1 w-1 rounded-full bg-border" />
              <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary-red hover:underline">WhatsApp</a>
              <span className="h-1 w-1 rounded-full bg-border" />
              <a href={social.messenger} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary-red hover:underline">Messenger</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 size={44} className="text-primary-red" />
                <h3 className="text-lg font-bold text-text-primary">{t("contact.sentTitle")}</h3>
                <p className="text-sm text-text-secondary">{t("contact.sentBody")}</p>
                <Button variant="secondary" size="sm" onClick={() => { setForm(emptyForm); setSent(false); }}>
                  {t("contact.newMessage")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-text-primary">{t("contact.formHeading")}</h3>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
                  {t("contact.nameLabel")}
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder={t("contact.namePlaceholder")}
                    className="rounded-xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary-red"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
                  {t("contact.contactLabel")}
                  <input
                    type="text"
                    value={form.contact}
                    onChange={handleChange("contact")}
                    placeholder={t("contact.contactPlaceholder")}
                    className="rounded-xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary-red"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
                  {t("contact.messageLabel")}
                  <textarea
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder={t("contact.messagePlaceholder")}
                    rows={4}
                    className="rounded-xl border border-border bg-white px-4 py-3 outline-none transition-colors focus:border-primary-red"
                  />
                </label>
                <Button type="submit" icon={Send} iconPosition="left" className="w-full">
                  {t("contact.submit")}
                </Button>
              </form>
            )}
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
};

export default Contact;
