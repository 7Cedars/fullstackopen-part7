import { useSelector } from 'react-redux'
import Blog from "./Blog";
import Togglable from "./Togglable";
import BlogForm from "./BlogForm";
import { useRef } from "react";

const BlogList = () => {
  const blogFormRef = useRef();
  const blogs = useSelector(state => {
    console.log("blogs at bloglist: ", state)
    
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
      <Blog
        key={blog.id}
        blog={blog}
      />
    ))}
  </div>
  )
}

export default BlogList