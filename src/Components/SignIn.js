import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//import Checkbox from '@mui/material/Checkbox';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
    //reset,
  } = useForm();

  // const onSubmit = (data) => {
  // localStorage.setItem('login', true)         //use to protect route
  // console.log(data);
  // reset();
  //post data using fetch method
  // const result = fetch("http://localhost:5000/postData", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "Doremon",
  //     empId: 205,
  //     address: "Disney World",
  //     salary: 1,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((result) => console.log("post data using fetch", result));
  // console.log(result);

  //delete data using fetch
  // const result = fetch("http://localhost:5000/delete", {
  //   method: "delete",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "Surya",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((result) => console.log(result));

  //Update data using fetch
  // const result = fetch("http://localhost:5000/updateQuery?name=ABC", {
  //   method: "put",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //};

  const onSubmit = (data) => {
    localStorage.setItem("login", true); //use to protect route
    navigate("/");
    //   // console.log(data);
    //   // reset();

    //   //post data using axios method
    //   // const result = axios
    //   //   .post(
    //   //     "http://localhost:5000/postData",
    //   //     {
    //   //       name: "Nobita",
    //   //       address: "Disney",
    //   //       salary: 2,
    //   //       empId: 67,
    //   //     },
    //   //     {
    //   //       headers: { "Content-Type": "application/json" },
    //   //     }
    //   //   )
    //   //   .then((response) => console.log(response.data));
    //   // console.log("post using axios Result", result);

    //   //when you want post form data to database
    //   //   const result = axios
    //   //     .post("http://localhost:5000/postData", data, {
    //   //       headers: { "Content-Type": "application/json" },
    //   //     })
    //   //     .then((response) => console.log(response.data));
    //   //   console.log("post using axios Result", result);

    //   //delete data from database
    //   // const deletedata = axios
    //   //   .delete("http://localhost:5000/delete", {
    //   //     headers: { "Content-Type": "application/json" },
    //   //     data: { name: "ABC" },
    //   //   })
    //   //   .then((response) => console.log(response.data));

    //update data
    const updateData = axios
      .put("http://localhost:5000/updateQuery?name=Surya", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res.data));
    console.log("updateData", updateData);
  };

  //get data using fetch with fake api
  //   useEffect(() => {
  //      fetch("https://jsonplaceholder.typicode.com/posts")
  //      .then((response) => response.json())
  //      .then((data) => console.log(data));
  //    // console.log(data);
  //  }, []);

  //get data with fetch() method
  // useEffect(() => {
  //   fetch("http://localhost:5000/")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //   // console.log(data);
  // }, []);

  //get data with axios() method
  // useEffect(() => {
  //   const data = axios
  //     .get("http://localhost:5000/")
  //     .then((response) => console.log(response.data));
  //   //console.log(data);
  // }, []);

  // useEffect(() => {
  //   let login = localStorage.getItem("login");
  //   if (login) {
  //     navigate("/");
  //   }
  // });

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 290,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField
              variant="standard"
              label="Email"
              placeholder="Enter email"
              type="text"
              name="email"
              fullWidth
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
            {/* {errors.email && errors.email.type === "required" &&(<p style={{color:"red"}}>{errors.email.message}</p>)} */}
            {/* {errors.email && errors.email.type === "pattern" && (<p style={{color:"red"}}>Email is not valid.</p>)} */}

            <TextField
              variant="standard"
              label="Password"
              placeholder="Enter password"
              type="password"
              name="password"
              fullWidth
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at-least 5 characters.",
                },
              })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
            {/* {errors.password && errors.password.type === "required" &&(<p style={{color:"red"}}>Password is required</p>)}
            {errors.password && errors.password.type === "minLength" && (
            <p style={{color:"red"}}>
              Password should be at-least 5 characters.
            </p>
          )} */}

            {/* <FormControlLabel
                control={
                   <Checkbox  name="checkbox" type="checkbox" color='primary' />
                }
                label="Remember me"
                {...register("checkbox", {
                    required: true
                  })}
            />
             {errors.checkbox && errors.checkbox.type === "required" &&(<p style={{color:"red"}}>Click on Checkbox</p>)} */}

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnStyle}
              fullWidth
            >
              Sign in
            </Button>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              {" "}
              Do you have an account ?<Link href="signup">Sign up</Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
    </>
  );
};

export default SignIn;

// import React from 'react';
// import { Avatar, Button, FormControlLabel, Grid , Paper, Link , TextField, Typography} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Checkbox from '@mui/material/Checkbox';

// const SignIn = () => {

//     const paperStyle={padding:20 , height:'70vh' , width:290 , margin:"20px auto"}
//     const avatarStyle={backgroundColor:'#1bbd7e'}
//     const btnStyle={margin:'8px 0'}

//   return (
//     <>
//        <Grid>
//         <Paper elevation={10} style={paperStyle}>
//             <Grid align='center'>
//                 <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
//                 <h2>Sign In</h2>
//             </Grid>
//             <TextField variant="standard"  label='Username' placeholder='Enter username' fullWidth required/>
//             <TextField variant="standard"  label='Password' placeholder='Enter password' type='password' fullWidth required/>
//             <FormControlLabel
//                 control={
//                    <Checkbox  name="jason" color='primary' />
//                 }
//                 label="Remember me"
//             />
//             <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign in</Button>
//             <Typography>
//                 <Link href="#">Forgot password ?</Link>
//             </Typography>
//             <Typography> Do you have an account ?
//                 <Link href="signup">Sign up</Link>
//             </Typography>
//         </Paper>
//        </Grid>
//     </>
//   )
// }

// export default SignIn;
