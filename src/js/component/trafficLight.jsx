import React, { useState } from "react";


import { Light } from "./light.jsx";

export const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [isPurpleAdded, setIsPurpleAdded] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
    width: "100vw", 
    backgroundColor: "#282c34", 
    color: "white" 
  };

  const trafficLightStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "10px",
    width: "120px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" 
  };

  const titleStyle = {
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" 
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px" 
  };

  const changeColor = () => {
    if (color === "red") setColor("green");
    else if (color === "green") setColor("yellow");
    else if (color === "yellow" && isPurpleAdded) setColor("purple");
    else if (color === "yellow" && !isPurpleAdded) setColor("red");
    else if (color === "purple") setColor("red");
  };

  const togglePurple = () => {
    setIsPurpleAdded(!isPurpleAdded);
    if (isPurpleAdded && color === "purple") {
      setColor("red"); 
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Traffic Light🚦</h1>
      <div style={trafficLightStyle}>
        <Light color="red" active={color === "red"} onClick={() => setColor("red")} />
        <Light color="yellow" active={color === "yellow"} onClick={() => setColor("yellow")} />
        <Light color="green" active={color === "green"} onClick={() => setColor("green")} />
        {isPurpleAdded && (
          <Light color="purple" active={color === "purple"} onClick={() => setColor("purple")} />
        )}
      </div>
      <button style={buttonStyle} onClick={changeColor}>Change Color</button>
      <button style={buttonStyle} onClick={togglePurple}>
        {isPurpleAdded ? "Remove Purple" : "Add Purple"}
      </button>
    </div>
  );
};