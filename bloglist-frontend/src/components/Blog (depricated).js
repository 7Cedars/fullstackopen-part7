import { useState } from "react";
import { likeBlog, removeBlogs } from '../reducers/blogsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
  
  console.log("BLOG: ", blog)
  // const user = useSelector(state => {
  //   if (state.users.loggedIn) { 
  //     const currentUser = state.users.loggedIn
  //     // console.log("loggedInUser at Blog: ", currentUser)
  //     return currentUser;
  //   } else {
  //     return null
  //   }
  // })

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle}>
      {blog.name}
      <Link to={`/blogs/${blog.id}`}>{blog.name}</Link>
    </div> 
  )
{/* 
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
    </div> */}

};

export default Blog;
