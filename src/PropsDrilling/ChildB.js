import React from 'react'
import ChildC from './ChildC'


const ChildB = ({message , firstName , lastName}) => {
 
  return (
    <div>
         <ChildC message={message} firstName={firstName} lastName={lastName}/>
    </div>
  )
}

export default ChildB;