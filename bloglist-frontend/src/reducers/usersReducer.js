import { createSlice } from '@reduxjs/toolkit'
import userService from "../services/users";
import loginService from "../services/login";
import blogService from "../services/blogs";

// need helper function here? 
// const compareLikes = (a, b) => {
//     return b.likes - (a.likes + 1);
//   };

const usersSlice = createSlice({
  name: 'users', 
  initialState: null,
  reducers: {
    loggedInUser(state, action) { 
      const loggedInUser = action.payload
      return loggedInUser
    },
    allUsers(state, action) { 
      const allUsers = action.payload
      return allUsers
    },
    individualUser(state, action) {
      state.push(action.payload)
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
    const user = await loginService.login({
      username,
      password,
    });
    blogService.setToken(user.token);
    window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
    dispatch(loggedInUser(user))
  }
}

export const initialiseUser = (user) => {
    dispatch(loggedInUser(user))
}

export const fetchAllUsers = () => {
  return async dispatch => {
    const allUsers = await userService.getAll()
    dispatch(allUsers(allUsers))
  }
}

export const fetchSingleUser = id => {
  return async dispatch => {
    const individualUser = await userService.get(id)
    dispatch(individualUser(individualUser))
  }
}