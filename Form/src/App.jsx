import { useState } from 'react'
import './App.css'

function App() {

  const [name,setName]=useState("")
  const [text,setText]=useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    setText(name)
  }
  
  return (
    <div className="App">
      <h1>Hello {text} 💖</h1>
      <input style={{paddingLeft:"20px",height:"40px",borderRadius:"11px",cursor:"pointer"}} type="text" placeholder='Enter Your Name' onChange={handleChange} />
      <br />
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default App
