import React from "react";
import Search from "../Search";
import Game from "../Game";
import TopScores from "../TopScores";

const Home = ({ status, setStatus, top, left, start, replay, setReplay }) => {
  return (
    <div className="home">
      <TopScores />
      <Game
        setReplay={setReplay}
        replay={replay}
        status={status}
        setStatus={setStatus}
        top={top}
        left={left}
        start={start}
      />
      <Search />
    </div>
  );
};

export default Home;
