import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)
    return(
        <div>
            Counter: {count}
            
        </div>
    )
}



export default Counter;