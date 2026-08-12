import SectionTitle from "../../components/common/SectionTitle.jsx";
import SMEPlanCard from "../../components/cards/SMEPlanCard.jsx";
import { smePlans } from "../../data/smePlans.js";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";

/**
 * Renders inside the Packages page's existing Container/category layout —
 * see src/pages/Packages.jsx.
 */
const SMECorporateSection = () => {
  const { openRequest } = useConnectionRequest();

  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title={smePlans.heading} subtitle={smePlans.subheading} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {smePlans.plans.map((plan, i) => (
          <SMEPlanCard key={plan.id} plan={plan} delay={i * 0.08} onSelect={(p) => openRequest(p.id)} />
        ))}
      </div>
    </div>
  );
};

export default SMECorporateSection;
