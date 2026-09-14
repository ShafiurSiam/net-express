// Shared live particle-network background (drifting dots + proximity lines),
// wrapping react-tsparticles' slim engine. One component reused at different
// strengths: a denser, cursor-reactive instance behind the hero, and a much
// quieter "ambient" instance behind a couple of other homepage sections
// (see HeroSection.jsx / StatsSection.jsx / WhyChooseUsSection.jsx).
//
// Performance: each instance pauses itself (via the engine's own
// pauseOnOutsideViewport plus an IntersectionObserver gate that unmounts the
// canvas entirely) when scrolled out of view, so only on-screen canvases
// actually render.
import { useEffect, useId, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useReducedMotion } from "framer-motion";

/**
 * strength: "hero" (denser, brighter, cursor-reactive) | "ambient" (quiet, slow, no interaction)
 * colorVar: name of a brand color custom property from variables.css (resolved at
 *   runtime via getComputedStyle so the canvas always matches the live token —
 *   canvas fillStyle can't consume var() references directly)
 * className: positioning classes for the wrapping div (caller controls inset/z-index)
 */
const ParticleBackground = ({ strength = "ambient", colorVar = "--color-primary-red-dark", className = "" }) => {
  // tsParticles keys its internal container registry by this id — every
  // mounted instance (multiple "ambient" ones included) needs its own, or a
  // later instance's load() silently steals/replaces an earlier one's canvas.
  const reactId = useId();
  const [isVisible, setIsVisible] = useState(true);
  const [color, setColor] = useState(null);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const resolved = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
    if (resolved) setColor(resolved);
  }, [colorVar]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isHero = strength === "hero";
  const particlesId = `particles-${strength}-${reactId.replace(/[^a-zA-Z0-9-]/g, "")}`;
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const options = {
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 60,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    background: { color: { value: "transparent" } },
    particles: {
      number: {
        value: isHero ? 60 : 22,
        density: { enable: true, area: isHero ? 900 : 1200 },
      },
      color: { value: color },
      opacity: {
        value: isHero ? 0.45 : 0.22,
      },
      size: { value: { min: 1, max: isHero ? 2.6 : 2 } },
      links: {
        enable: true,
        color,
        distance: isHero ? 140 : 120,
        opacity: isHero ? 0.28 : 0.14,
        width: 1,
      },
      move: {
        enable: true,
        speed: shouldReduceMotion ? 0 : isHero ? 0.7 : 0.35,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: isHero && !shouldReduceMotion, mode: "grab" },
        onClick: { enable: false },
        resize: true,
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.4 } },
      },
    },
  };

  // Reduced-motion fallback: move speed is already forced to 0 above so
  // tsParticles paints one still dot/line arrangement instead of nothing,
  // keeping the composition intentional rather than blank.
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {isVisible && color && (
        <Particles
          id={particlesId}
          init={particlesInit}
          options={options}
          className="h-full w-full"
          canvasClassName={isHero ? "!pointer-events-auto" : ""}
        />
      )}
    </div>
  );
};

export default ParticleBackground;
