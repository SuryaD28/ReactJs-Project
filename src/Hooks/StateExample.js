import { useState } from "react";

const StateExample = () => {

    const[inputValue , setInputValue] = useState('React Js');
    const[counter , setCounter] = useState(0);
    

  return(
    <div>
      <h2>useState Hook</h2>
      
      <input placeholder="Enter value" onChange={(event)=>{
         const newValue = event.target.value;
         setInputValue(newValue)
      }} />
      {inputValue}
      

   <br></br>
   <br></br>
      
      <button onClick={()=>{ setCounter(counter + 1) } }> Increment </button>
      <p>{counter}</p>   
      <button onClick={()=>{ setCounter(counter - 1) } }> Decrement </button>

    </div>
  )
}

export default StateExample;