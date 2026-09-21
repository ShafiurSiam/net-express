import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Button from "../common/Button.jsx";
import { StarInput } from "./StarRating.jsx";
import { ReviewNotice } from "./LegalNotice.jsx";
import { reviewsConfig } from "../../config/reviews.js";
import { getCooldownRemainingMs, markSubmitted, submitReview } from "../../utils/reviews.js";
import { formatNumber } from "../../i18n/numerals.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

// Server rejection codes (see docs/reviews-apps-script.gs) that get their own message;
// anything else falls back to the generic failure message.
const SERVER_ERROR_KEYS = {
  rate_limited: "reviews.errors.rateLimited",
  duplicate: "reviews.errors.duplicate",
};

const minutesLeft = (ms) => Math.max(1, Math.ceil(ms / 60000));

/**
 * "Write a review" form. Calls onSubmitted(review) only after the server confirms
 * the save, so the parent can publish it to the top of the list immediately.
 */
const ReviewForm = ({ onSubmitted, onClose }) => {
  const { language, t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorKey, setErrorKey] = useState("reviews.errors.generic");
  const [cooldownMs, setCooldownMs] = useState(getCooldownRemainingMs);

  const { nameMaxLength, commentMinLength, commentMaxLength } = reviewsConfig;

  const validate = () => {
    const next = {};
    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    if (!rating) next.rating = "reviews.errors.ratingRequired";
    if (!trimmedName) next.name = "reviews.errors.nameRequired";
    else if (trimmedName.length > nameMaxLength) next.name = "reviews.errors.nameTooLong";
    if (trimmedComment.length < commentMinLength) next.comment = "reviews.errors.commentTooShort";
    else if (trimmedComment.length > commentMaxLength) next.comment = "reviews.errors.commentTooLong";
    return next;
  };

  const clearError = (field) => setErrors((prev) => ({ ...prev, [field]: undefined }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const remaining = getCooldownRemainingMs();
    if (remaining > 0) {
      setCooldownMs(remaining);
      return;
    }

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Bots fill the hidden field: pretend it worked, but send and publish nothing.
    if (honeypot) {
      setStatus("success");
      return;
    }

    const review = { name: name.trim(), rating, comment: comment.trim() };
    setStatus("sending");
    const result = await submitReview({ ...review, submittedAt: new Date().toISOString(), lang: language });

    if (result.ok) {
      markSubmitted();
      onSubmitted({
        id: `local-${Date.now()}`,
        name: review.name,
        rating: review.rating,
        comment: { [language]: review.comment },
      });
      setStatus("success");
    } else {
      setErrorKey(SERVER_ERROR_KEYS[result.error] ?? "reviews.errors.generic");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={48} className="text-primary-red" />
        <h4 className="text-lg font-bold text-text-primary">{t("reviews.form.thanks")}</h4>
        <Button variant="secondary" size="sm" onClick={onClose}>
          {t("reviews.form.close")}
        </Button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-text-primary">{t("reviews.form.ratingLabel")}</span>
        <StarInput
          value={rating}
          onChange={(n) => {
            setRating(n);
            clearError("rating");
          }}
          label={t("reviews.form.ratingLabel")}
          invalid={Boolean(errors.rating)}
        />
        <FieldError message={errors.rating && t(errors.rating)} />
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
        {t("reviews.form.nameLabel")}
        <input
          type="text"
          value={name}
          maxLength={nameMaxLength}
          onChange={(e) => {
            setName(e.target.value);
            clearError("name");
          }}
          placeholder={t("reviews.form.namePlaceholder")}
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
        />
        <FieldError message={errors.name && t(errors.name)} />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
        {t("reviews.form.commentLabel")}
        <textarea
          value={comment}
          maxLength={commentMaxLength}
          rows={4}
          onChange={(e) => {
            setComment(e.target.value);
            clearError("comment");
          }}
          placeholder={t("reviews.form.commentPlaceholder")}
          aria-invalid={Boolean(errors.comment)}
          className={inputClass}
        />
        <span className="flex items-start justify-between gap-3">
          <FieldError message={errors.comment && t(errors.comment)} />
          <span className="ml-auto text-xs font-normal text-text-secondary">
            {t("reviews.form.counter", {
              count: formatNumber(comment.length, language),
              max: formatNumber(commentMaxLength, language),
            })}
          </span>
        </span>
      </label>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      {cooldownMs > 0 && (
        <p className="rounded-xl bg-surface px-4 py-3 text-sm text-text-secondary">
          {t("reviews.errors.cooldown", { minutes: formatNumber(minutesLeft(cooldownMs), language) })}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-primary-red/10 px-4 py-3 text-sm text-primary-red">
          {t(errorKey)}
        </p>
      )}

      <Button type="submit" disabled={sending || cooldownMs > 0} className="mt-2 w-full">
        {sending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {t("reviews.form.sending")}
          </>
        ) : (
          t("reviews.form.submit")
        )}
      </Button>
      <ReviewNotice />
    </form>
  );
};

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors focus:border-primary-red aria-[invalid=true]:border-primary-red";

const FieldError = ({ message }) =>
  message ? (
    <span role="alert" className="text-xs font-normal text-primary-red">
      {message}
    </span>
  ) : null;

export default ReviewForm;
