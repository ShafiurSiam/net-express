import Container from "./Container.jsx";
import AnimatedSection from "./AnimatedSection.jsx";

/**
 * Consistent banner used at the top of every interior page (non-Home).
 */
const PageHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white page-top pb-14">
      <Container>
        <AnimatedSection className="flex max-w-2xl flex-col gap-4">
          {eyebrow && (
            <span className="w-fit rounded-full bg-primary-red/10 px-3 py-1 text-sm font-semibold text-primary-red">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && <p className="text-base text-text-secondary sm:text-lg">{subtitle}</p>}
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default PageHeader;
