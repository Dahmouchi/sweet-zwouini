"use client";
import { feedbackType } from "@/db/feedbackDataThree";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedbackOneCard from "./feedbackOneCard";

import "swiper/css";
import "swiper/css/pagination";


interface FeedbackSliderProps {
  data: feedbackType[];
}

const FeedbackOneClient: React.FC<FeedbackSliderProps> = ({ data }) => {
  return (
    <div className="feedback-slides-container">
      <Swiper
        loop
        spaceBetween={25}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".pagination-el",
          bulletClass: "feedback-bullet",
          bulletActiveClass: "feedback-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        className="feedback-slides mx-auto"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((feedback, idx) => (
          <SwiperSlide key={idx}>
            <FeedbackOneCard feedback={feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination-el"></div>
    </div>
  );
};

export default FeedbackOneClient;
 