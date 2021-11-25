import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

function App() {
  const [status, setStatus] = useState(false);
  const [start, setStart] = useState();
  const [replay, setReplay] = useState(false);
  const [playerName, setPlayerName] = useState("");
  let top = Math.floor(Math.random() * 500);
  let left = Math.floor(Math.random() * 500);
  let waitTime = null;

  useEffect(() => {
    if (replay === true) {
      waitTime = Math.random() * 5000;
      setTimeout(() => {
        setStatus(!status);
        setStart(Date.now());
        setReplay(false);
      }, waitTime);
    }
  }, [replay]);

  return (
    <StyledApp>
      <GlobalStyles />
      <Nav status={status} playerName={playerName} />
      <Home
        playerName={playerName}
        setPlayerName={setPlayerName}
        setReplay={setReplay}
        replay={replay}
        status={status}
        setStatus={setStatus}
        top={top}
        left={left}
        start={start}
      />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  margin-right: 30%;
`;
