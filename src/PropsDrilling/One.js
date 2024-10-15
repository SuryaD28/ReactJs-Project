import React, { useContext } from 'react'
import Two from './Two';
import { childContext } from '../App';
import { useDispatch } from 'react-redux';
import addToCart from '../Redux/Action';

const One = () => {
    const {color} = useContext(childContext);

    const dispatch = useDispatch();  //for redux folder

    const dispatchHandler = () => {
      dispatch(addToCart({ name : "ReactJS" , address:"Pune"}))
    }

  return (
    <div >
        {/* <p>Using ContextAPI</p> */}
        <h2 style={{color:color}}>This is One Component</h2>

         {/* This is below code for redux */}
         <button onClick={dispatchHandler}>Dispatch Data</button>

        <Two/>
    </div>
  )
}



export default One;