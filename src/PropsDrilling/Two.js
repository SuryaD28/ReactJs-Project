import React, { useContext } from 'react'
import { childContext } from '../App';
import { useSelector } from 'react-redux';

const Two = () => {
    const {bgColor} = useContext(childContext);

    const data = useSelector((state) => state.cartItem.cartData)   //for redux folder
    console.log("Redux data is", data)
    
  return (
    <div style={{backgroundColor:bgColor}}>
        <h2>This is Two Component</h2>
        <h2>Name: {data.name}</h2>

    </div>
  )
}

export default Two;