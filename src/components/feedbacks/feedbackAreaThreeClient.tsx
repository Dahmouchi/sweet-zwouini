"use client";
import { feedbackType } from "@/db/feedbackDataThree";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedbackThreeCard from "./feedbackThreeCard";
import 'swiper/css';
import 'swiper/css/navigation'; 

const FeedbackAreaThree = ({ data }: { data: feedbackType[] }) => {
  return (
    <div className="feedback-slides-wrapper">
      <Swiper
        spaceBetween={25}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Navigation]}
        className="feedback-slides2 mx-auto"
        data-cue="slideInUp"
      >
        {data.map((item, idx) => (
          <SwiperSlide className="single-feedback-box" key={idx}>
            <FeedbackThreeCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-container">
        <div className="button-prev">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="button-next">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAreaThree;
