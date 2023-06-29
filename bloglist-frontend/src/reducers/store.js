import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './blogsReducer'
import notificationReducer from './notificationReducer'

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    notification: notificationReducer
  }
})

export default store