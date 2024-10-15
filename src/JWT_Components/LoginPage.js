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
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      alert("User already logged in");
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    const result = await axios.post("http://localhost:5000/login", data, {
      headers: { "Content-Type": "application/json" },
    });
    //.then((response) => console.log(response.data));
    console.log(" Login result", result.data);

    // if (result.data.auth) {
    //    //verify token from frontend to backend with getdata using :auth
    //   //sessionStorage.setItem("user", JSON.stringify(result));
    //   sessionStorage.setItem("user", JSON.stringify(result.data.user));
    //   sessionStorage.setItem("token", result.data.auth);
    //   //
    //   const sessionToken = result.data.auth;
    //   console.log("sessionToken : ", sessionToken);
    //   await getData(sessionToken);
    //   navigate("/");
    // } else {
    //   alert("Please Provide Correct Details...!");
    // }

    if (result.data) {
      sessionStorage.setItem("user", JSON.stringify(result.data.user));
      //sessionStorage.setItem("user", result.data.user);
      sessionStorage.setItem("accessToken", result.data.accessToken);
      sessionStorage.setItem("refreshToken", result.data.refreshToken);

      //
      // const sessionToken = result.data;
      const sessionToken = result.data.accessToken;
      console.log("Session Token : ", sessionToken);
      await getData(sessionToken);
      navigate("/");
    } else {
      alert("Please Provide Correct Details...!");
    }
  };

  //verify token from frontend to backend with getDATA
  // let sessionToken = sessionStorage.getItem("accessToken");
  // useEffect(() => {
  //   if (sessionToken) {
  //     console.log("sessionToken", sessionToken);
  //     getData();
  //   }
  // }, [sessionToken]);

  // let sessionToken = sessionStorage.getItem("token");
  // useEffect(() => {
  //   console.log("sessionToken", sessionToken);
  //   getData();
  // }, [sessionToken]);

  const getData = async (sessionToken) => {
    let result = await axios.get("http://localhost:5000/getData", {
      headers: {
        authorization: `bearer ${sessionToken}`,
      },
    });
    console.log("Result in getData", result.data);
  };

  //function for refreshToken
  const refreshToken = async () => {
    try {
      const response = await axios.post("http://localhost:5000/refresh", {
        refreshToken: sessionStorage.getItem("refreshToken"),
      });
      sessionStorage.setItem("token", response.data.accessToken);
    } catch (error) {
      console.log("Failed to fetch refreshToken", error);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("setInterval called");
  //     refreshToken();
  //   }, 1 * 60 * 1000);
  //   //return () => clearInterval(interval);
  // }, []);

  //   const result = await axios.post("http://localhost:5000/login", data, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   // .then((res)=>console.log(res.data));
  //   console.log("result", result);
  //   if (result.data) {
  //     sessionStorage.setItem("user", result.data.user);
  //     sessionStorage.setItem("accessToken", result.data.accessToken);
  //     sessionStorage.setItem("refreshToken", result.data.refreshToken);
  //     //  SetUser(result.data);
  //     navigate("/");
  //   } else {
  //     alert("Please enter correct details");
  //   }
  // };

  // let sessionToken = sessionStorage.getItem("token");
  // useEffect(() => {
  //   console.log("sessionToken", sessionToken);
  //   getData();
  // }, [sessionToken]);

  // const getData = async () => {
  //   let result = await axios.get("http://127.0.0.1:5000/getData", {
  //     headers: {
  //       authorization: `bearer ${sessionToken}`,
  //     },
  //   });
  //   console.log("result", result.data);
  // };

  // const refreshToken = async () => {
  //   try {
  //     const responce = await axios.post("http://127.0.0.1:5000/refresh", {
  //       refreshToken: sessionStorage.getItem("refreshToken"),
  //     });
  //     sessionStorage.setItem("token", responce.data.accessToken);
  //   } catch (error) {
  //     console.error("failed to fetch token", error);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refreshToken();
  //   }, 1 * 60 * 1000);
  //   //return () => clearInterval(interval);
  // }, []);

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
              <h2>Login Page</h2>
            </Grid>
            <TextField
              variant="standard"
              label="Email"
              placeholder="Enter email"
              type="text"
              name="email"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
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

            <TextField
              variant="standard"
              label="Password"
              placeholder="Enter password"
              type="password"
              name="password"
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
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

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnStyle}
              fullWidth
            >
              Log in
            </Button>

            <Typography>
              Do you have an account ?<Link href="register">Register</Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
    </>
  );
};

export default LoginPage;
