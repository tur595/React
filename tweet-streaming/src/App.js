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
  const [tweetList, setTweetList] = useState([]);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    socket.on("tweet", (tweet) => {
      tweets.push({ tweet });
      setTweets(tweets);

      setTweetList(...tweetList, [tweets]);
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Tweet tweetList={tweetList} />
    </div>
  );
}

export default App;
