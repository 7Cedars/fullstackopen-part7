import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
          <tr key={user.id}> 
            <td> {<Link to={`/users/${user.id}`}>{user.name}</Link>} </td>
            <td> {user.blogs.length} </td>
          </tr> 
        ))}
      </table>
    </div>
  )
};

// {anecdotes.map(anecdote => <li key={user.id} >{<Link to={`/users/${user.id}`}>{user.name}</Link>}</li>)}
        {/* <div>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/notes">notes</Link>
          <Link style={padding} to="/users">users</Link>
        </div> */}


export default UsersOverview