import React from "react";
import Search from "../Search";
import Game from "../Game";
import TopScores from "../TopScores";

const Home = () => {
  return (
    <div className="home">
      <TopScores />
      <Game />
      <Search />
    </div>
  );
};

export default Home;
