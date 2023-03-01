import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  let currDate = new Date()
  currDate=currDate.getHours()

  let greetings = ""
  const css={}

  if(currDate>=1 && currDate<12){
    greetings="Good Morning"
    css.color="green"
  }
  else if(currDate>=12 && currDate<16){
    greetings="Good Afternoon"
    css.color="orange"
  }
  else if(currDate>=16 && currDate<20){
    greetings="Good Evening"
    css.color="red"
  }
  else{
    greetings="Good Night"
    css.color="blue"
  }

  return (
    <div className="App">
     <>
     <h1>Hello Govind <span style={css}>{greetings}</span></h1>
     </>
    </div>
  )
}

export default App
