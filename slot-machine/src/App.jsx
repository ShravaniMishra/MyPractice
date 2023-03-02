import './App.css'

const SlotM = (props)=>{
  let x = props.x;
  let y = props.y;
  let z = props.z;
if((x=== y) && (y === z)) {
  return (
    <>
    <div>
      <h1>{x} {y} {z}</h1>
      <h2>This is Matching</h2>
      <hr />
    </div>
    </>
  );
}
else{
  return (
    <>
    <div>
      <h1>{x} {y} {z}</h1>
      <h2>This is Not Matching</h2>
      <hr />
    </div>
    </>
  )
}
 

}

function App() {
  
  return (
    <div className="App">
      <h1> 🎰  Welcome to  <span style={{fontWeight:"bold",color:"peru"}}>Slot Machine Game </span> 🎰</h1>
      <div style={{border:"5px solid black",width:"60%",textAlign:"center",marginLeft:"20%"}}>
        <SlotM x="😄" y="😄" z="😄"/>
        <hr />
        <SlotM x="😄" y="🙂" z="😄"/>
        <hr />
        <SlotM x="🍎" y="🍎" z="🍏"/>
        <hr />
        <SlotM x="🍍" y="🍎" z="🍎"/>
        <hr />
        <SlotM x="🍍" y="🍍" z="🍍"/>
       
        

      </div>
    </div>
  )
}

export default App
