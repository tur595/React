import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slide } from "../animations";
import firebase from "../utils/firebase";

const TopScores = () => {
  const [topScores, setTopScores] = useState();

  useEffect(() => {
    const scoreRef = firebase
      .database()
      .ref("scores")
      .orderByChild("delta")
      .limitToFirst(3);
    scoreRef.on("value", (snapshot) => {
      const scores = snapshot.val();
      const topScores = [];
      for (let id in scores) {
        topScores.push(scores[id]);
      }
      setTopScores(topScores);
    });
  }, []);

  return (
    <StyledTopScores variants={slide} initial="hidden" animate="show">
      <h1>Top Scores:</h1>
      {topScores
        ? //index parameter is to prevent key duplication
          topScores.map((topScores, index) => (
            <h2 key={index}>{`${index + 1}${". "}${topScores.playerName}${" "}${
              topScores.delta
            }${"ms"}`}</h2>
          ))
        : ""}
    </StyledTopScores>
  );
};
export default TopScores;

const StyledTopScores = styled(motion.div)`
  padding: 0rem 5rem;
  width: 120%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  background: lightblue;
  border-radius: 1rem;
  h2 {
    padding-top: 0.4rem;
  }
`;
