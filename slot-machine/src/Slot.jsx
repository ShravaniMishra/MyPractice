import React from 'react'

const Slot = (props) => {
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

export default Slot