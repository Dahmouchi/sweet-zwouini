import { coursesDataThree } from "@/db/coursesData";
import Image from "next/image";
import Link from "next/link";

const CoursesAreaThree = () => {
  return (
    <div className="courses-area pt-120 pb-95">
      <div className="container">
        <div className="section-title mb-40 text-center">
          <h2 className="fw-semibold fs-32 mx-auto mb-0 text-uppercase">
            Our popular courses
          </h2>
        </div>
        <div className="courses-list mx-auto">
          {
            <div
              className="row"
              data-cues="slideInUp"
              data-group="coursesContent"
            >
              {coursesDataThree.map((course, idx) => (
                <div className="col-lg-6 col-md-6" key={idx}>
                  <div className="course-item mb-25">
                    <div className="d-flex align-items-center">
                      <Image
                        width={60}
                        height={60}
                        src={course.icon ? course.icon : ""}
                        alt="icon"
                      />
                      <h3 className="mb-0 fw-semibold">
                        <Link href={"course-details"}>{course.title}</Link>
                      </h3>
                    </div>
                    <p>{course.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="instructor d-flex align-items-center">
                        <Image
                          width={50}
                          height={50}
                          src={course.instructor.image}
                          className="rounded-circle"
                          alt="user-image"
                        />
                        <div>
                          <h4 className="fw-medium">
                            {course.instructor.name}
                          </h4>
                          <span className="d-block">
                            {course.instructor.role}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={"course-details"}
                        className="link-btn d-inline-block"
                      >
                        <Image
                          width={20}
                          height={20}
                          src="/images/icons/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CoursesAreaThree;
