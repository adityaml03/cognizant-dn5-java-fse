import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "40px"
      }}
    >
      <div style={{ borderRight: "3px solid green", paddingRight: "30px" }}>
        {showCourses && <CourseDetails />}
      </div>

      <div style={{ borderRight: "3px solid green", paddingRight: "30px" }}>
        {showBooks ? <BookDetails /> : <h3>No Books</h3>}
      </div>

      <div>
        {showBlogs ? <BlogDetails /> : null}
      </div>
    </div>
  );
}

export default App;