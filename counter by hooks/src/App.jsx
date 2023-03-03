import { useState } from 'react'
import './App.css'


function App() {
 const[counter,setCounter] = useState(0)
  return (
    <div className="App">
      <h1>Count Number : {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Click Me</button>
    </div>
  )
}

export default App
