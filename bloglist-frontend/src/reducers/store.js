import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './NotificationReducer'

const store = configureStore({
  reducer: {
    notification: notificationReducer
  }
})

export default store