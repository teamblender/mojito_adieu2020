import { useState, useEffect } from "react";
import store from "Redux/store";

const unsubscribe = store.subscribe(() => {});

export default () => {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().stage === undefined) {
        setStage(0);
      } else {
        setStage(store.getState().stage);
      }
    });
    return () => unsubscribe();
  }, []);
  return stage;
};
