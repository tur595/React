import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, release, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{release}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 95%;
    height: 40vh;
    object-fit: cover;
    padding: 0rem 0rem 1rem;
    border-radius: 0.5rem;
  }
`;

export default Game;
