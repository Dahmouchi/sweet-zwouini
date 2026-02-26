import { feedbackDataOne } from "@/db/feedbackDataOne";
import Image from "next/image";
import FeedbackOneClient from "./feedbackOneClient";

interface FeedbackOneProps {
  className?: string;
}

const FeedbackOne: React.FC<FeedbackOneProps> = ({ className }) => {
  return (
    <div
      className={`feedback-area ptb-120 position-relative z-1 ${
        className || ""
      }`}
    >
      <div
        className="container"
        data-cues="slideInUp"
        data-group="feedbackContent"
      >
        <div className="section-title text-center">
          <h2 className="fw-semibold mx-auto mb-0 text-uppercase">
            What our students say
          </h2>
        </div>

        <FeedbackOneClient data={feedbackDataOne} />
      </div>

      <div className="scroll-down-text left text-uppercase d-flex align-items-center">
        <div className="d-flex align-items-center gap-2">
          <Image
            width={24}
            height={24}
            src="/images/icons/bx-mouse.svg"
            alt="Scroll down indicator"
            loading="lazy"
          />
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackOne;
