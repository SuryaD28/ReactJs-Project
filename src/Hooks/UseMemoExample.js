import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {

    const[add , setAdd] = useState(0);
    const[minus , setMinus] = useState(100);

    // function multiply(){
    //     console.log("unnecessary rendering");      //unnecessary calling function like substraction
    //      return add * 10;
    // }

    const multiplication = useMemo(function multiply(){      // we use useMemo hooks to prevent unnecessary rendering
         console.log("add....");                             
         return add * 10;
    },[add])

  return (
    <>
        <h2>useMemo Hook</h2>
        {/* {multiply()} */}
        {multiplication} 
        <br/>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <span>{add}</span>
        <br/>
        <button onClick={() => setMinus(minus - 1)}>Substraction</button>
        <span>{minus}</span>
    </>
  )
}

export default UseMemoExample