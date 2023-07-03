import { useState } from 'react';
import Die from "./Die";
import './App.css'
import Dice from "./Dice";
import LuckyN from "./LuckyN";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LuckyN />
    </>
  )
}

export default App
