import React, { useRef, useState } from 'react'

const RefExample = () => {

    const refElement = useRef("");
    const[name , setName] = useState("React JS")
    console.log(refElement)

    const HandleInput = () => {
        setName("ABC")
        refElement.current.focus();
        refElement.current.style.color="red"
    }
  return (
    <>
      <h2>useRef Hook</h2>
       <input ref={refElement} type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
       <button onClick={HandleInput}>Update Input</button>
    </>
  )
}

export default RefExample;