import { feedbackType } from "@/db/feedbackDataThree";
import Image from "next/image";

const FeedbackTwoCard = ({ testimonial }: { testimonial: feedbackType }) => {
  return (
    <div className="single-testimonial-item">
      <Image
        width={160}
        height={30}
        src={testimonial.rating ? testimonial.rating : ""}
        alt="star"
      />
      <p>{testimonial.feedback}</p>
      <div className="info d-flex align-items-center">
        <Image
          width={50}
          height={50}
          src={testimonial.image}
          className="rounded-circle"
          alt="user-image"
        />
        <div>
          <h4 className="fw-medium">{testimonial.name}</h4>
          <span className="d-block">{testimonial.designation}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTwoCard;
