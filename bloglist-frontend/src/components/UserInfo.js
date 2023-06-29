import { useContext } from "react";
import UserContext from '../UserContext'

const UserInfo = () => {
  
  const [user, userDispatch] = useContext(UserContext)

  const handleLogout = async (event) => {
    userDispatch({type: 'DELETE'})
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload(false);
  };

  return (
    <h2>
      Logged in as: {user.name}
      <button type="submit" onClick={(handleLogout)} >
        {" "}
        logout{" "}
      </button>
    </h2>
  )
};

export default UserInfo