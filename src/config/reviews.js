// Single source of truth for the customer-reviews feature.
//
// Shape of this file: `webhookUrl` is the Google Apps Script web app URL from
// VITE_REVIEWS_WEBHOOK_URL ("" when unset — the site then shows only the starter
// reviews from src/data/reviews.js and offers no submission form). The remaining
// fields are the validation/paging limits shared by the form and the section; the
// Apps Script in docs/reviews-apps-script.gs enforces the same name/comment limits.
export const reviewsConfig = {
  webhookUrl: import.meta.env.VITE_REVIEWS_WEBHOOK_URL || "",
  nameMaxLength: 50,
  commentMinLength: 10,
  commentMaxLength: 500,
  pageSize: 6,
  cooldownMs: 10 * 60 * 1000,
  cooldownStorageKey: "net-express-review-last-submit",
};
