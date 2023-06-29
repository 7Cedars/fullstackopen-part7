import { useEffect, useRef, useContext } from "react";
import { useDispatch } from 'react-redux'

import Togglable from "./components/Togglable";
import Notification from "./components/Notification";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";
import UserInfo from "./components/UserInfo";

import blogService from "./services/blogs";
import { initialiseBlogs } from './reducers/blogsReducer'
import UserContext from './UserContext'

const App = () => {
  const blogFormRef = useRef();
  const dispatch = useDispatch()
  const [user, userDispatch] = useContext(UserContext)

  useEffect(() => {
    dispatch(initialiseBlogs())  
  }, [dispatch]) 

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      userDispatch({type: 'CREATE', payload: user})
      blogService.setToken(user.token);
    }
  }, []);

  return (
    <div>
      <Notification />
      {user ? <UserInfo/> : <LoginForm/>}
      {user && (
        <div>
          <Togglable buttonLabel="add new blog" ref={blogFormRef}>
            <BlogForm user={user} />
          </Togglable>
        </div>
      )}
      <h2>Blogs</h2>
      <BlogList /> 
    </div>
  );
};

export default App;
