"use client";
import { courseType } from "@/db/upcomingCoursesData";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation'; 


const UpcomingCoursesSlider = ({ courses }: { courses: courseType[] }) => {
  return (
    <div className="position-relative upcoming-courses-slides-container">
      {
        <Swiper
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
          loop
          navigation={{
            nextEl: ".next-nav",
            prevEl: ".prev-nav",
          }}
          modules={[Navigation]}
          className="upcoming-courses-slides mx-auto"
        >
          {courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <Card course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
      <div className="d-flex justify-content-center d-lg-block">
        <button className="prev-nav">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="next-nav">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default UpcomingCoursesSlider;

const Card = ({ course }: { course: courseType }) => {
  return (
    <div className="single-upcoming-course-box position-relative">
      <div className="image position-relative">
        {course.bgImages.map((img: string, i: number) => (
          <Image
            width={407}
            height={244}
            sizes="100vw"
            key={i}
            src={img}
            className="bg-image"
            alt="bg-image"
          />
        ))}
      </div>
      <div className="content">
        <h3 className="fw-semibold">{course.title}</h3>
        <ul className="p-0 list-unstyled">
          <li className="fw-medium">
            Language level : <span className="fw-normal">{course.level}</span>
          </li>
          <li className="fw-medium">
            Starting Date : <span className="fw-normal">{course.date}</span>
          </li>
        </ul>
        <div className="instructor d-flex align-items-center">
          <Image
            width={50}
            height={50}
            src={course.instructor.image}
            className="rounded-circle"
            alt="user-image"
          />
          <div>
            <h4 className="fw-medium">{course.instructor.name}</h4>
            <span className="d-block">Instructor</span>
          </div>
        </div>
      </div>
      <Link href="course-details" className="default-btn">
        Enroll Now
      </Link>
    </div>
  );
};
