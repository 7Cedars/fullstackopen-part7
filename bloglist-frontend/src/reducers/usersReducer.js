import { createSlice } from '@reduxjs/toolkit'
import userService from "../services/users";
import loginService from "../services/login";
import blogService from "../services/blogs";
import { setNotification } from '../reducers/notificationReducer'

const usersAtStart = {
  loggedIn: null, 
  all: null
}

const usersSlice = createSlice({
  name: 'users', 
  initialState: usersAtStart,
  reducers: {
    loggedInUser(state, action) { 
      state.loggedIn = action.payload
    },
    allUsers(state, action) { 
      state.all = action.payload
    }
  },
})

export const { 
  loggedInUser, 
  allUsers, 
  individualUser,
} = usersSlice.actions
export default usersSlice.reducer

export const loginUser = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username,
        password,
      });
      blogService.setToken(user.token);
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      dispatch(loggedInUser(user))
      dispatch(setNotification({message: 'Successful login', className: "success"}))
    } catch {
      dispatch(setNotification({message: 'Login failed. Username and/or password not found.', className: "error"}))
    }
  }
}

export const fetchAllUsers = () => {
  return async dispatch => {
    const all = await userService.getAll()
    console.log("fetchAllUsers:" , all)
    dispatch(allUsers(all))
  }
}
