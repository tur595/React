import React from "react";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Nav />
      <Home />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  margin-right: 30%;
`;
