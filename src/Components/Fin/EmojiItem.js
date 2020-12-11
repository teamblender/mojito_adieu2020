import React from "react";
import styled from "styled-components";

const EmojiContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

const EmojiBox = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmojiImg = styled.img`
  width: 40px;
  height: 40px;
`;

const Pct = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const GraphBox = styled.div`
  width: calc(100% - 70px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GraphCount = styled.div`
  width: calc(100% - 15px);
  height: 20px;
  display: flex;
  align-items: center;
`;

const GraphBar = styled.div`
  width: calc(100% - 15px);
  margin-top: 5px;
  background-color: rgba(42, 41, 41, 1);
  height: 10px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

const GraphColor = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => (props.percentage ? `${props.percentage}%` : "0%")};
  background-color: ${(props) =>
    props.percentage ? `#${props.color}` : "white"};
`;

const EmojiItem = ({ count, percentage, name, color }) => {
  const emojiUrl = "Img/Emoji/" + name + ".png";
  const percentageMath = Math.round(percentage);
  return (
    <EmojiContainer>
      <EmojiBox>
        <EmojiImg src={emojiUrl}></EmojiImg>
      </EmojiBox>
      <GraphBox>
        <GraphCount>
          {count}개<Pct>({percentageMath}%)</Pct>
        </GraphCount>
        <GraphBar>
          <GraphColor percentage={percentage} color={color}></GraphColor>
        </GraphBar>
      </GraphBox>
    </EmojiContainer>
  );
};

export default EmojiItem;
