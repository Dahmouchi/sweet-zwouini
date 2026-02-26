"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PartnerType } from "./partners";

import "swiper/css"; 

const PartnersClient = ({ data }: { data: PartnerType[] }) => {
  return (
    <div className="partners-area">
      <div className="container-fluid">
        <Swiper
          autoplay
          loop
          breakpoints={{
            0: {
              spaceBetween: 25,
              slidesPerView: 2,
            },
            576: {
              spaceBetween: 25,
              slidesPerView: 4,
            },
            768: {
              spaceBetween: 25,
              slidesPerView: 3,
            },
            992: {
              spaceBetween: 25,
              slidesPerView: 4,
            },
            1200: {
              spaceBetween: 40,
              slidesPerView: 4,
            },
            1400: {
              spaceBetween: 40,
              slidesPerView: 5,
            },
            1600: {
              spaceBetween: 50,
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          className="partners-slides"
          data-cue="slideInUp"
        >
          {data.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="single-partner-item d-flex align-items-center justify-content-between"
            >
              <Image
                width={158}
                height={30}
                src={item.partner}
                alt="partner-image"
              />
              <Image width={40} height={40} src={item.star} alt="star" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnersClient;
