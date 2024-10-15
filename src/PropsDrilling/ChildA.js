import React from 'react'
import ChildB from './ChildB'

const ChildA = ({message , firstName , lastName}) => {
  return (
    <div>
      <h1>Props Drilling</h1>
        <ChildB message={message} firstName={firstName} lastName={lastName}/>
    </div>
  )
}

export default ChildA;