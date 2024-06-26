import React from "react";

export const Light = ({ color, active, onClick }) => {
  const style = {
    height: "100px",
    width: "100px",
    backgroundColor: color,
    opacity: active ? 1 : 0.4,
    borderRadius: "50%",
    margin: "10px",
    cursor: "pointer"
  };

  return <div style={style} onClick={onClick}></div>;
};

