import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../reducers/blogsReducer";
import { setNotification } from "../reducers/notificationReducer";

const BlogForm = () => {
  const [newBlog, setNewBlog] = useState({ title: "", author: "", url: "" });
  const user = useSelector((state) => state.users.loggedIn);
  const dispatch = useDispatch();

  const addBlog = (event) => {
    event.preventDefault();

    try {
      dispatch(
        createBlog({
          title: newBlog.title,
          author: newBlog.author,
          url: newBlog.url,
          user: user,
          likes: 0,
        })
      );
      dispatch(
        setNotification({
          message: `Success! Blog '${newBlog.title}' by '${newBlog.author}' was saved.`,
          className: "success",
        })
      );
    } catch (error) {
      dispatch(
        setNotification({
          message: `Blog '${newBlog.title}' was not saved. Error message: ${error}`,
          className: "error",
        })
      );
    }
    setNewBlog({ title: "", author: "", url: "" });
  };

  useEffect(() => {
    console.log("newBlog: ", newBlog);
  }, [newBlog]);

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">New Blog Entry</h2>
        <p class="text-sm text-gray-600">Add a new Blog post here.</p>
      </div>

      <form onSubmit={addBlog}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <label
              for="blogTitle"
              className="inline-block text-sm text-gray-800 mt-2 py-3"
            >
              Title:
            </label>
          </div>
          <div className="col-span-10 text-sm text-gray-800 mt-2">
            <input
              className="px-3 w-full h-full shadow-sm border text-sm border-gray-200 hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 transition-all duration-300 rounded-md p-1"
              type="text"
              value={newBlog.title}
              placeholder="Title of blog"
              id="blogTitle"
              onChange={(event) =>
                setNewBlog({
                  ...newBlog,
                  title: event.target.value,
                })
              }
            />
          </div>

          <div className="col-span-2">
            <label
              for="blogAuthor"
              className="inline-block text-sm text-gray-800 mt-2 py-2"
            >
              Author:
            </label>
          </div>
          <div className="col-span-10">
            <input
              className="px-3 w-full h-full shadow-sm border text-sm border-gray-200 hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 transition-all duration-300 rounded-md p-1"
              type="text"
              value={newBlog.author}
              placeholder="Author of blog"
              id="blogAuthor"
              onChange={(event) =>
                setNewBlog({
                  ...newBlog,
                  author: event.target.value,
                })
              }
            />
          </div>

          <div className="col-span-2">
            <label
              for="blogUrl"
              className="inline-block text-sm text-gray-800 mt-2 py-2"
            >
              Url:
            </label>
          </div>
          <div className="col-span-10">
            <input
              className="px-3 w-full h-full shadow-sm border text-sm border-gray-200 hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 transition-all duration-300 rounded-md p-1"
              type="text"
              value={newBlog.url}
              placeholder="Url of blog"
              id="blogUrl"
              onChange={(event) =>
                setNewBlog({
                  ...newBlog,
                  url: event.target.value,
                })
              }
            />
          </div>
        </div>
        <button
          className="w-full py-2 mt-7 px-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm"
          type="submit"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
