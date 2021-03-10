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
  const [tweetData, setTweetData] = useState();

  useEffect(() => {
    socket.on("tweet", (tweet) => {
      // const tweets = [];
      // tweets.push(tweet);

      setTweetData({
        id: tweet.data.id,
        text: tweet.data.text,
        username: `@${tweet.includes.users[0].username}`,
      });
    });
  }, []);

  console.log(tweetData);

  return (
    <div className="App">
      <Nav />
      <Tweet tweetData={tweetData} />
    </div>
  );
}

export default App;
