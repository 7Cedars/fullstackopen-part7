import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './blogsReducer'
import notificationReducer from './notificationReducer'
import usersReducer from './usersReducer'

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer,
    notification: notificationReducer
  }
})

export default store