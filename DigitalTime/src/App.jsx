import { useState } from 'react'
import './App.css'

function App() {
  let newTime = new Date().toLocaleTimeString()
  const [time,setTime] = useState(newTime)
  const handleClick = () => {
    newTime = new Date().toLocaleTimeString()
    setTime(newTime);
  }
  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={handleClick}>Get Exact Time</button>
    </div>
  )
}

export default App
