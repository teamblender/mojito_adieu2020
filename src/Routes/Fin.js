import React, { useState, useEffect } from "react";
import Container from "Components/Container";
import Header from "Components/Header";
import StoreLink from "Components/Fin/StoreLink";
import CocktailCard from "Components/Fin/CocktailCard";
import EmojiCard from "Components/Fin/EmojiCard";
import store from "Redux/store";
import Mix from "Cocktail/Mix";
import Match from "Cocktail/Match";
import Loading from "Components/Loading";
import AboutMojito from "Components/Fin/AboutMojito";

const Fin = () => {
  const emojiObj = store.getState().emoji;
  const [stage, setStage] = useState(false);
  const changeStage = () => {
    if (stage) {
      setStage(false);
    } else {
      setStage(true);
    }
  };
  const [cocktailData, setCocktailData] = useState(null);
  const FinalColor = Mix(emojiObj);
  const cocktailLoad = async () => {
    const FinalCocktail = await Match(FinalColor);
    if (cocktailData === null) {
      setCocktailData(FinalCocktail);
    }
    return FinalCocktail;
  };
  cocktailLoad();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return cocktailData === null ? (
    <Loading></Loading>
  ) : stage ? (
    <Container>
      <Header fin={true}></Header>
      <AboutMojito changeStage={changeStage}></AboutMojito>
    </Container>
  ) : (
    <Container>
      <Header fin={true}></Header>
      <CocktailCard
        cocktailData={cocktailData}
        FinalColor={FinalColor}
      ></CocktailCard>
      <EmojiCard emojiObj={emojiObj}></EmojiCard>
      <StoreLink
        cocktailData={cocktailData}
        changeStage={changeStage}
      ></StoreLink>
    </Container>
  );
};

export default Fin;
