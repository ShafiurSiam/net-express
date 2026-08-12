import { motion, useReducedMotion } from "framer-motion";

/**
 * Fade + slide-up wrapper triggered once when scrolled into view.
 * Falls back to a plain fade (no movement) when the user prefers reduced motion.
 */
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  as = "div",
  y = 24,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
