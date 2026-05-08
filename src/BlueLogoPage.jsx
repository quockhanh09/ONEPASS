import React from "react";
import logo from "./assets/img/Logo-name.png";

const BlueLogoPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#2f4d90",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <img src={logo} alt="Logo" style={{
        width: "700px",
        height: "auto",
        objectFit: "contain"
      }} />
    </div>
  );
};

export default BlueLogoPage;
