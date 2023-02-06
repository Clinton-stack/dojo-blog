import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending, get, remove } = useRequest(
    "http://localhost:8000/blogs/" + id
  );
  const navigate = useNavigate();
  const handleDelete = () => {
    remove(id);
    navigate("/");
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <div className="blog-details">
      {isPending && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => handleDelete()}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
