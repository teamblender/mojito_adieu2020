import React, { useState, useEffect } from "react";
import styled from "styled-components";
import adieu2 from "Img/adieu2.png";
import mojito from "Img/mojito.png";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 190px);
  font-size: 24px;
  @media screen and (max-height: 600px) {
    height: calc(100vh - 130px);
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 190px);
  @media screen and (max-height: 600px) {
    margin-top: 40px;
  }
`;

const AdieuImg = styled.img`
  height: 20px;
  margin-bottom: 15px;
`;

const CocktailBox = styled.div`
  height: 130px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cocktail = styled.img`
  height: 130px;
  margin-bottom: 5px;
  overflow: hidden;
  z-index: 1000;
`;

const CocktailBG = styled.div`
  width: 95%;
  height: 95%;
  position: absolute;
  animation: colorchange 20s infinite alternate;
`;

const RestDate = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  font-size: 14px;
  padding: 8px 16px;
  color: black;
  font-weight: 700;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Comment = styled.div`
  padding-top: 10px;
  height: 90px;
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  line-height: 30px;
  @media screen and (max-height: 600px) {
    padding-top: 30px;
    font-size: 14px;
    line-height: 24px;
  }
`;

const HL = styled.span`
  font-weight: 700;
`;

const Mojito = styled.img`
  height: 100px;
`;

const Adieu = () => {
  const Dday = new Date(2021, 0, 1);
  const Now = new Date();
  const gap = Now.getTime() - Dday.getTime();
  const result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
  const RN = () => {
    const RandVal = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    return RandVal;
  };
  const GT = "Img/" + "type" + RN() + ".png";
  return (
    <Box className="dD">
      <Top>
        <AdieuImg src={adieu2}></AdieuImg>
        <CocktailBox>
          <Cocktail src={GT}></Cocktail>
          <CocktailBG></CocktailBG>
        </CocktailBox>
        <RestDate>D-{result}일</RestDate>
      </Top>
      <Bottom>
        <Comment>
          2020년 수고 많았어요!
          <p></p>한 해 동안 느낀 감정들을 전해주시면
          <p></p>
          <HL>이번 해를 기념할 칵테일을 타드릴게요!</HL>
        </Comment>
        <Mojito src={mojito}></Mojito>
      </Bottom>
    </Box>
  );
};

export default Adieu;
