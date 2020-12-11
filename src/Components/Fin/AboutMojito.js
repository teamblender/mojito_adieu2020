import React, { useEffect } from "react";
import styled from "styled-components";
import close from "Img/close.png";
import illust from "Img/illust.png";

const TopBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const TopImg = styled.img`
  height: 70%;
  margin-bottom: 20px;
`;

const CenterBox = styled.div`
  line-height: 1.7;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 15px 0px;
`;

const Border = styled.div`
  width: 90%;
  height: 2px;
  background-color: rgba(42, 41, 41, 1);
  margin: 20px 0px;
`;

const Exit = styled.div`
  position: fixed;
  bottom: 15px;
  z-index: 2000;
  width: 50px;
  height: 50px;
  background-color: rgba(42, 41, 41, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover > img {
    opacity: 1;
  }
`;

const BottomBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-weight: 500;
  font-family: "GmarketSans";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const KeywordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Keyword = styled.div`
  padding: 9px 18px;
  border-radius: 20px;
  color: black;
  background-color: ${(props) =>
    props.bgColor ? `#${props.bgColor}` : "rgba(38, 38, 38, 1)"};
  font-size: 12px;
  margin-bottom: 10px;
`;

const Appstore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 90%;
  height: 60px;
  margin-bottom: ${(props) => (props.android ? "0px" : "10px")};
  background-color: rgba(38, 38, 38, 1);
  &:hover {
    background-color: ${(props) =>
      props.android ? "rgba(72, 255, 72, 1)" : "white"};
    color: black;
  }
`;

const Margin = styled.div`
  height: 70px;
  width: 100%;
`;

const ExitImg = styled.img`
  width: 16px;
  opacity: 0.3;
`;

const Gradient = styled.div`
  position: fixed;
  z-index: 1000;
  height: 80px;
  width: 100vw;
  bottom: 0;
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(18, 18, 18, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(18, 18, 18, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(18, 18, 18, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);
`;

const AboutMojito = ({ changeStage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBox>
        <TopImg src={illust}></TopImg>
      </TopBox>
      <CenterBox>
        <p>모지또는 감정을 재료로 칵테일을 만드는 요정이에요.</p>
        <p>귀엽고 장난기가 많지만 칵테일을 만드는 실력은 최고랍니다.</p>
        <p>
          순간순간의 감정을 전해주면 모지또는 하루를 돌아볼 수 있는 멋진
          칵테일을 만들어줄 거예요.
        </p>
        그러니 감정을 마음 속에만 묵혀두지 말고 모지또에게 전해줘보세요!
      </CenterBox>
      <Border></Border>
      <BottomBox>
        <Title>모지또를 앱으로 만나보세요!</Title>
        <KeywordBox>
          <Keyword bgColor="ffb901">데일리 이모지 다이어리</Keyword>
          <Keyword bgColor="0AC765">앱스토어 선정 8월 최고의 앱</Keyword>
          <Keyword bgColor="157dfb">앱스토어 선정 오늘의 앱</Keyword>
          <Keyword bgColor="FF65A6">앱스토어 선정 힐링 앱</Keyword>
        </KeywordBox>
        <Appstore href="https://www.naver.com" target="_blank" android={false}>
          애플 앱스토어
        </Appstore>
        <Appstore href="https://www.naver.com" target="_blank" android={true}>
          구글 플레이스토어
        </Appstore>
      </BottomBox>
      <Border></Border>
      <Appstore
        href="https://www.instagram.com/mojito._.b/"
        target="_blank"
        android={false}
      >
        모지또 인스타그램
      </Appstore>
      <Margin></Margin>
      <Exit onClick={changeStage}>
        <ExitImg src={close}></ExitImg>
      </Exit>
      <Gradient></Gradient>
    </>
  );
};

export default AboutMojito;
