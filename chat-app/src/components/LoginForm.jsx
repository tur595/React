import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Username"
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="password"
            placeholder="Password"
            required
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
