import { createSlice } from '@reduxjs/toolkit'
import userService from "../services/users";
import loginService from "../services/login";
import blogService from "../services/blogs";

// need helper function here? 
// const compareLikes = (a, b) => {
//     return b.likes - (a.likes + 1);
//   };

const usersAtStart = {
  loggedIn: null, 
  all: [],
  selected: null 
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
    },
    individualUser(state, action) {
      state.selected = action.payload
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

// export const initialiseUser = (user) => {
//     dispatch(loggedInUser(user))
// }

export const fetchAllUsers = () => {
  return async dispatch => {
    const all = await userService.getAll()
    dispatch(allUsers(all))
  }
}

export const fetchSingleUser = id => {
  return async dispatch => {
    const individualUser = await userService.get(id)
    dispatch(individualUser(individualUser))
  }
}