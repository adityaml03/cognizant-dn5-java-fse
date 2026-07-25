import { blogs } from "../Data";

function BlogDetails() {
  return (
    <>
      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </>
  );
}

export default BlogDetails;