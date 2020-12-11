import React from "react";
import Container from "Components/Container";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Emoji from "Components/Main/Emoji";
import Desk from "Components/Main/Desk";
import Air from "Components/Main/Air";

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Air></Air>
      <Desk></Desk>
      <Footer>
        <Emoji></Emoji>
      </Footer>
    </Container>
  );
};

export default Main;
