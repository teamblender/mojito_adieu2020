import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  max-width: 500px;
  height: ${(props) => (props.text ? "130px" : "90px")};
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallBox = styled.div`
  height: 70px;
  margin-top: 10px;
  width: calc(100% - 30px);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const Numbers = styled.a`
  color: rgba(255, 255, 255, 0.4);
`;

const Footer = ({ children, text, href, fin }) => {
  return (
    <Box text={text}>
      <SmallBox fin={fin}>{children}</SmallBox>
      {text ? (
        <Numbers className="dD" href={href ? href : null} target="_blank">
          {text}
        </Numbers>
      ) : null}
    </Box>
  );
};

export default Footer;
