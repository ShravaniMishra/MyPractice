import './App.css'
import Slot from './Slot'

function App() {
  
  return (
    <div className="App">
      <h1> 🎰  Welcome to  <span style={{fontWeight:"bold",color:"peru"}}>Slot Machine Game </span> 🎰</h1>
      <div style={{border:"5px solid black",width:"60%",textAlign:"center",marginLeft:"20%"}}>
        <Slot x="😄" y="😄" z="😄"/>
        <hr />
        <Slot x="😄" y="🙂" z="😄"/>
        <hr />
        <Slot x="🍎" y="🍎" z="🍏"/>
        <hr />
        <Slot x="🍍" y="🍎" z="🍎"/>
        <hr />
        <Slot x="🍍" y="🍍" z="🍍"/>
        
       
        

      </div>
    </div>
  )
}

export default App
