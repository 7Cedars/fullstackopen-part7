import { createSlice } from '@reduxjs/toolkit'
import blogService from "../services/blogs";

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
    const newBlog = await blogService.create(blogObject)
    dispatch(addBlog(newBlog))
  }
}

export const likeBlog = likedBlog => {
  return async dispatch => {    
    const updatedBlog = await blogService.update(likedBlog)
    dispatch(updateBlog(updatedBlog));
  }
}

export const removeBlogs = id => {
  return async dispatch => {    
    await blogService.deleteItem(id)
    dispatch(removeBlog(id));
  }
}

