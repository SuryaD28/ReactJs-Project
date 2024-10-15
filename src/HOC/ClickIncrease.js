import React from 'react'
import User from './User'

function ClickIncrease  ({increaseSize,fontSize}) {
  return (
    <div>
        <h2>ClickIncrease</h2>
        <button onClick={increaseSize}>Size increase with onClick</button>
        <p style={{fontSize}}>Size of font  : {fontSize}</p>
    </div>
  )
}

export default User(ClickIncrease);