import React, { useEffect } from "react";
import styled from "styled-components";
import useRecent from "Redux/useRecent";
import { v4 as uuidv4 } from "uuid";

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(55vh - 60px);
  @media screen and (max-height: 600px) {
    height: 55vh;
    max-height: calc(100vh - 260px);
  }
`;

const DropZone = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5px;
  background-color: grey;
  width: 50px;
  height: 40px;
`;

const Air = () => {
  const recent = useRecent();
  useEffect(() => {
    if (recent.recent) {
      const RN = () => {
        const RandVal = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
        return RandVal;
      };
      const emjSrc = "Img/Emoji/" + recent.recent + ".png";
      const unique = uuidv4();
      const falling = document.createElement("img");
      falling.style.width = "24px";
      falling.style.height = "24px";
      falling.style.animation = "falling 1s";
      falling.style.position = "absolute";
      falling.style.right = RN() + "px";
      falling.className = unique;
      falling.src = emjSrc;
      document.getElementById("DZ").appendChild(falling);
      setTimeout(() => {
        const element = document.getElementsByClassName(unique);
        element[0].parentNode.removeChild(element[0]);
      }, 1000);
    }
  }, [recent]);
  return (
    <Box>
      <DropZone id="DZ"></DropZone>
    </Box>
  );
};

export default Air;
