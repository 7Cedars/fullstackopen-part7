import { likeBlog, removeBlogs, addBlogComment } from '../reducers/blogsReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { useState } from "react";

const BlogView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState("");

  const allBlogs = useSelector(state => {
      const all = state.blogs
      return all;
    })

    const user = useSelector(state => {
      if (state.users) { 
        return (state.users.loggedIn)
      } else {
      }
    })

  const match = useMatch('/blogs/:id')
  
  if (allBlogs) {

    const selectedBlog = match 
    ? allBlogs.find(blog => blog.id === String(match.params.id))
    : null

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

    const addComment = (event) => {
      event.preventDefault();
      dispatch(addBlogComment( {comment: newComment, id: selectedBlog.id} ));
      setNewComment("");
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
              {`${selectedBlog.likes} likes `}
              <button onClick={addLike} id="like-input">
                Like
              </button>
          </div>
        <div className="blogUsername">
            
            {`Created by ${selectedBlog.user.name}`}
        </div> 
        {user && user.username === selectedBlog.user.username ? (
              <div className="blogRemoveButton">              
                <button onClick={removeBlog}> Remove </button>
              </div>
            ) : null} 
        <h3> Comments </h3>
        <form onSubmit={addComment}>
          <div>
            <input
              type="text"
              value={newComment}
              placeholder="comment.."
              id="blogComment"
              onChange={(event) =>
                setNewComment(event.target.value)
              }
            />
        </div>
          <button type="submit">Add comment</button>
        </form>
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
  }
}

export default BlogView