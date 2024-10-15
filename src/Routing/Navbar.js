import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
//import "../App.css";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const countStyle = {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "0 6px",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "20px",
    minWidth: "10px",
    textAlign: "center",
  };

  const data = useSelector((state) => state);
  console.log("Data in Navbar => ", data.cartItem.cartCount);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Routing Components
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
          to="/about"
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
          to="/contact"
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
          to="/employee"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
            };
          }}
        >
          Employees
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/company"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
            };
          }}
        >
          Company
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
        <IconButton color="inherit" component={NavLink} to="/cart">
          <Badge color="secondary">
            <ShoppingCartIcon />
            <span style={countStyle}>{data.cartItem.cartCount}</span>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
