// import ReactDOM from 'react-dom/client'
import { useState } from 'react'
// import Menu from './components/Menu'
import About from './components/About'
import CreateNew from './components/CreateNew'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch
  // Navigate,
  // useParams,
  // useNavigate,
} from "react-router-dom"

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const match = useMatch('/anecdotes/:id')
  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null
  
    
  const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
          <div>
            <Link style={padding} to="/">home</Link>
            <Link style={padding} to="/anecdotes">anecdotes</Link>
            <Link style={padding} to="/create">create new</Link>
            <Link style={padding} to="/about">about</Link>
  
            {/* <a href='#' style={padding}>anecdotes</a>
            <a href='#' style={padding}>create new</a>
            <a href='#' style={padding}>about</a> */}
          </div>
          <Routes>
            <Route path="/anecdotes" element={<AnecdoteList anecdotes={ anecdotes } />} />
            <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
            <Route path="/create" element={<CreateNew/>} />
            <Route path="/about" element={<About /> } />
            <Route path="/" element={<AnecdoteList anecdotes={ anecdotes }/>} />
          </Routes>
      </div>
    )
  }

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)
  
  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Footer />
    </div>
  )
}

export default App
