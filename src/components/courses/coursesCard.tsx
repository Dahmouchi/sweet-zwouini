import { Course } from "@/db/coursesData";
import Image from "next/image";
import Link from "next/link";

const CoursesCard = ({ course }: { course: Course }) => {
  return (
    <div className="single-course-box mb-25 position-relative">
      <h3 className="fw-semibold">
        <Link href={"course-details"}>{course.title}</Link>
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
          <span className="d-block">{course.instructor.role}</span>
        </div>
      </div>
      <Link href={"course-details"} className="default-btn">
        Enroll Now
      </Link>
    </div>
  );
};

export default CoursesCard;
