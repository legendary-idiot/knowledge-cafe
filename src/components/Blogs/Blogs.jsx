import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("./data/posts.json");
      const data = await res.json();
      setBlogs(data);
    })();
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog, idx) => {
        return <Blog key={idx} blog={blog}></Blog>;
      })}
    </div>
  );
};

export default Blogs;
