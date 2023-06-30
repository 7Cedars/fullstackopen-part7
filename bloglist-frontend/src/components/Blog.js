import { useState } from "react";
import { likeBlog, removeBlogs } from '../reducers/blogsReducer'
import { useDispatch, useSelector } from 'react-redux'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  
  const user = useSelector(state => {
    if (state.users.loggedIn) { 
      const currentUser = state.users.loggedIn
      console.log("loggedInUser at Blog: ", currentUser)
      return currentUser;
    } else {
      return null
    }
  })

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const [details, setDetails] = useState(false);

  const toggleDetails = () => {
    setDetails(!details);
    console.log(details)
  };

  const addLike = (event) => {
    event.preventDefault();
    const likedBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(likeBlog(likedBlog));  
  };

  const removeBlog = (event) => {
    event.preventDefault();
      if (window.confirm(`Do you really want to delete ${blog.title}?`)) {
        dispatch(removeBlogs(blog.id)) 
      }   
  };

  return (
    <div style={blogStyle}>
      <div className="blog">
        {`'${blog.title}' by '${blog.author}'.`}
        <button onClick={toggleDetails}> {details ? "hide" : "view"} </button>
      </div>

      {details ? (
        <div>
          <div className="blogUrls"> {`Url: '${blog.url}' `} </div>
          <div className="blogLikes">
            {" "}
            {`Blog likes: '${blog.likes}' `}{" "}
            <button onClick={addLike} id="like-input">
              {" "}
              Like{" "}
            </button>{" "}
          </div>
          <div className="blogUsername">
            {" "}
            {`Created by: '${blog.user.name}' `}{" "}
          </div> 
          {user && user.username === blog.user.username ? (
            <div className="blogRemoveButton">
              {" "}
              <button onClick={removeBlog}> Remove </button>{" "}
            </div>
          ) : null} 
        </div>
      ) : null}
    </div>
  );
};

export default Blog;
