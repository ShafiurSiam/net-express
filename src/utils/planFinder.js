// Frontend-only recommendation helper for the "কোন প্যাকেজ আপনার জন্য?" plan
// finder on /packages. Pure lookup — no backend call, no data of its own — it
// only returns an id that already exists in src/data/packages.js or
// src/data/smePlans.js, so the caller can look up and highlight that card.
//
// Device-count buckets and activities are intentionally the same small set the
// UI presents as buttons (see PlanFinderSection.jsx); if you add an option there,
// add a matching row/column here.
export const DEVICE_OPTIONS = ["1-3", "4-7", "8-15", "20+"];
export const ACTIVITY_OPTIONS = ["browsing", "streaming", "gaming", "office"];

// Mapping choices, by activity:
// - "gaming" always recommends the dedicated gaming package (gamex-nitro-150)
//   regardless of device count — it's an uncapped IX route, not a bandwidth-per-device
//   product, so more devices doesn't change the recommendation.
// - "office" (heavy cloud/office work) scales toward real-IP / dedicated-bandwidth
//   tiers as device count grows, ending in the SME/Corporate plans for office-sized
//   device counts.
// - "streaming" (4K + family) scales through the higher home tiers, since those are
//   the ones whose whatsNew copy in packages.js specifically calls out multi-device
//   streaming; 20+ devices is treated as a small-business-sized household and points
//   at SME Pro rather than inventing a bigger home tier that doesn't exist.
// - "browsing" (general/social) scales gently through the entry-level home tiers.
const MATRIX = {
  gaming: {
    "1-3": "gamex-nitro-150",
    "4-7": "gamex-nitro-150",
    "8-15": "gamex-nitro-150",
    "20+": "gamex-nitro-150",
  },
  office: {
    "1-3": "prime-65",
    "4-7": "freelancer-175",
    "8-15": "sme-essential",
    "20+": "corporate-power",
  },
  streaming: {
    "1-3": "pro-50",
    "4-7": "ultra-80",
    "8-15": "blaze-100",
    "20+": "sme-pro",
  },
  browsing: {
    "1-3": "genz-35",
    "4-7": "turbo-40",
    "8-15": "pro-50",
    "20+": "prime-65",
  },
};

// SME/Corporate ids live in smePlans.js, not packages.js — callers need to know
// which array to look the id up in.
const SME_IDS = new Set(["sme-essential", "sme-advance", "sme-pro", "corporate-power"]);

/**
 * deviceCount: one of DEVICE_OPTIONS
 * activity: one of ACTIVITY_OPTIONS
 * Returns { id, isSme } or null if either input is missing/unrecognized.
 */
export const findRecommendedPlan = (deviceCount, activity) => {
  const id = MATRIX[activity]?.[deviceCount];
  if (!id) return null;
  return { id, isSme: SME_IDS.has(id) };
};
