import ContactAreaOne from "@/components/contact/contactAreaOne";
import CoursesAreaOne from "@/components/courses/coursesAreaOne";
import PageHeader from "@/components/pageHeader";
import { coursesData } from "@/db/coursesData"; 

export default function Courses() { 
  return (
    <>
      <PageHeader title="Courses" />
      <div className="pb-120 border-bottom"></div>
      <CoursesAreaOne
        titleShown={false}
        data={coursesData}
        className="border-top-0 border-bottom-0"
      />
      <ContactAreaOne />
    </>
  );
};
 