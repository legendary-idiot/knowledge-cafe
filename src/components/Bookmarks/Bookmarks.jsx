import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-purple-50 rounded-lg border-2 border-purple-600 text-2xl font-bold text-purple-500 text-center py-4 my-4 ">
        <h2>Total Time Read: {readingTime} hours </h2>
      </div>
      <div className=" bg-gray-200 rounded-lg p-4">
        <h2 className="text-2xl font-bold text-center">
          Bookmarked: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => {
          return (
            <Bookmark
              key={idx}
              bookmark={bookmark}
              readingTime={readingTime}
            ></Bookmark>
          );
        })}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};
export default Bookmarks;
