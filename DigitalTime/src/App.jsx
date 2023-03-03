import { useState } from 'react'
import './App.css'

function App() {
  let newTime = new Date().toLocaleTimeString()
  const [time,setTime] = useState(newTime)
  const handleClick = () => {
    newTime = new Date().toLocaleTimeString()
    setTime(newTime);
  }
  setInterval(handleClick,1000)
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <h1 style={{fontSize:"45px"}}>{time}</h1>
      {/* <button onClick={handleClick}>Get Exact Time</button> */}
    </div>
  )
}

export default App
