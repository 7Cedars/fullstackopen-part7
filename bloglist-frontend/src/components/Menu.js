import { Link } from "react-router-dom"
import LoginForm from "./LoginForm";
import UserInfo from "./UserInfo";
import {  useSelector } from 'react-redux'

const Menu = () => {
  const menuStyle = {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 5,
    background: "lightgrey",
  };

  const user = useSelector(state => {
    if (state.users) { 
      const currentUser = state.users.loggedIn
      return currentUser;
    } else {
      return null
    }
  })

  return (
        <div style = {menuStyle}>
          <Link  to="/"> blogs </Link>
          <Link  to="/users"> users </Link>
          {user ? <UserInfo/> : <LoginForm/>} 
        </div> 
  )
}

export default Menu 