import { useSelector } from 'react-redux'

const UserInfo = () => {
  
  const user = useSelector(state => {
    console.log("FULL Redux state : ", state)

    return (
      state.users.loggedIn
    )
  }) 

  const handleLogout = async (event) => {
    // userDispatch({type: 'DELETE'})
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div>
      Logged in as: {user.name}
      <button type="submit" onClick={(handleLogout)} >
        {" "}
        logout{" "}
      </button>
    </div>
  )
};

export default UserInfo