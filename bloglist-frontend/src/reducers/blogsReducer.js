import { createSlice } from '@reduxjs/toolkit'
import blogService from "../services/blogs";
import { setNotification } from '../reducers/notificationReducer'

const compareLikes = (a, b) => {
    return b.likes - (a.likes + 1);
  };

const blogsSlice = createSlice({
  name: 'blogs', 
  initialState: [],
  reducers: {
    setBlogs(state, action) { 
      const blogs = action.payload
      return blogs.sort(compareLikes)
    },
    addBlog(state, action) {
      state.push(action.payload)
    },
    updateBlog(state, action) {      
      const id = action.payload.id
      const changedBlogs = state.map(blog =>
        blog.id !== id ? blog : action.payload
      )
      return changedBlogs.sort(compareLikes)
    },
    removeBlog(state, action) {
      const id = action.payload
      const changedBlogs = state.filter((blog) => blog.id !== id)
      return changedBlogs
    },
  },
})

export const { 
  setBlogs, 
  addBlog,
  updateBlog,
  removeBlog, 
} = blogsSlice.actions
export default blogsSlice.reducer

export const initialiseBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = blogObject => {
  return async dispatch => {
    try {
      const newBlog = await blogService.create(blogObject)
      dispatch(addBlog(newBlog))
      dispatch(setNotification({message: 'Blog successfully created!', className: "success"}))
    } catch (error) {
      dispatch(setNotification({message: `Error. Blog not created. Full error message: ${error}`, className: "error"}))
    }
  }
}

export const addBlogComment = ( {comment, id} ) => {
  console.log("At addBlogComment: Comment: ", comment, "id: ", id ) 

  return async dispatch => {    
    try {
      const updatedBlog = await blogService.comment(comment, id)
      dispatch(updateBlog(updatedBlog));
      console.log("At addBlogComment updatedBlog: ", updatedBlog) 
      dispatch(setNotification({message: 'Succes! Blog comment added', className: "success"}))
    } catch {
      dispatch(setNotification({message: 'Something went wrong adding comment. Full error:', className: "error"}))
    }
  }
}

export const likeBlog = likedBlog => {
  return async dispatch => {    
    try {
      const updatedBlog = await blogService.update(likedBlog)
      dispatch(updateBlog(updatedBlog));
    } catch {
      dispatch(setNotification({message: 'You can only like blogs when logged in', className: "error"}))
    }
  }
}

export const removeBlogs = id => {
  return async dispatch => {    
    await blogService.deleteItem(id)
    dispatch(removeBlog(id));
  }
}

