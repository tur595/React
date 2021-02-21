import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slide } from "../animations";

const TopScores = () => {
  return (
    <StyledTopScores variants={slide} initial="hidden" animate="show">
      <h1>Top Scores: James Mike Joss</h1>
    </StyledTopScores>
  );
};

export default TopScores;

const StyledTopScores = styled(motion.div)`
  padding: 0rem 5rem;
  text-align: center;
  display: flex;
`;

const StyledScores = styled(motion.div)`
  display: flex;
`;
