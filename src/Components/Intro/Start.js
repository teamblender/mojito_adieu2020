import React from "react";
import styled from "styled-components";
import cocktail from "Img/cocktail.png";
import store from "Redux/store";

const Start = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(18, 18, 18, 1);
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(18, 18, 18, 0);
  }
`;

const Title = styled.div`
  font-size: 18px;
`;

const StartHover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: wiggle 1.5s infinite;
  &:hover {
    opacity: 1;
  }
`;

const StartHoverImg = styled.img`
  width: 40px;
  height: 40px;
`;

const StartButton = () => {
  const toNext = () => {
    store.dispatch({ type: "stage", stage: 1 });
  };
  return (
    <Start onClick={toNext} className="dD">
      <Title>난 어떤 칵테일을 받을까?</Title>
      <StartHover>
        <StartHoverImg src={cocktail}></StartHoverImg>
      </StartHover>
    </Start>
  );
};

export default StartButton;
