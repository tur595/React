import React, { useState } from "react";
import Search from "../Search";
import Game from "../Game";
import TopScores from "../TopScores";
import styled from "styled-components";

const Home = ({ status, setStatus, top, left, start, replay, setReplay }) => {
  const [userInfo, setUserInfo] = useState(false);

  const submitHandler = () => {
    setReplay(true);
    setUserInfo(true);
  };

  return (
    <StyledHome>
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
      <div className={`player-info ${!userInfo}`}>
        <h1>Your Name:</h1>
        <input type="text" />
        <button onClick={submitHandler}>Submit</button>
      </div>
      <Search />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  .player-info.true {
    align-items: center;
    padding: 10rem;
    position: absolute;
    min-height: 40vh;
    top: 20rem;
    left: 20rem;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    opacity: 1;
    transition: 0.5s ease;
    button {
      padding: 1rem;
      border: none;
      background: lightblue;
      cursor: pointer;
      top: 2rem;
      position: relative;
    }
    input {
      padding: 1rem;
      background: white;
      cursor: text;
      top: 2rem;
      position: relative;
    }
  }
  .player-info.false {
    opacity: 0;
    pointer-events: none;
    transition: 0.5s ease;
  }
`;
