import React from "react";
import styled from "styled-components";
import EmojiItem from "Components/Fin/EmojiItem";

const Container = styled.div`
  width: 100%;
  background-color: rgba(30, 30, 30, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
`;

const TopBox = styled.div`
  width: 100%;
  padding-top: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: "GmarketSans";
  font-weight: 300;
`;

const BottomBox = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
`;

const Emojicard = ({ emojiObj }) => {
  const emojiColor = {
    red: "eb4c36",
    orange: "ff7e00",
    yellow: "ffb901",
    blue: "157dfb",
    purple: "8d40ee",
    green: "0AC765",
    pink: "FF65A6",
    grey: "DCDCDC",
  };
  const { red, orange, yellow, blue, purple, green, pink, grey } = emojiObj;
  const count = red + orange + yellow + blue + purple + green + pink + grey;
  const emojiArr = [];
  const items = [];
  for (const name in emojiObj) {
    emojiArr.push({
      name: name,
      count: emojiObj[name],
      color: emojiColor[name],
    });
  }
  emojiArr.sort(function (a, b) {
    return b.count - a.count;
  });
  return (
    <Container className="dD">
      <TopBox>칵테일에 들어간 감정</TopBox>
      <BottomBox>
        {emojiArr.map((emoji, index) => {
          return emoji.count > 0 ? (
            <EmojiItem
              key={index}
              percentage={(emoji.count / count) * 100}
              count={emoji.count}
              name={emoji.name}
              color={emoji.color}
            ></EmojiItem>
          ) : null;
        })}
      </BottomBox>
    </Container>
  );
};

export default Emojicard;
