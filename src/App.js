import React from "react";
import "./App.css";
import Box from "./page/box";
import "./page/style.module.scss"
import { Reset } from 'styled-reset'



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
      <Reset/>
      <Box />
      <Box />
      <div style={style}>{name}</div>
    </div>
  );
}

export default App;
