// Animated schematic "network coverage map" for Tongi — a stylized SVG
// infographic (NOT a geographic map). Node positions are derived from the
// loose `cluster` hint on each src/data/coverageAreas.js entry via
// NODE_LAYOUT below; treat them as illustrative, not surveyed coordinates.
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection.jsx";
import CountUp from "../ui/CountUp.jsx";
import { coverageAreas } from "../../data/coverageAreas.js";
import { statistics } from "../../data/statistics.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const VIEW_W = 700;
const VIEW_H = 560;
const CENTER = { x: VIEW_W / 2, y: VIEW_H / 2 - 5 };

// angle: degrees, 0 = east, 90 = south (down), 180 = west, 270 = north (up).
// radius: px from the hub. Both are illustrative layout hints, not GPS data.
const NODE_LAYOUT = {
  "tongi-bazar": { angle: 10, radius: 95 },
  "station-road": { angle: 82, radius: 95 },
  cheragali: { angle: 154, radius: 95 },
  "bou-bazar": { angle: 226, radius: 95 },
  "modhumita-road": { angle: 298, radius: 95 },
  "college-gate": { angle: 55, radius: 165 },
  bonomala: { angle: 85, radius: 165 },
  pagar: { angle: 115, radius: 165 },
  "10-tala-garments": { angle: 145, radius: 165 },
  amtoli: { angle: 185, radius: 185 },
  "jamai-bazar": { angle: 250, radius: 175 },
  "ershad-nagar": { angle: 292, radius: 175 },
  "gazipura-27": { angle: 5, radius: 185 },
};

const toPoint = (angleDeg, radius) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER.x + radius * Math.cos(rad), y: CENTER.y + radius * Math.sin(rad) };
};

