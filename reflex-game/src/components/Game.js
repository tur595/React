import React from "react";
import styled from "styled-components";
import { useState } from "react";
import firebase from "../utils/firebase";

const Game = ({
  status,
  setStatus,
  top,
  left,
  start,
  replay,
  setReplay,
  playerName,
}) => {
  const [delta, setDelta] = useState(null); //player score
  const [resultState, setResultState] = useState(false); //state for ui interaction
  const playerRef = firebase.database().ref("scores");

  const blockClickHandler = () => {
    setDelta(Date.now() - start);
    setStatus(!status);
    setResultState(!resultState);
  };

  const replayHandler = () => {
    setResultState(!resultState);
    setReplay(!replay);
    setDelta(Number(delta));
    const playerInfo = {
      playerName,
      delta,
    };
    playerRef.push(playerInfo);
  };

  return (
    <StyledGame top={top} left={left}>
      <div onClick={blockClickHandler} className={`block ${status}`}></div>
      <div className={`result ${resultState}`}>
        <h1>You have reacted in {delta} miliseconds!</h1>
        <button onClick={replayHandler}>
          <h1>Submit score and play again</h1>
        </button>
      </div>
    </StyledGame>
  );
};

export default Game;

const StyledGame = styled.div`
  padding: 1rem;
  height: 50rem;
  .block.true {
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    position: relative;
    background: #333;
    width: 80px;
    height: 80px;
    border-radius: 20%;
    font-size: 45px;
    cursor: pointer;
    opacity: 1;
    z-index: 5;
  }
  .block.false {
    opacity: 0;
    pointer-events: none;
  }

  .result.true {
    padding: 10rem;
    position: relative;
    min-height: 40vh;
    top: 5rem;
    left: 4rem;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    opacity: 1;
    transition: 0.5s ease;
    button {
      :hover {
        background: #49d1ff;
      }
      padding: 2rem;
      border: none;
      background: lightblue;
      cursor: pointer;
      top: 2rem;
      position: relative;
      border-radius: 1rem;
    }
  }
  .result.false {
    opacity: 0;
  }
`;
