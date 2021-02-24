import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import firebase from "../utils/firebase";

const ScoreBoard = () => {
  const [scoreList, setScoreList] = useState();
  const [scoreBoardTrigger, setScoreBoardTrigger] = useState(false);
  const componentWillUnmount = () => {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  };

  //get items from db
  useEffect(() => {
    const playerRef = firebase.database().ref("scores");
    playerRef.on("value", (snapshot) => {
      const scores = snapshot.val();
      const scoreList = [];
      for (let id in scores) {
        scoreList.push(scores[id]);
      }
      setScoreList(scoreList.reverse());
    });
  }, [scoreBoardTrigger]);

  //search functionality
  const handleOnChange = (e) => {
    const playerRef = firebase
      .database()
      .ref("scores")
      .orderByChild("playerName")
      .equalTo(e.target.value);
    playerRef.on("value", (snapshot) => {
      const scores = snapshot.val();
      const scoreList = [];
      for (let id in scores) {
        scoreList.push(scores[id]);
      }
      setScoreList(scoreList);
    });
    if (e.target.value === "") {
      setScoreBoardTrigger(!scoreBoardTrigger);
    }
  };

  return (
    <StyledScoreBoard>
      <h1>Scoreboard</h1>
      <div className="search">
        <h4>Search players:</h4>
        <input type="text" onChange={handleOnChange} />
      </div>
      <div className="line"></div>
      <div className="results">
        {scoreList
          ? //index parameter is to prevent key duplication
            scoreList.map((score, index) => (
              <h2 key={index}>{`${score.playerName}:${" "}${
                score.delta
              }${"ms"}`}</h2>
            ))
          : ""}
      </div>
    </StyledScoreBoard>
  );
};

export default ScoreBoard;

const StyledScoreBoard = styled(motion.div)`
  position: fixed;
  top: 0;
  text-align: center;
  right: 0;
  width: 20rem;
  height: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 50px rgb(207, 205, 205);
  overflow: scroll;
  h1 {
    padding: 1rem;
  }
  h2 {
    padding: 1rem;
    text-align: center;
  }
  .search {
    padding-top: 0.5rem;
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .results {
  }
  .line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;
