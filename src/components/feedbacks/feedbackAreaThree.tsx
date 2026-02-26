import { feedbackDataThree } from "@/db/feedbackDataThree";
import Image from "next/image";
import FeedbackAreaThreeClient from "./feedbackAreaThreeClient";

const FeedbackAreaThree = () => {
  return (
    <div className="feedback-area ptb-120 position-relative z-1 bg-282828">
      <div className="container">
        <div className="section-title mb-40 text-center" data-cue="slideInUp">
          <h2 className="fw-semibold fs-32 mx-auto mb-0 text-uppercase">
            In Their Own Words: Student Testimonials
          </h2>
        </div>
        <FeedbackAreaThreeClient data={feedbackDataThree} />
        <div
          className="feedback-users-list"
          data-cues="slideInUp"
          data-group="feedbackContent"
        >
          <Image
            width={94}
            height={94}
            src="/images/users/user10.jpg"
            className="rounded-circle"
            alt="user10"
          />
          <Image
            width={74}
            height={74}
            src="/images/users/user11.jpg"
            className="rounded-circle"
            alt="user11"
          />
          <Image
            width={60}
            height={60}
            src="/images/users/user15.jpg"
            className="rounded-circle"
            alt="user15"
          />
          <Image
            width={60}
            height={60}
            src="/images/users/user13.jpg"
            className="rounded-circle"
            alt="user13"
          />
          <Image
            width={80}
            height={80}
            src="/images/users/user6.jpg"
            className="rounded-circle"
            alt="user6"
          />
          <Image
            width={94}
            height={94}
            src="/images/users/user12.jpg"
            className="rounded-circle"
            alt="user12"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackAreaThree;
