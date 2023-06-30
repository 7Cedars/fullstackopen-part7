import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'


import Notification from "./components/Notification";
import BlogList from "./components/BlogList";

import LoginForm from "./components/LoginForm";
import UserInfo from "./components/UserInfo";
import UsersOverview from "./components/UsersOverview";

import blogService from "./services/blogs";
import { initialiseBlogs } from './reducers/blogsReducer'
import { loggedInUser, fetchAllUsers } from "./reducers/usersReducer";

const App = () => {
  const blogFormRef = useRef();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialiseBlogs())  
    
  }, [dispatch]) 

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    console.log("loggedUserJSON CALLED:", loggedUserJSON)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log("user: ",user)
      blogService.setToken(user.token);
      dispatch(loggedInUser(user)) 
    }
    dispatch(fetchAllUsers())
  }, []);

  const user = useSelector(state => {
      if (state.users) { 
        const currentUser = state.users.loggedIn
        return currentUser;
      } else {
        return null
      }
    })

  return (
    <div>
      <h2>Blogs</h2>
      <Notification />
      {user ? <UserInfo/> : <LoginForm/>}
      <Router>
        {/* <div>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/notes">notes</Link>
          <Link style={padding} to="/users">users</Link>
        </div> */}
        <Routes>
          <Route path="/" element={<BlogList /> } />
          <Route path="/users" element={<UsersOverview /> } />

          {/* <Route path="/users/:id" element={<UserOverview user={user} />} /> */}
        </Routes>     
    
      
      </Router>
    </div>
  );
};

export default App;
