import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
     navigate(url)
  }
  return (
    <div>
        <h1>This is Contact Component...!</h1>
        <h2>Using useNavigate Hooks</h2>
        <button onClick={() => {handleNavigate("/")}}>Go to Home</button>
        <button onClick={() => {handleNavigate("/about")}}>Go to About</button>
        <button onClick={() => {handleNavigate("/employee")}}>Go to Employee</button>
        {/* <button onClick={()=>navigate("/")}>Go to Home</button> */}
    </div>
    
  )
}

export default Contact