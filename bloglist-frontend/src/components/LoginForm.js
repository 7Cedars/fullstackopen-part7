import { useState, useContext } from "react";
import blogService from "../services/blogs";
import loginService from "../services/login";
import { setNotification } from '../reducers/notificationReducer'
import UserContext from '../UserContext'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, userDispatch] = useContext(UserContext)
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault();  
  
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      blogService.setToken(user.token);
      userDispatch({type: 'CREATE', payload: user})
      console.log("User: ", user);
    } catch (exception) {
        dispatch(setNotification({message: 'Wrong username or password', className: "error"}));
    }
    console.log("user: ", user);
  };

  return (
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
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