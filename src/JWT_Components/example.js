//THIS FILE IS SEND BY THE TEACHER FOR CODE CHECKING
//THIS FILE IS SEND BY THE TEACHER FOR CODE CHECKING

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const loginHandler = async (data) => {
    // localStorage.setItem("login", true);
    // navigate("/");
    // console.log("loginHandler", data);
    // reset({ email: "alex@example.com", password: "Test@123" })

    // Post data using fetch method
    // const result = fetch("http://localhost:5000/postData", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Name: "XYZ",
    //     Address: "Pune",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log("result", result));
    // console.log(result);

    // Post data using axios
    const result = await axios.post("http://localhost:5000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("result", result);
    if (result.data) {
      sessionStorage.setItem("user", result.data.user);
      sessionStorage.setItem("accessToken", result.data.accessToken);
      sessionStorage.setItem("refreshToken", result.data.refreshToken);
    } else {
      alert("please enter correct details");
    }
  };
  let sessionToken = sessionStorage.getItem("token");

  useEffect(() => {
    // Get data using fetch method
    // fetch("http://localhost:5000/")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // Get data using axios
    // const data = axios
    //   .get("http://localhost:5000/")
    //   .then((res) => console.log(res.data));
    // console.log("data", data);
    // console.log("data", data);

    console.log("sessionToken", sessionToken);
    getData();
  }, [sessionToken]);

  const getData = async () => {
    let result = await axios.get("http://localhost:5000/getData", {
      headers: {
        authorization: `bearer ${sessionToken}`,
      },
    });
    console.log("result", result.data);
  };
  const refreshToken = async () => {
    try {
      const response = await axios.post("http://localhost:5000/refresh", {
        refreshToken: sessionStorage.getItem("refreshToken"),
      });
      sessionStorage.setItem("token", response.data.accessToken);
    } catch (error) {
      console.error("Failed to fetch token", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(loginHandler)}>
        <input
          type="text"
          placeholder="Please Enter Your Email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Please enter correct pattern of email",
            },
          })}
        ></input>

        <br></br>
        {/* {errors.email && errors.email.type === "required" && (
          <p style={{ color: "red" }}>Email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p style={{ color: "red" }}>Please enter correct pattern of email</p>
        )} */}
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <br></br>
        <input
          type="password"
          placeholder="Please Enter Your password here"
          name="password"
          {...register("password", {
            required: true,
            // minLength: {
            //   value: 6,
            //   message: "Please enter minimum six character",
            // },
            validate: {
              checkLength: (value) => value.length >= 6,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                  value
                ),
            },
          })}
        ></input>
        {errors.password && errors.password.type === "required" && (
          <p style={{ color: "red" }}>Password is required</p>
        )}
        {errors.password && errors.password.type === "checkLength" && (
          <p>Please enter minimum six character</p>
        )}
        {errors.password && errors.password.type === "matchPattern" && (
          <p>Pattern is not match</p>
        )}
        {/* {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )} */}
        <br></br>
        <br></br>
        <button type="submit">Login </button>
      </form>
    </div>
  );
}
