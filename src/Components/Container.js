import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const SmallBox = styled.div`
  max-width: 500px;
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Container = ({ children }) => {
  return (
    <Box>
      <SmallBox>{children}</SmallBox>
    </Box>
  );
};

export default Container;
