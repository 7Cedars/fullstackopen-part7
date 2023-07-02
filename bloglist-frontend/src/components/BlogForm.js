import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createBlog } from '../reducers/blogsReducer'
import { setNotification } from '../reducers/notificationReducer'

const BlogForm = ( ) => {
  const [newBlog, setNewBlog] = useState({ title: "", author: "", url: "" });
  const user = useSelector(state => state.users.loggedIn ) 
  const dispatch = useDispatch() 

  const addBlog = (event) => {
    event.preventDefault();

    try {
      dispatch(createBlog({
        title: newBlog.title,
        author: newBlog.author,
        url: newBlog.url,
        user: user,
        likes: 0,
      }));
      dispatch(setNotification({
        message: `Success! Blog '${newBlog.title}' by '${newBlog.author}' was saved.`,
        className: 'success'
      }))
    } catch(error) {
      dispatch(setNotification({
        message: `Blog '${newBlog.title}' was not saved. Error message: ${error}`, 
        className: 'error'
        }));
    }
    setNewBlog({ title: "", author: "", url: "" });
  };

  useEffect(() => {
    console.log("newBlog: ", newBlog);
  }, [newBlog]);

  return (
    <div>
      <h2>New Blog Entry</h2>

      <form onSubmit={addBlog}>
        <div>
          title:
          <input
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
        <div>
          author:
          <input
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
        <div>
          url:
          <input
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
