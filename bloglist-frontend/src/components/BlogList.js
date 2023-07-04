import { useSelector } from 'react-redux'
import Togglable from "./Togglable";
import BlogForm from "./BlogForm";
import { useRef } from "react";
import { Link } from 'react-router-dom'

const BlogList = () => {
  const blogFormRef = useRef();

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
  <div className='grid grid-cols-1 gap-2 '>
    {user && (
        <div className='group flex flex-col h-full '>
          <Togglable buttonLabel="add new blog" ref={blogFormRef}>
            <BlogForm user={user} />
          </Togglable>
        </div>
      )} 
      {blogs.map((blog) => (
          <div className ="group flex flex-col h-full border border-gray-200 hover:border-blue-600 transition-all duration-300 rounded-md p-2" key={blog.id}> 
          {<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>} 
          </div> 
      ))}
  </div>
  )
  
}

export default BlogList