import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Tweet from "./components/Tweet";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

socket.on("connect", () => {
  console.log("Connected to server");
});

function App() {
  return (
    <div className="App">
      <Nav />
      <Tweet />
    </div>
  );
}

export default App;
