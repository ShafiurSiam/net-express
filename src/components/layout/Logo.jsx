import { company } from "../../config/company.js";

// Icon+wordmark lockup used by Navbar, Footer, and MobileMenu. company.logo /
// company.logoWhite (src/config/company.js) are pure icon marks with no text
// baked in, so the "NetExpress" wordmark is rendered here as two adjacent,
// two-tone text nodes next to the icon rather than edited into the SVGs.
const sizes = {
  sm: { icon: "h-9 w-auto", text: "text-sm" },
  md: { icon: "h-9 w-auto sm:h-11", text: "text-lg sm:text-xl" },
};

const Logo = ({ variant = "dark", size = "md", className = "" }) => {
  const src = variant === "white" ? company.logoWhite : company.logo;
  const netColor = variant === "white" ? "text-white" : "text-text-primary";
  const expressColor = variant === "white" ? "text-primary-red-light" : "text-primary-red";
  const { icon, text } = sizes[size];

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src={src} alt="" className={icon} />
      <span className={`whitespace-nowrap font-heading font-extrabold leading-none tracking-tighter ${text}`}>
        <span className={netColor}>Net</span>
        <span className={expressColor}>Express</span>
      </span>
    </span>
  );
};

export default Logo;
