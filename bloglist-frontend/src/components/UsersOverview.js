import { useSelector } from 'react-redux'

const UsersOverview = () => {
  
  const allUsers = useSelector(state => {

    if (state.users.all) { 
      const all = state.users.all
      console.log("FULL Redux state at UsersOverview: ", state)
      return all;
    } else {
      return [];
    }
  })
      
  return (
    <div>
      <h2>Users</h2>
      <table>
          <tr> 
            <td> </td>
            <td> <b> # Blogs </b> </td>
          </tr> 
        {allUsers.map((user) => (
          <tr> 
            <td> {user.name} </td>
            <td> {user.blogs.length} </td>
          </tr> 
        ))}
      </table>
    </div>
  )
};

export default UsersOverview