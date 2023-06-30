import { useSelector } from 'react-redux'
import Blog from "./Blog";

const BlogList = () => {
  const blogs = useSelector(state => {
    console.log("blogs at bloglist: ", state)
    
    if (state.blogs) { 
      const currentBlogs = state.blogs
      return currentBlogs;
    } else {
      return [];
    }
  })
  
  return (
  <div>
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