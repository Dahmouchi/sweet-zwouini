import { feedbackType } from "@/db/feedbackDataThree";
import Image from "next/image";

interface FeedbackCardProps {
  feedback: feedbackType;
}

const FeedbackOneCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  return (
    <div className="single-feedback-item text-center">
      <blockquote className="fw-medium">"{feedback.feedback}"</blockquote>
      <div className="info">
        <div className="user-avatar">
          <Image
            width={100}
            height={100}
            src={feedback.image}
            className="rounded-circle"
            alt={`${feedback.name} - ${feedback.designation}`}
            loading="lazy"
          />
        </div>
        <h3 className="fw-semibold">{feedback.name}</h3>
        <span className="d-block user-designation">{feedback.designation}</span>
      </div>
    </div>
  );
};

export default FeedbackOneCard;
