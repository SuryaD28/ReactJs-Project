import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("token");

    // Navigate to the login page or home page
    navigate("/login");
    alert("You have been logged out.");
  };

  return (
    <div className="center-container">
      <p className="message-text">User already logged in</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
