import './App.css'
import { useState } from 'react'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counter />
    </>
  )
}

export default App
