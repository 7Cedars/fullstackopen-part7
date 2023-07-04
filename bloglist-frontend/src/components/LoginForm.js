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
    dispatch( loginUser(username, password) ) 
  };

  return (
      <form onSubmit={handleLogin}
      className="flex items-center justify-between w-2/3 bg-blue-600 text-sm py-3 sm:py-0 rounded-md">        
        <div>
          <input
            className="px-5 m-2 h-full shadow-sm border text-sm border-gray-200 hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 transition-all duration-300 rounded-md p-1"
            type="text"
            placeholder="Username"
            value={username}
            id="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            className="px-5 ms-2 h-full shadow-sm border text-sm border-gray-200 hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 transition-all duration-300 rounded-md p-1"
            type="password"
            value={password}
            placeholder="Password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button 
          type="submit" 
          id="login-button"
          className="font-medium text-white/[.8] px-5 hover:text-white sm:py-6"
          >
          login
        </button>
      </form>
  )};

export default LoginForm