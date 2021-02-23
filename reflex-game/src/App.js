import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

function App() {
  let [status, setStatus] = useState(false);
  let [start, setStart] = useState();
  let [replay, setReplay] = useState(false);
  let top = Math.floor(Math.random() * 500);
  let left = Math.floor(Math.random() * 500);
  let waitTime = null;

  useEffect(() => {
    waitTime = Math.random() * 5000;
    setTimeout(() => {
      setStatus(!status);
      setStart(Date.now());
    }, waitTime);
  }, [replay]);

  return (
    <StyledApp>
      <GlobalStyles />
      <Nav />
      <Home
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
