import BlogList from "./BlogList";
import useRequest from "../hooks/useRequest";
import { useEffect } from "react";


const Home = () => {
  let url = 'http://localhost:8000/blogs'
  const { data: blogs, isPending, error, get} = useRequest(url)
  useEffect(()=>{
    get()
  }, [])
  return (
    <div className="home">
      {error && <div>{error}</div>}  
      {isPending && <div> Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
