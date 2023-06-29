import { createContext,  useReducer } from 'react'

const userReducer = (state = null, action) => {
  console.log("action: ", action)
  switch (action.type) {
    case "CREATE":
      return action.payload
    case "DELETE":
      return null 
    default:
      return state
  }
}

const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [user, userDispatch] = useReducer(userReducer, null)

  return (
    <UserContext.Provider value={[user, userDispatch]}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext