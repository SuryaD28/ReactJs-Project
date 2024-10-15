import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Components
          </Typography>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "white",
              };
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/abouts"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "white",
              };
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/contacts"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "white",
              };
            }}
          >
            Contact
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/login"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "white",
              };
            }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/logout"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "white",
              };
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
