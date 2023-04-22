import React from "react";
import "./App.css";
import Hello from "./page/Hello";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontsize: 24,
    padding: "1rem",
    margin: "1rem",
  };
  return (
    <div>
      <Hello />
      <div style={style}>{name}</div>
    </div>
  );
}

export default App;
