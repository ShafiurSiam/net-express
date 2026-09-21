import { reviewsConfig } from "../config/reviews.js";

const isValidRating = (rating) => Number.isInteger(rating) && rating >= 1 && rating <= 5;

// Strict rating parse for rows from the Sheet: a number or a numeric string only.
// Anything else (null, "", true, arrays...) becomes NaN, which fails isValidRating,
// so the review is hidden — a rating is never defaulted.
const parseRating = (raw) =>
  typeof raw === "number" || (typeof raw === "string" && raw.trim() !== "") ? Number(raw) : NaN;

const commentFallbackOrder = { bn: ["bn", "en"], en: ["en", "bn"] };

/**
 * Returns the comment text for the active language, falling back to the other
 * language. Accepts a { bn, en } pair or a plain string (rows from the Sheet).
 */
export const getCommentText = (comment, language) => {
  if (typeof comment === "string") return comment.trim();
  for (const lang of commentFallbackOrder[language] ?? commentFallbackOrder.bn) {
    const text = comment?.[lang];
    if (typeof text === "string" && text.trim()) return text.trim();
  }
  return "";
};

// A review is shown only when it has a name, a comment in some language and a 1-5 rating.
export const isCompleteReview = (review) =>
  typeof review?.name === "string" &&
  review.name.trim() !== "" &&
  isValidRating(review.rating) &&
  getCommentText(review.comment, "bn") !== "";

export const getAverageRating = (reviews) =>
  reviews.length === 0 ? 0 : reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

/**
 * Loads public reviews from the Apps Script web app. Never throws: a missing URL,
 * network error or malformed reply all resolve to [] so the page keeps working.
 */
export const fetchReviews = async (signal) => {
  if (!reviewsConfig.webhookUrl) return [];
  try {
    const response = await fetch(reviewsConfig.webhookUrl, { signal });
    const rows = await response.json();
    if (!Array.isArray(rows)) return [];
    return rows
      .map((row, i) => ({
        id: `remote-${i}-${row?.timestamp ?? ""}`,
        name: typeof row?.name === "string" ? row.name : "",
        rating: parseRating(row?.rating),
        comment: typeof row?.comment === "string" ? row.comment : "",
      }))
      .filter(isCompleteReview);
  } catch {
    return [];
  }
};

/**
 * Posts a review as text/plain (a "simple" request, so no CORS preflight — same
 * approach as the connection form). Resolves to { ok: true } or { ok: false, error }
 * where `error` is a machine code from the script ("rate_limited", "duplicate", ...)
 * or "network" when the reply could not be read.
 */
export const submitReview = async (payload) => {
  try {
    const response = await fetch(reviewsConfig.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (result?.ok === true) return { ok: true };
    return { ok: false, error: typeof result?.error === "string" ? result.error : "unknown" };
  } catch {
    return { ok: false, error: "network" };
  }
};

// Client-side "1 review per browser per 10 minutes" limit. localStorage can be
// unavailable (private mode), in which case the limit is simply not enforced.
export const getCooldownRemainingMs = () => {
  try {
    const last = Number(localStorage.getItem(reviewsConfig.cooldownStorageKey));
    if (!last) return 0;
    return Math.max(0, last + reviewsConfig.cooldownMs - Date.now());
  } catch {
    return 0;
  }
};

export const markSubmitted = () => {
  try {
    localStorage.setItem(reviewsConfig.cooldownStorageKey, String(Date.now()));
  } catch {
    // Ignore — cooldown is best-effort.
  }
};
