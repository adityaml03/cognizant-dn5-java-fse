import { courses } from "../Data";

function CourseDetails() {
  return (
    <>
      <h2>Course Details</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </>
  );
}

export default CourseDetails;