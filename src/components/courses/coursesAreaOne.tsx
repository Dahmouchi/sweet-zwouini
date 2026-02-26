import { Course } from "@/db/coursesData";
import Link from "next/link";
import CoursesCard from "./coursesCard";

interface PropsType {
  titleShown?: boolean;
  className?: string;
  data: Course[];
}
const CoursesAreaOne = ({ titleShown, className, data }: PropsType) => {
  return (
    <div
      className={`courses-area border-bottom border-top bg-f3f3f3 pt-120 pb-95 ${className}`}
    >
      <div className="container">
        {titleShown && (
          <div className="section-title position-relative">
            <h2 className="mb-0 fw-semibold text-uppercase">
              Our Popular Courses
            </h2>
            <Link href="courses" className="default-btn">
              Explore All Courses
            </Link>
          </div>
        )}
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="CoursesContent"
        >
          {data.map((course, idx) => (
            <div key={idx} className="col-xl-4 col-md-6">
              <CoursesCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesAreaOne;
