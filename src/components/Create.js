import { useState } from "react";
import useRequest from "../hooks/useRequest";
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const {post, isPending} = useRequest('http://localhost:8000/blogs')
  const navigate = useNavigate()

  const handleSubmit = (e)=> {
      e.preventDefault()
      const blog = {title, body, author} 
      post(blog)
      navigate('/')
  }
  return (
    <div className="create">
      <h2>Add a new Blog</h2>

      <form onSubmit={handleSubmit}>
        <label> Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog body: </label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label> Blog Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">yoshi</option>
          <option value="yura">Yura</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled> Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
