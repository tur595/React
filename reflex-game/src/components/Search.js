import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScoreBoard = () => {
  return (
    <StyledScoreBoard>
      <h2>Scoreboard</h2>
      <div className="results">
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
        <h1>Sinan</h1>
        <h1>Basak</h1>
        <h1>Osman</h1>
      </div>
    </StyledScoreBoard>
  );
};

export default ScoreBoard;

const StyledScoreBoard = styled(motion.div)`
  position: fixed;
  top: 0;
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
  .results {
  }
`;
