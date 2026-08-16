import { company } from "../../config/company.js";

// Icon+wordmark lockup used by Navbar, Footer, and MobileMenu. company.logo /
// company.logoWhite (src/config/company.js) are pure icon marks with no text
// baked in, so the "Net Express" wordmark is rendered here as a separate,
// styled text node next to the icon rather than edited into the SVGs.
const sizes = {
  sm: { icon: "h-9 w-auto", text: "text-sm" },
  md: { icon: "h-9 w-auto sm:h-11", text: "text-lg sm:text-xl" },
};

const Logo = ({ variant = "dark", size = "md", className = "" }) => {
  const src = variant === "white" ? company.logoWhite : company.logo;
  const textColor = variant === "white" ? "text-white" : "text-text-primary";
  const { icon, text } = sizes[size];

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src={src} alt="" className={icon} />
      <span
        className={`whitespace-nowrap font-heading font-extrabold leading-none tracking-tight ${text} ${textColor}`}
      >
        {company.name}
      </span>
    </span>
  );
};

export default Logo;
