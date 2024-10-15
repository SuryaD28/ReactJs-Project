import { useEffect, useState } from "react";


const EffectExample = () => {

    const[count , setCount] = useState(0);
    const[counter , setCounter] = useState(10);
    

    useEffect(() => {
      console.log("useEffect called")
    })

    // useEffect(() => {
    //     console.log("useEffect called")
    //   },[])


    useEffect(() => {
        console.log("useEffect called")
        console.log("The count is : " , count);
      }, [count])


  
  return (
    <div>
        <h2>UseEffect Example</h2>

      <h3>{counter}</h3>  
      <button onClick={() => setCounter(counter*2)}>Update Counter</button>

      <br></br>
      <br></br>

      <button onClick={()=>{ setCount(count + 1) } }> Increment </button>
      <p>{count}</p>   
      <button onClick={()=>{ setCount(count - 1) } }> Decrement </button>

    </div>
    
  )
}

export default EffectExample;