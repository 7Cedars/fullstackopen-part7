import { likeBlog, removeBlogs } from '../reducers/blogsReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useMatch, useNavigate, Link, Route } from 'react-router-dom'

const BlogView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allBlogs = useSelector(state => {

    if (state.blogs) { 
      const all = state.blogs
      console.log("FULL Redux state at BLOGVIEW: ", state)
      return all;
    } else {
      return null
    }
  })

  if (!allBlogs) {
    return null
  }

  console.log("allBlogs: ", allBlogs)

  const user = useSelector(state => {
    console.log("logged in user in Redux state : ", state.users.loggedIn)
    return (state.users.loggedIn)
  }) 
  
  console.log("user: ", user)

  const match = useMatch('/blogs/:id')   
  const selectedBlog = match 
    ? allBlogs.find(blog => blog.id === String(match.params.id))
    : null  

  console.log("selectedBlog: ", selectedBlog)

  const addLike = (event) => {
    event.preventDefault();
    const likedBlog = { ...selectedBlog, likes: selectedBlog.likes + 1 }
    dispatch(likeBlog(likedBlog));
  };

  const removeBlog = (event) => {
    event.preventDefault();
    if (window.confirm(`Do you really want to delete ${selectedBlog.title}?`)) {
        dispatch(removeBlogs(selectedBlog.id)) 
      }
    navigate('/')
  };

  return (
    <div>
       <h2>
        {`${selectedBlog.title} by ${selectedBlog.author}`}
      </h2>
       {/* NB! THIS IS A BUG: it add the BASE url to this URL. No clue why. It shouldn't  */}
      <a href={`${selectedBlog.url}`} target = "_blank">{selectedBlog.url} </a>
      {/* END BUG  */}
      <div className="blogLikes">
            {" "}
            {`${selectedBlog.likes} likes `}{" "}
            <button onClick={addLike} id="like-input">
              {" "}
              Like{" "}
            </button>{" "}
        </div>
      <div className="blogUsername">
          {" "}
          {`Created by ${selectedBlog.user.name}`}{" "}
      </div> 
      {user && user.username === selectedBlog.user.username ? (
            <div className="blogRemoveButton">
              {" "}
              <button onClick={removeBlog}> Remove </button>{" "}
            </div>
          ) : null} 
      <ul>
      {selectedBlog.comments ?
        selectedBlog.comments.map((comment, id) => (
          <li key={id}>{comment} </li> 
          ))
          : null 
      }
      </ul>
    </div>
  )   
};

export default BlogView