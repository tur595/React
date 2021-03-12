import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
const config = require("dotenv").config();
const PROJECTID = process.env.PROJECT_ID;

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="d6ccb23d-0d3d-4be9-b4f9-3acbcff0f477"
      userName="johndoe"
      userSecret="12345"
    />
  );
};

export default App;
