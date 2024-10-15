import React, { useState } from 'react'       //form without validation

const Login = () => {
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const[emailErr , setEmailErr] = useState(false);
    const[passwordErr , setPasswordErr] = useState(false);

    const loginHandler =(event) => {
        if(email.length < 3 || password.length < 5){
            alert("Please enter correct email and password")
        }else{
            alert("Login Successfully")
        }
        event.preventDefault();
        console.log("login successfully")
    };

    const emailHandler =(event)=>{
        let item = event.target.value;
        
        if(item.length <= 3){
            setEmailErr(true);
        }else{
            setEmailErr(false)
        }
        setEmail(item)
        console.log("email => ",item)
    };

    const passwordHandler =(event) => {
        let item= event.target.value
        if(item.length <=5){
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
        setPassword(item);
        console.log("password =>", item)
    }
  return (
    <>
      <form onSubmit={loginHandler}>
        <label>Email : </label>
        <input type='text' name='email' placeholder='Enter your email' onChange={emailHandler}  />
        <br></br>
        <br></br>
        <label>Password : </label>
        <input type='password' name='password' placeholder='Enter password' onChange={passwordHandler}  />
        <br></br>
        <br></br>
        <button type='submit'>Submit</button>
      </form>

    </>
  )
}

export default Login