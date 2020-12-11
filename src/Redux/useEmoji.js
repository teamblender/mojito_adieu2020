import { useState, useEffect } from "react";
import store from "Redux/store";

const unsubscribe = store.subscribe(() => {});

export default () => {
  const [emojis, setEmojis] = useState({
    red: 0,
    orange: 0,
    yellow: 0,
    blue: 0,
    purple: 0,
    green: 0,
    pink: 0,
    grey: 0,
  });
  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().emoji === undefined) {
        setEmojis({
          red: 0,
          orange: 0,
          yellow: 0,
          blue: 0,
          purple: 0,
          green: 0,
          pink: 0,
          grey: 0,
        });
      } else {
        setEmojis(store.getState().emoji);
      }
    });
    return () => unsubscribe();
  }, []);
  return emojis;
};
