import React from 'react';
import User from './User';

function MouseHover  ({increaseSize,fontSize}) {
  return (
    <div>
        <h2>MouseHover</h2>
        <button onMouseOver={increaseSize}>Size increase onMouseOver </button>
        <p style={{fontSize}}>Size of font  : {fontSize}</p>
    </div>
  )
}

export default User(MouseHover);