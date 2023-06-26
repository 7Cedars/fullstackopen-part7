import { useNavigate } from "react-router-dom"
import { useField }  from "../hooks" 

const CreateNew = ( props ) => {
  const contentField = useField('content')  
  const authorField = useField('author')  
  const infoField = useField('info')
  const navigate = useNavigate()

  const handleSubmit = (e) => {

    const content = contentField.value
    const author = authorField.value
    const info = infoField.value

    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
    navigate("/")
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content <input {...contentField} />
        </div>
        <div> 
          author <input {...authorField} />
        </div>
        <div>
          info <input {...infoField} />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default CreateNew