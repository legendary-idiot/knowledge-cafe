import PropTypes from "prop-types";
import { HiOutlineBookmark } from "react-icons/hi";

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
  return (
    <div className="mt-4 border-b-2 border-slate-200">
      <figure className="mb-4">
        <img
          className="rounded-xl w-full"
          src={blog.cover_img}
          alt={`Cover image of ${blog.title}`}
        />
      </figure>
      <div className="flex justify-between text-lg items-start">
        <div className="flex gap-4">
          <figure className="size-16">
            <img src={blog.author_img} alt="" />
          </figure>
          <div>
            <h4 className="font-semibold">{blog.author}</h4>
            <p>Published: {blog.date_published}</p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <p>{blog.reading_time} hours read</p>
          <button
            className="text-2xl hover:text-slate-500"
            onClick={() => handleBookmarks(blog)}
          >
            <HiOutlineBookmark />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-4xl font-bold">{blog.title}</h3>
        <p className="text-xl">{blog.description}</p>
      </div>
      <button
        className="text-lg font-bold text-purple-700 mb-4"
        onClick={() => handleReadingTime(blog.reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blog;
