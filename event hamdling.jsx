import React, { useState } from "react";

function ClickEvent() {
  const [message, setMessage] = useState("Hello! Click the button below.");

  const handleClick = () => {
    setMessage("Button Clicked! 🎉");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>{message}</h2>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Click Me
      </button>
    </div>
  );
}

export default ClickEvent;