import { coursesData } from "@/db/coursesData";
import Image from "next/image";
import Link from "next/link";

const CoursesAreaTwo = () => {
  return (
    <div className="courses-area pb-95">
      <div className="container">
        <div className="section-title d-md-flex align-items-center justify-content-between">
          <div className="title">
            <h2 className="fs-32 mb-0 fw-semibold text-uppercase">
              Our Popular Courses
            </h2>
            <p>
              Embark on an Immersive Multilingual Experience: Discover Our Wide
              Range of Language Courses Designed to Cater.
            </p>
          </div>
          <Link
            href="courses"
            className="link-btn d-inline-block text-center rounded-circle fw-medium"
          >
            <span className="d-block">Explore All Courses</span>
            <Image
              width={20}
              height={20}
              src="/images/icons/diagonal-arrow-right-up.svg"
              alt="diagonal-arrow-right-up"
            />
          </Link>
        </div>
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="coursesContent"
        >
          {coursesData.slice(0, 3).map((course, idx) => (
            <div key={idx} className="col-lg-4 col-sm-6">
              <div className="single-course-item bg-f6ffeb mb-25 position-relative">
                <div className="number lh-1 fw-semibold">0{idx + 1}</div>
                <h3 className="fw-semibold">
                  <Link href="course-details">{course.title}</Link>
                </h3>
                <p>{course.description}</p>
                <div className="instructor d-flex align-items-center">
                  <Image
                    width={50}
                    height={50}
                    sizes="100vw"
                    src={course.instructor.image}
                    className="rounded-circle"
                    alt="user-image"
                  />
                  <div>
                    <h4 className="fw-medium">{course.instructor.name}</h4>
                    <span className="d-block">Instructor</span>
                  </div>
                </div>
                <Link href="course-details" className="link-btn d-inline-block">
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/arrow-right-up.svg"
                    alt="arrow-right-up"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesAreaTwo;
