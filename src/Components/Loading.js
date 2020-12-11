import React from "react";
import styled from "styled-components";
import shakitimg from "Img/shakit.png";

const Box = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2000;
`;

const PopUp = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  z-index: 3000;
`;

const Shakit = styled.img`
  animation: wiggle 1s infinite;
  width: 30px;
  height: 30px;
`;

const Loading = () => {
  return (
    <Box className="dD">
      <PopUp>
        <Shakit src={shakitimg}></Shakit>
      </PopUp>
    </Box>
  );
};

export default Loading;
