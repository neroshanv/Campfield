import { useState } from 'react'
import CSSBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CSSBaseline />
      <h1>Todos</h1>
      <TodoList />

    </>
  )
}

export default App

[
  { id: `12312`, text: "walk the dog", completed: false }
]