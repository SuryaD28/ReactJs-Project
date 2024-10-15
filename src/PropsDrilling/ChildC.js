import React from 'react';

const ChildC = ({message , firstName , lastName}) => {
  
  return (
    <div> 
     
      <h2>Data shows from Parent component is : </h2>
        <p>Example-1</p>
         <h3>Message: {message}</h3>
         <p>Example-2</p>
         <h3>Firstname : {firstName}</h3>
         <h3>Lastname : {lastName}</h3>
         <br/> 
    </div>
    
  )
}

export default ChildC;