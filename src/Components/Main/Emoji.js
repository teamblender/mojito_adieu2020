import React from "react";
import styled from "styled-components";
import ered from "Img/Emoji/1.png";
import eorange from "Img/Emoji/2.png";
import eyellow from "Img/Emoji/3.png";
import eblue from "Img/Emoji/4.png";
import epurple from "Img/Emoji/5.png";
import egreen from "Img/Emoji/6.png";
import epink from "Img/Emoji/7.png";
import egrey from "Img/Emoji/8.png";
import store from "Redux/store";
import useEmoji from "Redux/useEmoji";

const EmojiBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 18, 1);
  color: rgba(18, 18, 18, 1);
  overflow: scroll;
`;

const EmojiItem = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  &:first-child {
    margin-left: 20px;
  }
  &:nth-child(8) {
    margin-right: 0px;
  }
`;

const MarginRight = styled.div`
  min-width: 20px;
  height: 40px;
`;

const Emoji = () => {
  const emojiObj = useEmoji();
  const emojis = [ered, eorange, eyellow, eblue, epurple, egreen, epink, egrey];
  const emojisName = [
    "red",
    "orange",
    "yellow",
    "blue",
    "purple",
    "green",
    "pink",
    "grey",
  ];
  const emojiClick = (e) => {
    const name = e.target.name;
    const recent = { recent: name };
    store.dispatch({
      type: "emoji",
      emoji: { ...emojiObj, [name]: emojiObj[name] + 1 },
    });
    store.dispatch({ type: "recent", recent: { ...recent, recent: name } });
  };

  return (
    <EmojiBox className="dD">
      {emojis.map((emoji, index) => {
        return (
          <EmojiItem
            src={emoji}
            key={index}
            onClick={emojiClick}
            name={emojisName[index]}
          ></EmojiItem>
        );
      })}
      <MarginRight></MarginRight>
    </EmojiBox>
  );
};

export default Emoji;
