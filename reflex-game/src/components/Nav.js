import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeIn } from "../animations";

const Nav = () => {
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <h1>Reflex Game</h1>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.div)`
  padding: 3rem;
`;
