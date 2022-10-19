import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)
    return(
        <div>
            Counter: {count}
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button disabled={count==0} onClick={()=>setCount(count-1)}>Reduce</button>
            <button onClick={()=>setCount(0)}>RESET</button>
        </div>
    )
}



export default Counter;