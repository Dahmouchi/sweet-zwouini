import { courses } from "@/db/upcomingCoursesData";
import UpcomingCoursesSlider from "./upcomingCoursesSlider";

const UpcomingCourses = () => {
  return (
    <div className="upcoming-courses-area border-top border-bottom bg-f3f3f3 ptb-120">
      <div
        className="container"
        data-cues="slideInUp"
        data-group="upcomingCoursesContent"
      >
        <div className="section-title text-center">
          <h2 className="fw-semibold mx-auto mb-0 text-uppercase">
            Upcoming Courses These will be started soon
          </h2>
        </div>
        <UpcomingCoursesSlider courses={courses} />
      </div>
    </div>
  );
};

export default UpcomingCourses;
