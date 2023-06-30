import { useState } from "react";
import { loginUser } from "../reducers/usersReducer";
import blogService from "../services/blogs";
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault();    
    try {
      dispatch( loginUser(username, password) ) 
      blogService.setToken(user.token);
    } catch (exception) {
      dispatch(setNotification({message: `Wrong username or password. The exception was: ${exception}`, className: "error"}));
    }
    console.log("user: ", user);
  };

  return (
      <form onSubmit={handleLogin}>
        
        <div>
          username
          <input
            type="text"
            value={username}
            id="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit" id="login-button">
          {" "}
          login{" "}
        </button>
      </form>
  )};

export default LoginForm