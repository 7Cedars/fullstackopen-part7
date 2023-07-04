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
      <div className="px-4 mx-auto sm:w-1/2 w-full">
        <div className="bg-white rounded-md shadow-lg ps-8 pe-8">
          <div className="mb-3">
            <p class="pt-5 text-sm text-gray-600">
            {selectedBlog.author}
            </p>
            <h2 className="text-xl font-bold text-gray-800">
              {selectedBlog.title}
            </h2>
          </div> 

        <div className = "grid grid-cols-12 gap-1 p-1 mb-4">
          <a 
            href={`${selectedBlog.url}`} 
            target = "_blank"
            className="col-span-12 text-gray-600 underline underline-offset-3">
              {selectedBlog.url} 
          </a>
          <div className="col-span-9 text-gray-600">           
            {`${selectedBlog.likes} likes `}
          </div>
            <button 
              onClick={addLike} 
              id="like-input"
              className = "col-span-3 rounded-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm"
              >
              Add like
            </button>
          
          <div className="col-span-12 text-gray-600">
            {`Added by ${selectedBlog.user.name}`}
          </div>
        </div>

        <div className="border rounder-md p-2" > 
        <h3 className="text-l font-bold text-gray-800"> Comments </h3>
          <form className = "grid grid-cols-12 gap-4" onSubmit={addComment}>
              <input
                type="text"
                value={newComment}
                placeholder="comment.."
                className="col-span-9 px-2 mt-2 w-full h-full shadow-sm border text-sm border-gray-200 hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-1 transition-all duration-300 rounded-md p-1"
                id="blogComment"
                onChange={(event) =>
                  setNewComment(event.target.value)
                }
              />
            <button 
              type="submit"
              className = "col-span-3 px-2 mt-2 h-full rounded-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm"
              >Add comment</button>
          </form>
        <ul className='mt-4'>
        {selectedBlog.comments ?
          selectedBlog.comments.map((comment, id) => (
            <li 
              key={id}
              className="mt-1 ms-1 text-gray-600"
            >{comment} </li> 
            ))
            : null 
        }
        </ul>
        </div>
        <div className='flex justify-center pt-1 pb-3'> 
          {user && user.username === selectedBlog.user.username ? (
              <div  className="py-2 px-3 w-1/2 mt-2 flex justify-center relative bottom-0 left-0 gap-2 rounded-md border-2 border-red-300 font-medium bg-white text-red-300 hover:text-red-700 shadow-sm align-middle hover:bg-red-200 transition-all text-sm">              
                <button onClick={removeBlog}> Remove </button>
              </div>
          ) : null} 
          </div>
      </div>
      </div>
    )
  }
}

export default BlogView