const scrollToChecker = () => {
  document.getElementById("coverage-checker")?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const NetworkCoverageMap = ({ className = "" }) => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(null);

  const supportStat = statistics.find((s) => s.id === "support");

  const nodes = useMemo(
    () =>
      coverageAreas.map((area, index) => {
        const layout = NODE_LAYOUT[area.id] ?? { angle: (index / coverageAreas.length) * 360, radius: 150 };
        const point = toPoint(layout.angle, layout.radius);
        const rad = (layout.angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        let anchor = "middle";
        let dx = 0;
        let dy = 4;
        if (cos > 0.35) {
          anchor = "start";
          dx = 12;
        } else if (cos < -0.35) {
          anchor = "end";
          dx = -12;
        }
        if (Math.abs(cos) <= 0.35) {
          dy = sin < 0 ? -14 : 22;
        }

        // Alternate the connector's bend direction for a less mechanical fan-out.
        const dxHub = point.x - CENTER.x;
        const dyHub = point.y - CENTER.y;
        const len = Math.hypot(dxHub, dyHub) || 1;
        const px = -dyHub / len;
        const py = dxHub / len;
        const bend = 16 * (index % 2 === 0 ? 1 : -1);
        const mx = (CENTER.x + point.x) / 2 + px * bend;
        const my = (CENTER.y + point.y) / 2 + py * bend;

        return { ...area, angle: layout.angle, point, anchor, dx, dy, path: `M ${CENTER.x} ${CENTER.y} Q ${mx} ${my} ${point.x} ${point.y}` };
      }),
    [],
  );

  const meshLines = useMemo(() => {
    const byCluster = new Map();
    nodes.forEach((n) => {
      if (!byCluster.has(n.cluster)) byCluster.set(n.cluster, []);
      byCluster.get(n.cluster).push(n);
    });
    const lines = [];
    byCluster.forEach((group) => {
      if (group.length < 2) return;
      const sorted = [...group].sort((a, b) => a.angle - b.angle);
      for (let i = 0; i < sorted.length - 1; i += 1) {
        lines.push({ id: `${sorted[i].id}-${sorted[i + 1].id}`, a: sorted[i].point, b: sorted[i + 1].point });
      }
    });
    return lines;
  }, [nodes]);

  const nodeEntrance = (index) => ({
    initial: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.4 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.045, ease: [0.22, 1, 0.36, 1] },
  });

  const activate = (id) => setActiveId(id);
  const deactivate = (id) => setActiveId((prev) => (prev === id ? null : prev));

  return (
    <AnimatedSection className={`rounded-3xl border border-border bg-white p-5 shadow-card sm:p-8 ${className}`}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-primary-red/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary-red uppercase">
            {t("networkCoverageMap.badge")}
          </span>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">{t("networkCoverageMap.heading")}</h2>
          <p className="max-w-lg text-sm text-text-secondary sm:text-base">{t("networkCoverageMap.subtitle")}</p>
        </div>
        <span className="w-fit shrink-0 rounded-full border border-primary-red/20 bg-primary-red/5 px-3 py-1.5 text-xs font-semibold text-primary-red">
          {t("networkCoverageMap.connectivityPill")}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="coverage-map-scroll relative overflow-x-auto rounded-2xl bg-surface p-2 sm:p-4">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="h-auto w-full min-w-[640px] md:min-w-0"
            role="group"
            aria-label={t("networkCoverageMap.svgLabel")}
          >
            {/* Decorative service-area outline — illustrative only, not a real boundary. */}
            <path
              d="M 350 88 C 462 78, 566 132, 596 232 C 620 322, 566 424, 462 462 C 360 498, 216 484, 138 422 C 66 366, 88 258, 130 176 C 166 108, 252 98, 350 88 Z"
              fill="var(--color-primary-red)"
              fillOpacity="0.045"
              stroke="var(--color-primary-red)"
              strokeOpacity="0.14"
              strokeDasharray="4 7"
              strokeWidth="1.5"
            />

            {/* Light mesh between adjacent nodes within the same cluster. */}
            {meshLines.map((line) => (
              <line
                key={line.id}
                x1={line.a.x}
                y1={line.a.y}
                x2={line.b.x}
                y2={line.b.y}
                stroke="var(--color-primary-red)"
                strokeOpacity="0.12"
                strokeWidth="1"
                strokeDasharray="2 5"
              />
            ))}

            {/* Hub -> node connectors, static backing line + animated flowing dashes. */}
            {nodes.map((node) => (
              <g key={`link-${node.id}`}>
                <path d={node.path} fill="none" stroke="var(--color-primary-red)" strokeOpacity="0.12" strokeWidth="1.5" />
                <path
                  d={node.path}
                  fill="none"
                  stroke="var(--color-primary-red)"
                  strokeOpacity="0.55"
                  strokeWidth="1.75"
                  className="coverage-connector"
                />
              </g>
            ))}

            {/* Hub node. */}
            <motion.g
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              role="img"
              aria-label={t("networkCoverageMap.hubAriaLabel")}
            >
              <circle cx={CENTER.x} cy={CENTER.y} r="22" fill="var(--color-primary-red)" fillOpacity="0.16" />
              <circle cx={CENTER.x} cy={CENTER.y} r="13" fill="var(--color-charcoal)" stroke="#ffffff" strokeWidth="2.5" />
              <text x={CENTER.x} y={CENTER.y + 34} textAnchor="middle" className="fill-text-primary text-[13px] font-bold">
                Tongi Bazar
              </text>
              <text x={CENTER.x} y={CENTER.y + 50} textAnchor="middle" className="fill-text-secondary text-[10px] font-medium">
                {t("networkCoverageMap.hubLabel")}
              </text>
            </motion.g>

            {/* Coverage nodes. */}
            {nodes.map((node, index) => {
              const isActive = activeId === node.id;
              return (
                <motion.g
                  key={node.id}
                  {...nodeEntrance(index)}
                >
                  <circle
                    cx={node.point.x}
                    cy={node.point.y}
                    r={isActive ? 10 : 7}
                    className="coverage-node-dot animate-pulse-glow"
                    fill="var(--color-primary-red)"
                    fillOpacity={isActive ? 1 : 0.85}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  {/* Precisely-circular hit target/focus ring, decoupled from the label's bounding box. */}
                  <circle
                    cx={node.point.x}
                    cy={node.point.y}
                    r="16"
                    fill="transparent"
                    tabIndex={0}
                    role="button"
                    aria-label={`${node.name} — ${t("networkCoverageMap.nodeAriaSuffix")}`}
                    className="cursor-pointer outline-none"
                    onMouseEnter={() => activate(node.id)}
                    onMouseLeave={() => deactivate(node.id)}
                    onFocus={() => activate(node.id)}
                    onBlur={() => deactivate(node.id)}
                    onClick={() => setActiveId((prev) => (prev === node.id ? null : node.id))}
                  />
                  <text
                    x={node.point.x + node.dx}
                    y={node.point.y + node.dy}
                    textAnchor={node.anchor}
                    className={`pointer-events-none text-[11px] transition-[fill,font-weight] duration-150 ${
                      isActive ? "fill-primary-red font-bold" : "fill-text-secondary font-medium"
                    }`}
                  >
                    {node.name}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>
        <p className="text-center text-xs text-text-secondary md:hidden">{t("networkCoverageMap.swipeHint")}</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-1 flex-col justify-center gap-4 rounded-2xl border border-border bg-surface p-5">
            <div>
              <p className="text-3xl font-extrabold text-primary-red">
                <CountUp value={coverageAreas.length} />
              </p>
              <p className="text-sm text-text-secondary">{t("networkCoverageMap.statsLocationsLabel")}</p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="text-lg font-bold text-text-primary">{t("networkCoverageMap.statsTypeValue")}</p>
              <p className="text-sm text-text-secondary">{t("networkCoverageMap.statsTypeLabel")}</p>
            </div>
            {supportStat && (
              <>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-3xl font-extrabold text-primary-red">
                    <CountUp value={supportStat.value} />
                    {supportStat.suffix}
                  </p>
                  <p className="text-sm text-text-secondary">{t("networkCoverageMap.statsSupportLabel")}</p>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-white px-4 py-3 text-xs text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-charcoal" /> {t("networkCoverageMap.legendHub")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary-red" /> {t("networkCoverageMap.legendNode")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-text-secondary">{t("networkCoverageMap.disclaimer")}</p>
        <button
          type="button"
          onClick={scrollToChecker}
          className="w-full shrink-0 rounded-xl bg-primary-red px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-primary-red-dark hover:shadow-card-hover sm:w-auto"
        >
          {t("networkCoverageMap.ctaButton")}
        </button>
      </div>
    </AnimatedSection>
  );
};

export default NetworkCoverageMap;
