import React, { useState } from 'react'

const HigherOrderPractice = () => {
  return (
    <>
    <h1>Higher Order Component</h1>
    <Red cmp={Counter}/>
    <Green cmp={Counter}/>
    <Blue cmp={Counter}/>
    </>
  )
}

function Red(props) {
    return(
        <h2 style={{backgroundColor:"red"}}>Red Component<props.cmp/></h2>
    )
}

function Green(props) {
    return(
        <h2 style={{backgroundColor:"green"}}>Green Component<props.cmp/></h2>    
    )
}

function Blue(props) {
  return(
      <h2 style={{backgroundColor:"skyblue"}}>Blue Component<props.cmp/></h2>    
  )
}


function Counter() {
    const[count , setCount] = useState(0);
  return(
    <>
       <h1>Count: {count}</h1>
       <button onClick={()=>setCount(count + 2)}>Update Value</button>
    </>
  )
}

export default HigherOrderPractice;