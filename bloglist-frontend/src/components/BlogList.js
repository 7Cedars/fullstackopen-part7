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
  blogs.map((blog) => (
    <Blog
      key={blog.id}
      blog={blog}
      // updateLikes={updateLikes}
      // removeBlogs={removeBlogs}
      // user={user}
    />
  ))
  )
}

export default BlogList