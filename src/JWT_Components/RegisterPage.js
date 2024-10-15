import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log("User registered successfully:", result);
    alert("User registered successfully");
  };

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "green" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2>Register Page</h2>
        </Grid>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <TextField
          fullWidth
          variant="standard"
          label="UserName"
          placeholder="Enter name"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />

        <TextField
          fullWidth
          variant="standard"
          label="Email"
          placeholder="Enter Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          fullWidth
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={marginTop}
          onClick={handleSubmit}
        >
          Register
        </Button>
        {/* </form> */}
        <Typography>
          Already Registered
          <Link href="/">Log in</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default RegisterPage;
