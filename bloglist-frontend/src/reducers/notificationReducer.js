import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification', 
  initialState: null,
  reducers: {
    createNotification(state, action) {
      const payload = action.payload
      return payload
    },
    removeNotification(state, action) {      
      return null
    }
  },
})

export const { 
  createNotification, 
  removeNotification
} = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = (payload) => {
  return async dispatch => {
    dispatch(createNotification(payload))
    setTimeout((payload) => { dispatch(removeNotification(payload))}, 5000) 
  }
}
