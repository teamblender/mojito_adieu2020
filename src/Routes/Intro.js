import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "Components/Container";
import Footer from "Components/Footer";
import Header from "Components/Header";
import Start from "Components/Intro/Start";
import Adieu from "Components/Intro/Adieu";

const Intro = () => {
  return (
    <Container>
      <Header></Header>
      <Adieu></Adieu>
      <Footer text="지금까지 1000명이 칵테일을 받아갔어요!">
        <Start></Start>
      </Footer>
    </Container>
  );
};

export default Intro;
