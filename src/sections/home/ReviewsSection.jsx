// Public customer reviews on the homepage. Merges reviews submitted this session,
// reviews loaded from the Google Sheet (VITE_REVIEWS_WEBHOOK_URL) and the starter
// reviews in src/data/reviews.js. Hidden entirely when there is nothing to show
// and no way to collect reviews.
import { useEffect, useMemo, useState } from "react";
import { PenLine } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import ReviewCard from "../../components/cards/ReviewCard.jsx";
import ReviewForm from "../../components/ui/ReviewForm.jsx";
import Modal from "../../components/ui/Modal.jsx";
import { StarDisplay } from "../../components/ui/StarRating.jsx";
import { reviews as starterReviews } from "../../data/reviews.js";
import { reviewsConfig } from "../../config/reviews.js";
import { fetchReviews, getAverageRating, isCompleteReview } from "../../utils/reviews.js";
import { formatNumber } from "../../i18n/numerals.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const { webhookUrl, pageSize } = reviewsConfig;
const canSubmit = Boolean(webhookUrl);
const completeStarterReviews = starterReviews.filter(isCompleteReview);

const ReviewsSection = () => {
  const { language, t } = useLanguage();
  const [remoteReviews, setRemoteReviews] = useState([]);
  const [localReviews, setLocalReviews] = useState([]);
  const [loading, setLoading] = useState(canSubmit);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (!canSubmit) return undefined;
    const controller = new AbortController();
    fetchReviews(controller.signal).then((rows) => {
      if (controller.signal.aborted) return;
      setRemoteReviews(rows);
      setLoading(false);
    });
    return () => controller.abort();
  }, []);

  // Newest first: reviews submitted just now, then the Sheet (already newest first),
  // then the starter reviews.
  const allReviews = useMemo(
    () => [...localReviews, ...remoteReviews, ...completeStarterReviews],
    [localReviews, remoteReviews],
  );

  if (!canSubmit && completeStarterReviews.length === 0) return null;

  const total = allReviews.length;
  const average = getAverageRating(allReviews);
  const shown = allReviews.slice(0, visibleCount);
  const closeForm = () => setFormOpen(false);

  const writeButton = (
    <Button icon={PenLine} iconPosition="left" onClick={() => setFormOpen(true)}>
      {t("reviews.writeButton")}
    </Button>
  );

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary-red/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-primary-red/5 blur-3xl"
      />
      <Container className="relative flex flex-col gap-12">
        <SectionTitle
          eyebrow={t("reviews.eyebrow")}
          title={t("reviews.title")}
          subtitle={t("reviews.subtitle")}
        />

        {total > 0 && (
          <AnimatedSection className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-text-primary">
                {formatNumber(average.toFixed(1), language)}
              </span>
              <div className="flex flex-col gap-1">
                <StarDisplay
                  value={average}
                  size={22}
                  label={t("reviews.ratingAria", { rating: formatNumber(average.toFixed(1), language) })}
                />
                <span className="text-sm text-text-secondary">
                  {t("reviews.countLabel", { count: formatNumber(total, language) })}
                </span>
              </div>
            </div>
            {canSubmit && writeButton}
          </AnimatedSection>
        )}

        {total > 0 && (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((review, i) => (
              <ReviewCard key={review.id} review={review} delay={(i % pageSize) * 0.06} />
            ))}
          </div>
        )}

        {total > shown.length && (
          <div className="flex justify-center">
            <Button variant="secondary" onClick={() => setVisibleCount((count) => count + pageSize)}>
              {t("reviews.showMore")}
            </Button>
          </div>
        )}

        {total === 0 && !loading && (
          <AnimatedSection className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-border bg-white p-8 text-center shadow-card">
            <h3 className="text-xl font-bold text-text-primary">{t("reviews.emptyTitle")}</h3>
            <p className="text-text-secondary">{t("reviews.emptyBody")}</p>
            {writeButton}
          </AnimatedSection>
        )}
      </Container>

      {canSubmit && (
        <Modal isOpen={formOpen} onClose={closeForm} title={t("reviews.form.title")}>
          <ReviewForm
            onClose={closeForm}
            onSubmitted={(review) => setLocalReviews((prev) => [review, ...prev])}
          />
        </Modal>
      )}
    </section>
  );
};

export default ReviewsSection;
