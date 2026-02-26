import ContactAreaOne from "@/components/contact/contactAreaOne";
import PageHeader from "@/components/pageHeader";
import Image from "next/image";
import CourseDetailsSidebar from "./courseDetailsSidebar";

export default function CourseDetails() {  
  return (
    <>
      <PageHeader title="Course Details" />
      <div className="pb-120 border-bottom"></div>
      <div className="course-details-area bg-f3f3f3 ptb-120">
        <div className="container">
          <div
            className="row"
            data-cues="slideInUp"
            data-group="courseDetailsContent"
          >
            <div className="col-lg-4 col-md-12">
              <CourseDetailsSidebar />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="course-details-desc">
                <div className="image">
                  <Image
                    width={851}
                    height={557}
                    sizes="100vw"
                    src="/images/course-details.jpg"
                    alt="course-details-image"
                  />
                </div>
                <h2 className="fw-semibold">English Speaking</h2>
                <p>
                  Embark on a transformative journey to enhance your English
                  communication skills. This comprehensive course is designed
                  for learners of all levels, from beginners to advanced
                  speakers. Focused on practical communication, the course aims
                  to build confidence in spoken English through interactive
                  sessions and real-life applications.
                </p>
                <h3 className="fw-semibold">Course Duration:</h3>
                <ul>
                  <li>
                    Choose from flexible schedules: 8-week intensive course or
                    12-week standard.
                  </li>
                  <li>
                    Classes conducted twice a week, with each session lasting 90
                    minutes.
                  </li>
                </ul>
                <h3 className="fw-semibold">Course Objectives:</h3>
                <ol>
                  <li>Develop fluency in spoken English.</li>
                  <li>Enhance pronunciation and articulation.</li>
                  <li>Build a strong foundation in grammar and vocabulary.</li>
                  <li>Improve listening and comprehension skills.</li>
                  <li>Gain confidence in diverse communication scenarios.</li>
                </ol>
                <div className="instructor d-flex align-items-center">
                  <Image
                    width={100}
                    height={100}
                    src="/images/users/user14.jpg"
                    className="rounded-circle"
                    alt="user-image"
                  />
                  <div>
                    <h4 className="fw-medium">Jeffrey E. Walton</h4>
                    <span className="d-block">
                      Instructor, English Speaking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactAreaOne/>
    </>
  );
};
 
