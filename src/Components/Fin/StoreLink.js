import React, { useState } from "react";
import styled from "styled-components";
import mojito from "Img/mojito.png";

const Background = styled.div`
  width: 100%;
  background-color: rgba(30, 30, 30, 1);
  display: flex;
  justify-content: center;
  border-radius: 20px;
  margin-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
  font-family: "GmarketSans";
  font-weight: 300;
`;

const MojitoImg = styled.img`
  margin-top: 10px;
  height: 50px;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: 100%;
`;

const Links = styled.div`
  width: 90%;
  height: 40px;
  background-color: rgba(18, 18, 18, 1);
  background-color: rgba(42, 42, 41, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.5);
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: black;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 25px;
  color: rgba(255, 255, 255, 0.5);
`;

const TextLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const StoreLink = ({ changeStage }) => {
  const copyLink = () => {
    const Link = "https://www.naver.com";
    navigator.clipboard.writeText(Link).then(
      function () {
        alert("친구들에게 공유할 링크가 복사됐어요!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };
  return (
    <>
      <Background>
        <Container className="dD">
          <TopBox>
            <MojitoImg src={mojito}></MojitoImg>
          </TopBox>
          <BottomBox>
            <Links onClick={copyLink}>친구야 너도 해봐!</Links>
            <Links onClick={changeStage}>모지또가 뭘까요?</Links>
          </BottomBox>
        </Container>
      </Background>
      <Text>
        <TextLink href="https://teamblender.co" target="_blank">
          ©Team Blender
        </TextLink>
      </Text>
    </>
  );
};

export default StoreLink;
