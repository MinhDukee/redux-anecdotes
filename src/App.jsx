import { useEffect } from 'react'
import  NewAnecdote  from './NewAnecdote'
import  Anecdotes  from './Anecdotes'
import  Filter  from './Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  }, []) 

    return (
    <div>
      <Notification/>
      <Filter/>
      <NewAnecdote/>
      <Anecdotes/>
    </div>
  )
}

export default App