import React, { useCallback, useState } from 'react'
import ChildCompo from './ChildCompo';

const CallbackExample = () => {
    const[add , setAdd] = useState(0);
    const[count , setCount] = useState(0);

    const myFunc = useCallback( () => {
         return count
    },[count])
  return (
    <>
       <h2>UseCallback Hook</h2>
       <ChildCompo myFunc={myFunc} />
       <h1>{add}</h1>
       <button onClick={()=>setAdd(add + 1)}>Addition</button>
       <h1>{count}</h1>
       <button onClick={()=>setCount(count+2)}>Count</button>
      
    </>
  )
}

export default CallbackExample;