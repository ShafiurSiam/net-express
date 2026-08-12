import { Star, Quote } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection.jsx";

const TestimonialCard = ({ testimonial, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-7 shadow-card">
        <Quote size={28} className="text-primary-red/30" />
        <p className="flex-1 text-text-secondary">"{testimonial.quote}"</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < testimonial.rating ? "fill-primary-red text-primary-red" : "text-border"}
            />
          ))}
        </div>
        <div>
          <p className="font-semibold text-text-primary">{testimonial.name}</p>
          <p className="text-sm text-text-secondary">{testimonial.area}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialCard;
