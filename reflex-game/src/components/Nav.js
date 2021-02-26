import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeIn } from "../animations";
import firebase from "../utils/firebase";

const Nav = ({ playerName, status }) => {
  const [data, setData] = useState();
  const [best, setBest] = useState();

  useEffect(() => {
    const playerRef = firebase
      .database()
      .ref("scores")
      .orderByChild("playerName")
      .equalTo(`${playerName}`);
    playerRef.on("value", (snapshot) => {
      const player = snapshot.val();
      const data = [];
      for (let id in player) {
        data.push(player[id].delta);
      }
      setData(data);
      setBest(Math.min(...data)); //firebaseden direkt query alamadim
    });
  }, [status]);

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <h1>Reflex Game</h1>
      {best ? <h2>{`Best: ${best}ms`}</h2> : ""}
      {data ? <h2>{`Last: ${data[data.length - 1]}ms`}</h2> : ""}
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.div)`
  padding: 3rem;
  h2 {
    float: right;
    display: flex;
    padding: 0rem 0rem 0rem 10rem;
    justify-content: space-between;
  }
`;
