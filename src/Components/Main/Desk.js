import React, { useState } from "react";
import styled from "styled-components";
import mojito from "Img/mojito.png";
import refresh from "Img/refresh.png";
import useEmoji from "Redux/useEmoji";
import Loading from "Components/Loading";
import store from "Redux/store";

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  height: 45vh;
  min-height: 260px;
  font-weight: 700;
  width: 100%;
  background-color: rgba(30, 30, 30, 1);
  color: rgba(18, 18, 18, 1);
`;

const MojitoImg = styled.img`
  position: absolute;
  height: 120px;
  top: -100px;
  z-index: 1000;
`;

const Box = styled.div`
  height: calc(100% - 90px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountBox = styled.div`
  margin-top: 30px;
  position: relative;
  height: 50px;
  width: 80px;
  background-color: rgba(54, 54, 54, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
`;

const Reset = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background-color: rgba(122, 122, 122, 1);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResetImg = styled.img`
  width: 12px;
  height: 12px; ;
`;

const Bottom = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shakit = styled.div`
  position: relative;
  height: 35px;
  width: 100px;
  border-radius: 30px;
  background-color: rgba(54, 54, 54, 1);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
  }
`;

const Desk = () => {
  const [isLoading, setisLoading] = useState(false);
  const emojiObj = useEmoji();
  const { red, orange, yellow, blue, purple, green, pink, grey } = emojiObj;
  const count = red + orange + yellow + blue + purple + green + pink + grey;
  const resetEmoji = () => {
    const result = window.confirm("이모지를 리셋하시겠어요?");
    if (result) {
      store.dispatch({
        type: "emoji",
        emoji: {
          red: 0,
          orange: 0,
          yellow: 0,
          blue: 0,
          purple: 0,
          green: 0,
          pink: 0,
          grey: 0,
        },
      });
    }
  };
  const shakeIt = () => {
    if (count === 0) {
      alert("감정을 눌러주세요!");
    } else {
      setisLoading(true);
      setTimeout(() => {
        store.dispatch({
          type: "stage",
          stage: 2,
        });
      }, 1200);
    }
  };
  return (
    <>
      <Container className="dD">
        <MojitoImg src={mojito}></MojitoImg>
        <Box>
          <Top>
            <CountBox>
              {count}
              <Reset onClick={resetEmoji}>
                <ResetImg src={refresh}></ResetImg>
              </Reset>
            </CountBox>
          </Top>
          <Bottom>
            <Shakit onClick={shakeIt}>쉐-킷!</Shakit>
          </Bottom>
        </Box>
      </Container>
      {isLoading ? <Loading></Loading> : null}
    </>
  );
};

export default Desk;
