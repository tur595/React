import React, { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import Game from "../Game";
import TopScores from "../TopScores";
import styled from "styled-components";

const Home = ({
  status,
  setStatus,
  top,
  left,
  start,
  replay,
  setReplay,
  playerName,
  setPlayerName,
}) => {
  const [userInfo, setUserInfo] = useState(false);

  const submitHandler = () => {
    if (playerName === "") {
      return;
    } else {
      setReplay(true);
      setUserInfo(true);
    }
  };

  const handleOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <StyledHome>
      <TopScores />
      <Game
        playerName={playerName}
        setReplay={setReplay}
        replay={replay}
        status={status}
        setStatus={setStatus}
        top={top}
        left={left}
        start={start}
        playerName={playerName}
      />
      <div className={`player-info ${!userInfo}`}>
        <h1>Your Name</h1>
        <input
          data-testid="player-name"
          type="text"
          onChange={handleOnChange}
          value={playerName}
        />
        <button data-testid="submit" onClick={submitHandler}>
          Let's Play
        </button>
      </div>
      <ScoreBoard />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  .player-info.true {
    align-items: center;
    padding: 10rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    min-height: 40vh;
    top: 20rem;
    width: 80%;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    opacity: 1;
    transition: 1s ease;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    button {
      padding: 1.3rem 3rem;
      top: 1rem;
      border: none;
      color: #4d4d4d;
      outline: none;
      cursor: pointer;
      top: 2rem;
      position: relative;
      font-weight: 700;
      border-radius: 0.3rem;
      transition: 1s ease;
      :hover {
        background: #49d1ff;
        transition: 1s ease;
      }
    }
    input {
      padding: 1rem;
      background: white;
      cursor: text;
      top: 2rem;
      position: relative;
      font-size: large;
      border-radius: 2rem;
      border: none;
      outline: none;
    }
  }
  .player-info.false {
    opacity: 0;
    pointer-events: none;
    transition: 1s ease;
  }
`;
