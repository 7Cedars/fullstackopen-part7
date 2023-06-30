import { useSelector } from 'react-redux'
import Togglable from "./Togglable";
import BlogForm from "./BlogForm";
import { useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'

const BlogList = () => {
  const blogFormRef = useRef();

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const blogs = useSelector(state => {
    console.log("blogs at bloglist: ", state.blogs)
    
    if (state.blogs) { 
      const currentBlogs = state.blogs
      return currentBlogs;
    } else {
      return [];
    }
  })

  const user = useSelector(state => {
    console.log("logged in user in Redux state : ", state.users.loggedIn)

    return (state.users.loggedIn)
  })

  
  return (
  <div>
    {user && (
        <div>
          <Togglable buttonLabel="add new blog" ref={blogFormRef}>
            <BlogForm user={user} />
          </Togglable>
        </div>
      )}

    {blogs.map((blog) => (
        <div style={blogStyle} key={blog.id}> 
         {<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>} 
        </div> 
      ))}
  </div>
  )
}

export default BlogList