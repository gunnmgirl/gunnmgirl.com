import React from "react";
import styled from "styled-components";

import Header from "./features/Header";
import Content from "./features/Content";
import SocialMedia from "./features/SocialMedia";
import GlobalStyle from "./GlobalStyle";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 0.6fr;
  min-height: 100vh;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content />
      <SocialMedia />
    </Container>
  );
}

export default App;
