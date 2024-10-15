import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectCompo = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectCompo;
