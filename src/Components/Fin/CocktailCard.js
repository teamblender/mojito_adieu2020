import React from "react";
import styled from "styled-components";
import adieucocktail from "Img/adieucocktail.png";

const Container = styled.div`
  width: 100%;
  background-color: rgba(30, 30, 30, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AdieuBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdieuImg = styled.img`
  height: 30px;
  opacity: 0.5;
`;

const CocktailBox = styled.div`
  height: 230px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  position: relative;
`;

const CocktailImg = styled.img`
  height: 210px;
  z-index: 1000;
`;

const CocktailBG = styled.div`
  width: 120px;
  animation: fill1 2s forwards;
  bottom: 7px;
  position: absolute;
  background-color: ${(props) =>
    props.color ? `#${props.color}` : "rgba(30, 30, 30, 1)"};
`;

const BottomBox = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  font-family: "GmarketSans";
`;

const DescBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

const Desc1Box = styled.div`
  width: 100%;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Desc1 = styled.div`
  margin-top: 8px;
  border-radius: 20px;
  background-color: rgba(42, 42, 41, 1);
  font-size: 14px;
  line-height: 1.5;
  padding: 7px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;
  position: relative;
  margin-right: 7px;
  &:last-child {
    margin-right: 0px;
  }
`;

const Desc2 = styled.div`
  padding: 30px 30px 0px;
  font-weight: 300;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  line-height: 1.5;
`;

const CocktailCard = ({ cocktailData, FinalColor }) => {
  const glassSrc = "Img/" + "type" + cocktailData.type + "g.png";
  const ingredientData = cocktailData.ingredient;
  return (
    <Container className="dD" FinalColor={FinalColor}>
      <TopBox>
        <AdieuBox>
          <AdieuImg src={adieucocktail}></AdieuImg>
        </AdieuBox>
        <CocktailBox>
          <CocktailImg src={glassSrc}></CocktailImg>
          <CocktailBG color={cocktailData.color}></CocktailBG>
        </CocktailBox>
      </TopBox>
      <BottomBox>
        <TitleBox>{cocktailData.name}</TitleBox>
        <DescBox>
          <Desc1Box>
            {ingredientData.map((ingredient, index) => {
              return (
                <Desc1
                  key={index}
                  alcohol={index == 0 ? true : false}
                  color={cocktailData.color}
                >
                  {index === 0 ? ingredient + "% Alcohol" : ingredient}
                </Desc1>
              );
            })}
          </Desc1Box>
          <Desc2>{cocktailData.comment}</Desc2>
        </DescBox>
      </BottomBox>
    </Container>
  );
};

export default CocktailCard;
