import { useState, useEffect } from "react";
import store from "Redux/store";

const unsubscribe = store.subscribe(() => {});

export default () => {
  const [recent, setRecent] = useState({ recent: null });
  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().recent === undefined) {
        setRecent({ recent: null });
      } else {
        setRecent(store.getState().recent);
      }
    });
    return () => unsubscribe();
  }, []);
  return recent;
};
