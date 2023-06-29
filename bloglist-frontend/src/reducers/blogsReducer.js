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
    removeBlog(state, action) {
      return null
      // const payload = action.payload
      // return payload
    },
    updateLikes(state, action) {      
      return null
    }
  },
})

export const { 
  setBlogs, 
  addBlog,
  removeBlog, 
  updateLikes
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

// const addBlog = (blogObject) => {
//   blogFormRef.current.toggleVisibility();
//   console.log("blogObject: ", blogObject);
//   blogService
//     .create(blogObject)
//     .then((returnedBlog) => {
//       setBlogs(blogs.concat(returnedBlog));
//       console.log("returnedBlog: ", returnedBlog.user);

//       dispatch(setNotification({
//         message: `Success! Blog '${blogObject.title}' by '${blogObject.author}' was saved.`,
//         className: 'success'
//       }
//         )) 
//     })
//     .catch((error) => {
//       dispatch(setNotification({
//         message: `Blog '${blogObject.title}' was not saved. Error message: ${error}`, 
//         className: 'error'
//       })); 
//     });
// };

// const updateLikes = (id, newLikes) => {
//   const blog = blogs.find((b) => b.id === id);
//   const changedBlog = { ...blog, likes: newLikes };
//   blogService
//     .update(id, changedBlog)
//     .then((returnedBlog) => {
//       setBlogs(blogs.map((blog) => (blog.id !== id ? blog : returnedBlog)));
//     })
//     .catch((error) => {
//       dispatch(setNotification({
//         message: `Additional like was not saved. You are not logged in.`, 
//         className: 'error'
//       })); 
//     });
// };

// const removeBlogs = (id) => {
//   console.log("id :", id);
//   const blog = blogs.find((b) => b.id === id);

//   if (window.confirm(`Do you really want to delete ${blog.title}?`)) {
//     blogService
//       .deleteItem(id)
//       .then(setBlogs(blogs.filter((blog) => blog.id !== id)));
//   }
// };

