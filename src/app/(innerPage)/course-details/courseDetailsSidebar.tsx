import Link from "next/link";

const courses = [
    { id: 1, name: "English Speaking" },
    { id: 2, name: "Hindi Speaking" },
    { id: 3, name: "Urdu Speaking" },
    { id: 4, name: "German Speaking" },
    { id: 5, name: "Arabic Speaking" },
];

const CourseDetailsSidebar = () => {
    return (
        <div className="course-details-sidebar">
            <div className="course-list">
                <h3 className="fw-semibold">Course List</h3>
                <ul className="p-0 m-0 list-unstyled">
                    {courses.map((course, idx) => (
                        <li key={course.id}>
                            <Link
                                href="course-details"
                                className={`fw-medium d-block${idx === 0 ? " active" : ""}`}
                            >
                                {course.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="enroll-form">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control shadow-none bg-transparent"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control shadow-none bg-transparent"
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-select shadow-none bg-transparent">
                            <option defaultValue={"Select Course"}>Select Course</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>
                                    {course.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="default-btn d-block w-100">
                        Enroll Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CourseDetailsSidebar;
