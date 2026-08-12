import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-primary-red text-white shadow-card hover:bg-primary-red-dark hover:shadow-card-hover",
  secondary:
    "bg-transparent text-primary-red border-2 border-primary-red hover:bg-primary-red hover:text-white",
  ghost:
    "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20",
  dark: "bg-charcoal text-white hover:bg-charcoal/85",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3.5 text-base sm:text-lg",
};

/**
 * Renders a <Link> when `to` is given, an <a> when `href` is given,
 * otherwise a native <button>. Keeps CTA styling in one place.
 */
const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon size={18} className="transition-transform group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon size={18} className="transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
