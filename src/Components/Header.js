import React from "react";
import styled from "styled-components";
import logo from "Img/logo.png";

const Box = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 600px) {
    display: ${(props) => (props.fin ? "flex" : "none")};
  }
`;

const SmallBox = styled.div`
  height: 40px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 20px;
  opacity: 0.4;
`;

const Header = ({ fin }) => {
  return (
    <Box fin={fin}>
      <SmallBox>
        <Logo src={logo}></Logo>
      </SmallBox>
    </Box>
  );
};

export default Header;
