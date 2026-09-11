import SectionTitle from "../../components/common/SectionTitle.jsx";
import SMEPlanCard from "../../components/cards/SMEPlanCard.jsx";
import { smePlans } from "../../data/smePlans.js";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";

/**
 * Renders inside the Packages page's existing Container/category layout —
 * see src/pages/Packages.jsx.
 *
 * registerRef/highlightId let the plan finder (src/utils/planFinder.js) scroll
 * to and glow-highlight a specific SME/Corporate card without SMEPlanCard.jsx
 * itself needing to know about that feature.
 */
const SMECorporateSection = ({ id, registerRef, highlightId }) => {
  const { openRequest } = useConnectionRequest();

  return (
    <div id={id} className="flex scroll-mt-28 flex-col gap-10">
      <SectionTitle title={smePlans.heading} subtitle={smePlans.subheading} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {smePlans.plans.map((plan, i) => (
          <div
            key={plan.id}
            ref={registerRef?.(plan.id)}
            className={`rounded-2xl transition-shadow duration-700 ${
              highlightId === plan.id ? "ring-4 ring-primary-red/40 ring-offset-2 ring-offset-surface" : ""
            }`}
          >
            <SMEPlanCard plan={plan} delay={i * 0.08} onSelect={(p) => openRequest(p.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SMECorporateSection;
