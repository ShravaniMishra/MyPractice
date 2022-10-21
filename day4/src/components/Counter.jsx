import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)
    return(
        <div>
            Counter : {count}
            <br />
            <button onClick={()=>setCount(count+100)}>Deposit 100</button>
            <button onClick={()=>setCount(count-100)}>Withdraw 100</button>
        </div>
    )
}
export default Counter;