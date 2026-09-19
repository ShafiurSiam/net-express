import AnimatedSection from "../common/AnimatedSection.jsx";
import { StarDisplay } from "../ui/StarRating.jsx";
import { getCommentText } from "../../utils/reviews.js";
import { formatNumber } from "../../i18n/numerals.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

// Deliberately shows only rating, name and comment — no avatar, photo or initials.
// All text is rendered as plain React text (never as HTML).
const ReviewCard = ({ review, delay = 0 }) => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-7">
        <StarDisplay
          value={review.rating}
          label={t("reviews.ratingAria", { rating: formatNumber(review.rating, language) })}
        />
        <p className="break-words font-semibold text-text-primary">{review.name}</p>
        <p className="flex-1 whitespace-pre-line break-words text-text-secondary">
          {getCommentText(review.comment, language)}
        </p>
      </div>
    </AnimatedSection>
  );
};

export default ReviewCard;
