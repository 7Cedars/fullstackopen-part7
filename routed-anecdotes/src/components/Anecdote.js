const Anecdote = ({ anecdote }) => (
  <div style = {{margin: "1em"}} >
    <h2>{`${anecdote.content}`}</h2>

    <div> {`has ${anecdote.votes}`} votes</div>
    For more information see <a href={anecdote.info}> {anecdote.info} </a>
  </div>
)

export default Anecdote