"use client";
import { feedbackType } from "@/db/feedbackDataThree";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedbackTwoCard from "./feedbackTwoCard";

import "swiper/css";
import "swiper/css/pagination";

const FeedbackTwo = ({
  feedbackDataTwo,
}: {
  feedbackDataTwo: feedbackType[];
}) => {
  return (
    <div className="testimonials-container">
      <div className="container-fluid">
        <Swiper
          spaceBetween={25}
          loop
          slidesPerGroup={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2500}
          pagination={{
            clickable: true,
            el: ".pagination-el",
            // bulletClass: "testimonial-bullet",
            // bulletActiveClass: "testimonial-bullet-active",
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-slides position-relative"
          data-cue="slideInUp"
        >
          {feedbackDataTwo.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <FeedbackTwoCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pagination-el"></div>
    </div>
  );
};

export default FeedbackTwo;
