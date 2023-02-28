import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const name = "Shravani Mishra"
  const currDate = new Date().toLocaleDateString()
  const currTime = new Date().toLocaleTimeString()

  return (
    <div className="App">
      <>
      <h1 contentEditable="true">My Name is {name}</h1>
      <h2>Current Date : {currDate}</h2>
      <h2>Current Time : {currTime}</h2>
      </>
    </div>
  )
}

export default App
