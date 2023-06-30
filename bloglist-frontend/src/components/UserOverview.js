import { useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserOverview = () => {

  const allUsers = useSelector(state => {

    if (state.users.all) { 
      const all = state.users.all
      console.log("FULL Redux state at UsersOverview: ", state)
      return all;
    } else {
      return null
    }
  })

  const match = useMatch('/users/:id')    
  
  if (allUsers) {

    const user = match 
    ? allUsers.find(user => user.id === String(match.params.id))
    : null  

    return (
      <div>
        <h2> {user.name} </h2>
        <b> Added Blogs </b>
        <ul>
        { user.blogs.map(blog => (
          <li> {blog.title} </li>
        ))
        }
        </ul>
      </div>
    )
  }
  else {
    return null 
  }
}

export default UserOverview