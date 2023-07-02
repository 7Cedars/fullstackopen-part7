import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Notification from "./components/Notification";
import BlogList from "./components/BlogList";
import UsersOverview from "./components/UsersOverview";
import UserView from "./components/UserView";
import BlogView from "./components/BlogView";
import Menu from "./components/Menu";

import blogService from "./services/blogs";
import { initialiseBlogs } from './reducers/blogsReducer'
import { loggedInUser, fetchAllUsers } from "./reducers/usersReducer";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialiseBlogs())    
  }, [dispatch]) 

  useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(initialiseBlogs())  
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    console.log("loggedUserJSON CALLED:", loggedUserJSON)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log("user: ",user)
      blogService.setToken(user.token);
      dispatch(loggedInUser(user)) 
    }
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <Notification />      
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<BlogList /> } />
          <Route path="/users" element={<UsersOverview /> } />
          <Route path="/users/:id" element={<UserView />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogView />} />
        </Routes>           
      </Router>
    </div>
  );
};

export default App;
