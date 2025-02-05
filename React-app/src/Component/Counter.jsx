import React from "react";
import { useState } from "react";

function Day3() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     <h1>Counter App</h1>
     <button onClick={()=>setCount(count-1)} className='text-white-500'>DECREMENT</button>
     <h2>{count}</h2>
     <button onClick={()=>setCount(count+1)}>INCREMENT</button>
         
    </div>
  );
}

export default Day3;